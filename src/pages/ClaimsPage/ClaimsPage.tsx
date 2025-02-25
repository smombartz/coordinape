import assert from 'assert';
import { useState } from 'react';

import { Dictionary } from 'lodash';
import groupBy from 'lodash/groupBy';
import { useQuery } from 'react-query';

import { LoadingModal, makeTable } from 'components';
import { useContracts } from 'hooks';
import useConnectedAddress from 'hooks/useConnectedAddress';
import { useMyProfile } from 'recoilState/app';
import { Box, Panel, Flex, Text, Button } from 'ui';
import { SingleColumnLayout } from 'ui/layouts';

import { getClaims, QueryClaim } from './queries';
import { useClaimAllocation } from './useClaimAllocation';

const currentClaims = (claims: QueryClaim[]) =>
  claims
    .sort(c => c.id)
    .reduce(
      (finalClaims, curr) =>
        finalClaims.filter(
          c =>
            c.distribution.vault.vault_address ==
              curr.distribution.vault.vault_address &&
            c.distribution.epoch.circle?.id ===
              curr.distribution.epoch.circle?.id
        ).length > 0
          ? finalClaims
          : [...finalClaims, curr],
      [] as QueryClaim[]
    );

const styles = {
  th: { whiteSpace: 'nowrap', textAlign: 'left' },
  thLast: { textAlign: 'right', width: '98%' },
};

export default function ClaimsPage() {
  // this causes errors if it's run at the top-level
  const ClaimsTable = makeTable<QueryClaim>('ClaimsTable');

  const address = useConnectedAddress();
  const contracts = useContracts();
  const claimTokens = useClaimAllocation();
  const profile = useMyProfile();
  const [claiming, setClaiming] = useState<Record<number, boolean>>({});

  const {
    isIdle,
    isLoading,
    isError,
    error,
    data: claims,
    refetch,
  } = useQuery(
    ['claims', profile.id],
    () => {
      assert(contracts);
      return getClaims(profile.id, contracts);
    },
    {
      enabled: !!(contracts && address),
      retry: false,
      staleTime: Infinity,
    }
  );

  if (isIdle || isLoading) return <LoadingModal visible />;
  if (isError || !claims)
    return (
      <SingleColumnLayout>
        {!claims ? (
          <>No claims found.</>
        ) : (
          <>Error retrieving your claims. {error}</>
        )}
      </SingleColumnLayout>
    );

  const claimsGroupByVault = groupBy(
    claims.sort(c => c.id),
    c => c.distribution.epoch.circle?.id && c.distribution.vault.vault_address
  );

  const processClaim = async (claimId: number) => {
    const claim = claims.find(c => c.id === claimId);
    assert(claim);
    assert(address);
    const { index, proof, distribution } = claim;

    const { claims: jsonClaims } = JSON.parse(distribution.distribution_json);
    const amount = jsonClaims[address.toLowerCase()].amount;

    setClaiming(val => ({ ...val, [claim.id]: true }));
    const hash = await claimTokens({
      claimId: claim.id,
      circleId: distribution.epoch.circle?.id,
      vault: distribution.vault,
      index: index,
      address,
      amount,
      proof: proof.split(','),
      distributionEpochId: distribution.distribution_epoch_id,
    });
    if (hash) refetch();
    setClaiming(val => ({ ...val, [claim.id]: false }));
  };

  return (
    <SingleColumnLayout>
      <Text h1>Claim Your Allocations</Text>
      <Box css={{ color: '$neutral', maxWidth: '60%' }}>
        You can claim all your rewards from this page. Note that you can claim
        them for all your epochs in one circle but each token requires its own
        claim transaction.
      </Box>

      <Panel css={{ mb: '$lg' }}>
        <ClaimsTable
          headers={[
            { title: 'Organization', css: styles.th },
            { title: 'Circle', css: styles.th },
            { title: 'Epochs', css: styles.th },
            { title: 'Rewards', css: styles.thLast },
          ]}
          data={currentClaims(claims.filter(c => !c.txHash))}
          startingSortIndex={2}
          startingSortDesc
          sortByColumn={() => {
            return c => c;
          }}
        >
          {({ id, unwrappedAmount, distribution }) => (
            <ClaimRow
              {...{ id, unwrappedAmount, distribution }}
              key={id}
              onClickClaim={() => processClaim(id)}
              claiming={claiming[id]}
              claimsGroupByVault={claimsGroupByVault}
            />
          )}
        </ClaimsTable>
      </Panel>

      <Text h2 css={{ mb: '$sm' }}>
        Claims History
      </Text>
      <Panel>
        <ClaimsTable
          headers={[
            { title: 'Organization', css: styles.th },
            { title: 'Circle', css: styles.th },
            { title: 'Epochs', css: styles.th },
            { title: 'Rewards', css: styles.thLast },
          ]}
          data={currentClaims(claims.filter(c => c.txHash))}
          startingSortIndex={2}
          startingSortDesc
          sortByColumn={() => {
            return c => c;
          }}
        >
          {({ id, amount, distribution }) => (
            <tr key={id}>
              <td>
                <Text>{distribution.epoch.circle?.organization?.name}</Text>
              </td>
              <td>
                <Flex row css={{ gap: '$sm' }}>
                  <Text>{distribution.epoch.circle?.name}</Text>
                </Flex>
              </td>
              <td>
                {formatEpochDates(
                  claimsGroupByVault[distribution.vault.vault_address]
                )}
              </td>
              <td>
                <Flex css={{ justifyContent: 'flex-end' }}>
                  <Flex
                    css={{
                      minWidth: '10vw',
                      justifyContent: 'flex-end',
                      gap: '$md',
                      mr: '$md',
                      '@sm': { minWidth: '20vw' },
                    }}
                  >
                    <Text>
                      {amount} {distribution.vault.symbol}
                    </Text>
                    <Button
                      color="primary"
                      outlined
                      css={{
                        fontWeight: '$normal',
                        minHeight: '$xs',
                        px: '$sm',
                        minWidth: '5vw',
                        borderRadius: '$2',
                      }}
                    >
                      View on Etherscan
                    </Button>
                  </Flex>
                </Flex>
              </td>
            </tr>
          )}
        </ClaimsTable>
      </Panel>
    </SingleColumnLayout>
  );
}

