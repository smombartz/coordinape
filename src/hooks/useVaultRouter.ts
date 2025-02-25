// - Contract Imports
import { BigNumber } from '@ethersproject/bignumber';
import { useWeb3React } from '@web3-react/core';
import { utils } from 'ethers';
import { GraphQLTypes } from 'lib/gql/__generated__/zeus';
import { addVaultTx } from 'lib/gql/mutations';
import { getTokenAddress, getWrappedAmount } from 'lib/vaults';
import type { Contracts } from 'lib/vaults';

import { sendAndTrackTx, SendAndTrackTxResult } from 'utils/contractHelpers';

import type { Vault } from './gql/useVaults';
import { useApeSnackbar } from './useApeSnackbar';

export function useVaultRouter(contracts?: Contracts) {
  const { account } = useWeb3React();
  const { showError, showInfo } = useApeSnackbar();

  const deposit = async (
    vault: Vault,
    humanAmount: string
  ): Promise<SendAndTrackTxResult> => {
    if (!contracts) throw new Error('Contracts not loaded');
    const amount = BigNumber.from(
      utils.parseUnits(humanAmount, vault.decimals)
    );

    const tokenAddress = getTokenAddress(vault);
    const token = contracts.getERC20(tokenAddress);
    const [symbol, myAddress] = await Promise.all([
      token.symbol(),
      contracts.getMyAddress(),
    ]);
    const allowance = await token.allowance(
      myAddress,
      contracts.router.address
    );

    if (allowance.lt(amount)) {
      const result = await sendAndTrackTx(
        () => token.approve(contracts.router.address, amount),
        {
          showError,
          showInfo,
          signingMessage:
            'Please sign the transaction to approve the transfer.',
          description: `Approve ${humanAmount} ${symbol}`,
          chainId: contracts.chainId,
        }
      );
      if (result.error) return result;
    }

    const txResult = await sendAndTrackTx(
      () =>
        contracts.router.delegateDeposit(
          vault.vault_address as string,
          tokenAddress,
          amount
        ),
      {
        showError,
        showInfo,
        signingMessage: 'Please sign the transaction to deposit tokens.',
        description: `Deposit ${humanAmount} ${symbol}`,
        chainId: contracts.chainId,
      }
    );
    if (txResult?.tx)
      await addVaultTx({
        tx_type: 'Deposit',
        vault_id: vault.id,
        tx_hash: txResult.tx.hash,
      });
    return txResult;
  };

  const withdraw = async (
    vault: GraphQLTypes['vaults'],
    humanAmount: string,
    underlying: boolean
  ): Promise<SendAndTrackTxResult> => {
    if (!contracts || !account)
      throw new Error('Contracts or account not loaded');
    const vaultContract = contracts.getVault(vault.vault_address);
    const tokenAddress = getTokenAddress(vault);
    const token = contracts.getERC20(tokenAddress);
    const symbol = await token.symbol();
    const shares = await getWrappedAmount(humanAmount, vault, contracts);
    const txResult = await sendAndTrackTx(
      () => vaultContract.apeWithdraw(shares, underlying),
      {
        showError,
        showInfo,
        signingMessage: 'Please sign the transaction to withdraw tokens.',
        chainId: contracts.chainId,
        description: `Withdraw ${humanAmount} ${symbol}`,
      }
    );
    if (txResult?.tx)
      await addVaultTx({
        tx_type: 'Withdraw',
        vault_id: vault.id,
        tx_hash: txResult.tx.hash,
      });
    return txResult;
  };

  return { deposit, withdraw };
}