type ClaimRowProps = {
  distribution: QueryClaim['distribution'];
  unwrappedAmount: QueryClaim['unwrappedAmount'];
  onClickClaim: () => void;
  claimsGroupByVault: Dictionary<QueryClaim[]>;
  claiming: boolean;
};
const ClaimRow = ({
  distribution,
  unwrappedAmount,
  onClickClaim,
  claimsGroupByVault,
  claiming,
}: ClaimRowProps) => {
  return (
    <tr>
      <td>
        <Text>{distribution.epoch.circle?.organization?.name}</Text>
      </td>
      <td>
        <Flex row css={{ gap: '$sm' }}>
          <Text>{distribution.epoch.circle?.name}</Text>
        </Flex>
      </td>
      <td>
        <Text>
          {formatEpochDates(
            claimsGroupByVault[distribution.vault.vault_address]
          )}
        </Text>
      </td>
      <td>
        <Flex css={{ justifyContent: 'flex-end' }}>
          <Flex
            css={{
              minWidth: '10vw',
              justifyContent: 'flex-end',
              gap: '$md',
              mr: '$md',
              '@sm': { minWidth: '20vw' },
            }}
          >
            <Text>
              {unwrappedAmount &&
                parseFloat(unwrappedAmount?.toString()).toFixed(2)}{' '}
              {distribution.vault.symbol}
            </Text>
            <Button
              color="primary"
              outlined
              css={{
                fontWeight: '$normal',
                minHeight: '$xs',
                px: '$sm',
                minWidth: '5vw',
                borderRadius: '$2',
              }}
              onClick={onClickClaim}
              disabled={claiming}
            >
              {claiming ? 'Claiming...' : `Claim ${distribution.vault.symbol}`}
            </Button>
          </Flex>
        </Flex>
      </td>
    </tr>
  );
};

function formatEpochDates(claims: QueryClaim[]) {
  const startDate = new Date(claims[0].distribution.epoch.start_date);
  const endDate = new Date(
    claims[claims.length - 1].distribution.epoch.end_date
  );
  const epochsPlural = claims.length > 1 ? 'Epochs:' : 'Epoch:';

  const monthName = (_date: Date) =>
    _date.toLocaleString('default', { month: 'long' });

  return `${claims.length} ${epochsPlural} ${monthName(
    startDate
  )} ${startDate.getDate()} - ${monthName(
    endDate
  )} ${endDate.getDate()} ${endDate.getFullYear()}`;
}
