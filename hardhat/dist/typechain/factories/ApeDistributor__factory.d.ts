import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ApeDistributor, ApeDistributorInterface } from "../ApeDistributor";
export declare class ApeDistributor__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_registry: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ApeDistributor>;
    getDeployTransaction(_registry: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): ApeDistributor;
    connect(signer: Signer): ApeDistributor__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b506040516120ba3803806120ba83398101604081905261002f91610054565b600280546001600160a01b0319166001600160a01b0392909216919091179055610082565b600060208284031215610065578081fd5b81516001600160a01b038116811461007b578182fd5b9392505050565b612029806100916000396000f3fe608060405234801561001057600080fd5b50600436106100c55760003560e01c8063100956f9146100ca5780632417957e1461011757806324c17997146101485780633a5d5a391461015b5780633efd825e146101705780633fdd34cc146101b15780635abc5d0b146101c45780637b103999146101d7578063a78618c5146101ea578063a7fde93f1461020d578063bf6fe28714610220578063c313bac91461025a578063c8f4d8e314610285578063da269c09146102c7578063e4b8b2dc14610313575b600080fd5b6101046100d8366004611a1a565b600860209081526000948552604080862082529385528385208152918452828420909152825290205481565b6040519081526020015b60405180910390f35b6101046101253660046119d9565b600760209081526000938452604080852082529284528284209052825290205481565b610104610156366004611a6c565b61036b565b61016e610169366004611d6d565b610a57565b005b6101a461017e3660046119ae565b60036020908152600092835260408084209091529082529020546001600160a01b031681565b60405161010e9190611e1f565b61016e6101bf366004611c1b565b610abe565b61016e6101d2366004611b6f565b610c75565b6002546101a4906001600160a01b031681565b6101fd6101f8366004611b1e565b61109b565b604051901515815260200161010e565b61016e61021b366004611d9c565b61110e565b61010461022e366004611ad7565b600460209081526000948552604080862082529385528385208152918452828420909152825290205481565b610104610268366004611d6d565b600560209081526000928352604080842090915290825290205481565b610104610293366004611b1e565b6006602090815260009586526040808720825294865284862081529285528385208352908452828420909152825290205481565b6102fe6102d53660046119d9565b600060208181529381526040808220855292815282812090935282529020805460019091015482565b6040805192835260208301919091520161010e565b6103506103213660046119d9565b600160208181526000948552604080862082529385528385209052908352912080549181015460029091015483565b6040805193845260208401929092529082015260600161010e565b6002546040805163c45a015560e01b815290516000926001600160a01b03169163c45a0155916004808301926020929190829003018186803b1580156103b057600080fd5b505afa1580156103c4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103e89190611992565b6001600160a01b0316635487beb6886040518263ffffffff1660e01b81526004016104139190611e1f565b60206040518083038186803b15801561042b57600080fd5b505afa15801561043f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104639190611d51565b6104c05760405162461bcd60e51b8152602060048201526024808201527f4170654469737472696275746f723a205661756c7420646f6573206e6f7420656044820152631e1a5cdd60e21b60648201526084015b60405180910390fd5b6000336001600160a01b0316886001600160a01b0316638da5cb5b6040518163ffffffff1660e01b815260040160206040518083038186803b15801561050557600080fd5b505afa158015610519573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061053d9190611992565b6001600160a01b038a811660009081526003602090815260408083208d8452909152902054918116929092149250163314806105765750805b6105c05760405162461bcd60e51b815260206004820152601b60248201527a14d95b99195c8818d85b9b9bdd081d5c1b1bd8590818481c9bdbdd602a1b60448201526064016104b7565b856001600160a01b0316886001600160a01b031663fbfa77cf6040518163ffffffff1660e01b815260040160206040518083038186803b15801561060357600080fd5b505afa158015610617573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061063b9190611992565b6001600160a01b03161461068d5760405162461bcd60e51b81526020600482015260196024820152782b30bab63a1031b0b73737ba1039bab838363c903a37b5b2b760391b60448201526064016104b7565b8061069e5761069e888888876112f6565b60008781526005602090815260408083206001600160a01b03808b168086528285528386208054928f168752600486528487208e88528652848720828852865284872083885286529386208b905585529252805491926106fd83611f5c565b90915550506001600160a01b03808a1660009081526007602090815260408083208c84528252808320938b1683529290529081208054879290610741908490611ed2565b90915550506040516370a0823160e01b81526000906001600160a01b038916906370a0823190610775903090600401611e1f565b60206040518083038186803b15801561078d57600080fd5b505afa1580156107a1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107c59190611deb565b6040516378186c8960e11b81526004810188905260ff871660248201529091506000906001600160a01b038c169063f030d91290604401602060405180830381600087803b15801561081657600080fd5b505af115801561082a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061084e9190611deb565b90506000896001600160a01b03166370a08231306040518263ffffffff1660e01b815260040161087e9190611e1f565b60206040518083038186803b15801561089657600080fd5b505afa1580156108aa573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108ce9190611deb565b9050876108db8483611efe565b146109395760405162461bcd60e51b815260206004820152602860248201527f446964206e6f74207265636569766520636f727265637420616d6f756e74206f6044820152676620746f6b656e7360c01b60648201526084016104b7565b81156109f3578b6001600160a01b03167fc01d33a8020741602dd424793b13242b879ac09190c3314317c142ed94b8c1748d6001600160a01b031663fbfa77cf6040518163ffffffff1660e01b815260040160206040518083038186803b1580156109a357600080fd5b505afa1580156109b7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109db9190611992565b846040516109ea929190611e33565b60405180910390a25b6040805185815260ff891660208201529081018990526001600160a01b03808c16918d918f16907f4150e192e15f92cd46a4aeea3fff087735dd08c3ce908174c4e91e038c3b96f69060600160405180910390a450919a9950505050505050505050565b33600081815260036020908152604080832086845290915280822080546001600160a01b0319166001600160a01b03861690811790915590519092859290917f99c55459df64a58c031e4e675400c552c7ab3fb4952eaae32b64a091b14f7bcd9190a45050565b60005b8151811015610c7157610c5f828281518110610aed57634e487b7160e01b600052603260045260246000fd5b602002602001015160000151838381518110610b1957634e487b7160e01b600052603260045260246000fd5b602002602001015160200151848481518110610b4557634e487b7160e01b600052603260045260246000fd5b602002602001015160400151858581518110610b7157634e487b7160e01b600052603260045260246000fd5b602002602001015160600151868681518110610b9d57634e487b7160e01b600052603260045260246000fd5b602002602001015160800151878781518110610bc957634e487b7160e01b600052603260045260246000fd5b602002602001015160a00151888881518110610bf557634e487b7160e01b600052603260045260246000fd5b602002602001015160c00151898981518110610c2157634e487b7160e01b600052603260045260246000fd5b602002602001015160e001518a8a81518110610c4d57634e487b7160e01b600052603260045260246000fd5b60200260200101516101000151610c75565b80610c6981611f5c565b915050610ac1565b5050565b610c82898989898961109b565b15610cc15760405162461bcd60e51b815260206004820152600f60248201526e436c61696d656420616c726561647960881b60448201526064016104b7565b604080516020808201889052606087901b6001600160601b03191682840152605480830187905283518084039091018152607490920183528151918101919091206001600160a01b038c81166000908152600484528481208d82528452848120918c1681529083528381208a825290925291902054610d429083908361143b565b610d7c5760405162461bcd60e51b815260206004820152600b60248201526a2bb937b73390383937b7b360a91b60448201526064016104b7565b6001600160a01b03808b1660009081526008602090815260408083208d845282528083208c85168452825280832093891683529290522054808511610e1f5760405162461bcd60e51b815260206004820152603360248201527f476976656e20636865636b706f696e74206e6f7420686967686572207468616e6044820152720818dd5c9c995b9d0818da1958dadc1bda5b9d606a1b60648201526084016104b7565b6000610e2b8287611efe565b9050600760008d6001600160a01b03166001600160a01b0316815260200190815260200160002060008c815260200190815260200160002060008b6001600160a01b03166001600160a01b0316815260200190815260200160002054811115610ee75760405162461bcd60e51b815260206004820152602860248201527f43616e277420636c61696d206d6f7265207468616e20636972636c652068617360448201526720746f206769766560c01b60648201526084016104b7565b6001600160a01b03808d1660009081526007602090815260408083208f84528252808320938e1683529290529081208054839290610f26908490611efe565b90915550506001600160a01b03808d1660009081526008602090815260408083208f845282528083208e851684528252808320938b16835292905220869055610f728c8c8c8c8c611453565b848015610f875750336001600160a01b038816145b1561101257604051627b8a6760e11b8152600481018290526001600160a01b0388811660248301528b169062f714ce90604401602060405180830381600087803b158015610fd457600080fd5b505af1158015610fe8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061100c9190611deb565b50611026565b6110266001600160a01b038b1688836114c4565b604080516001600160a01b038e81168252602082018e90528c811682840152606082018c9052608082018b9052891660a082015260c0810183905290517fb55a6b31ba8a4be3eabbb854fd8adef29d42d7aa9bf91df4c77d5687b59809ef9181900360e00190a1505050505050505050505050565b6000806110aa61010084611eea565b905060006110ba61010085611f77565b6001600160a01b0398891660009081526006602090815260408083209a835299815289822098909a168152968952878720958752948852508585209085529095525091902054600190911b90811614919050565b4281611118578091505b808210156111655760405162461bcd60e51b815260206004820152601a602482015279125b9d195c9d985b081cdd185c9d081a5b881d1a19481c185cdd60321b60448201526064016104b7565b604051806040016040528086815260200185815250600080336001600160a01b03166001600160a01b0316815260200190815260200160002060008981526020019081526020016000206000886001600160a01b03166001600160a01b0316815260200190815260200160002060008201518160000155602082015181600101559050506040518060600160405280600081526020018381526020018481525060016000336001600160a01b03166001600160a01b0316815260200190815260200160002060008981526020019081526020016000206000886001600160a01b03166001600160a01b031681526020019081526020016000206000820151816000015560208201518160010155604082015181600201559050507f13241e168a73dc44609b3c902bf37a573168224a56087e3bf181bfab79a617e033888888886040516112e59594939291906001600160a01b03958616815260208101949094529190931660408301526060820192909252608081019190915260a00190565b60405180910390a150505050505050565b6001600160a01b038085166000818152602081815260408083208884528252808320948716808452948252808320815180830183528154815260019182015481850152948452825280832088845282528083209483529390529190912081518311156113af5760405162461bcd60e51b815260206004820152602260248201527f416d6f756e742074617070656420657863656564206d617820616c6c6f77616e604482015261636560f01b60648201526084016104b7565b80600101544210156113fb5760405162461bcd60e51b8152602060048201526015602482015274115c1bd8da081a185cc81b9bdd081cdd185c9d1959605a1b60448201526064016104b7565b8151815461140a908590611ed2565b111561141a5761141a818361151f565b8281600001600082825461142e9190611ed2565b9091555050505050505050565b60008261144885846115fb565b1490505b9392505050565b600061146161010083611eea565b9050600061147161010084611f77565b6001600160a01b039788166000908152600660209081526040808320998352988152888220979099168152958852868620948652938752508484209084529094529190208054600190921b909117905550565b61151a8363a9059cbb60e01b84846040516024016114e3929190611e33565b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b0319909316929092179091526116b5565b505050565b60008260010154426115319190611efe565b9050816020015181116115865760405162461bcd60e51b815260206004820152601e60248201527f436f6f6c646f776e20696e74657276616c206e6f742066696e6973686564000060448201526064016104b7565b60008360020154116115d65760405162461bcd60e51b8152602060048201526019602482015278436972636c652063616e6e6f742074617020616e796d6f726560381b60448201526064016104b7565b6000808455426001850155600284018054916115f183611f45565b9190505550505050565b600081815b84518110156116ad57600085828151811061162b57634e487b7160e01b600052603260045260246000fd5b6020026020010151905080831161166d57604080516020810185905290810182905260600160405160208183030381529060405280519060200120925061169a565b60408051602081018390529081018490526060016040516020818303038152906040528051906020012092505b50806116a581611f5c565b915050611600565b509392505050565b600061170a826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166117879092919063ffffffff16565b80519091501561151a57808060200190518101906117289190611d51565b61151a5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b60648201526084016104b7565b6060611796848460008561179e565b949350505050565b6060824710156117ff5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b60648201526084016104b7565b611808856118cd565b6118545760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016104b7565b600080866001600160a01b031685876040516118709190611e03565b60006040518083038185875af1925050503d80600081146118ad576040519150601f19603f3d011682016040523d82523d6000602084013e6118b2565b606091505b50915091506118c28282866118d7565b979650505050505050565b803b15155b919050565b606083156118e657508161144c565b8251156118f65782518084602001fd5b8160405162461bcd60e51b81526004016104b79190611e4c565b80356118d281611fcd565b600082601f83011261192b578081fd5b8135602061194061193b83611eaf565b611e7f565b828152818101908583018385028701840188101561195c578586fd5b855b8581101561197a5781358452928401929084019060010161195e565b5090979650505050505050565b80356118d281611fe5565b6000602082840312156119a3578081fd5b815161144c81611fcd565b600080604083850312156119c0578081fd5b82356119cb81611fcd565b946020939093013593505050565b6000806000606084860312156119ed578081fd5b83356119f881611fcd565b9250602084013591506040840135611a0f81611fcd565b809150509250925092565b60008060008060808587031215611a2f578081fd5b8435611a3a81611fcd565b9350602085013592506040850135611a5181611fcd565b91506060850135611a6181611fcd565b939692955090935050565b60008060008060008060c08789031215611a84578182fd5b8635611a8f81611fcd565b9550602087013594506040870135611aa681611fcd565b9350606087013592506080870135915060a087013560ff81168114611ac9578182fd5b809150509295509295509295565b60008060008060808587031215611aec578384fd5b8435611af781611fcd565b9350602085013592506040850135611b0e81611fcd565b9396929550929360600135925050565b600080600080600060a08688031215611b35578283fd5b8535611b4081611fcd565b9450602086013593506040860135611b5781611fcd565b94979396509394606081013594506080013592915050565b60008060008060008060008060006101208a8c031215611b8d578687fd5b8935611b9881611fcd565b985060208a0135975060408a0135611baf81611fcd565b965060608a0135955060808a0135945060a08a0135611bcd81611fcd565b935060c08a0135925060e08a0135611be481611fe5565b91506101008a01356001600160401b03811115611bff578182fd5b611c0b8c828d0161191b565b9150509295985092959850929598565b60006020808385031215611c2d578182fd5b82356001600160401b0380821115611c43578384fd5b818501915085601f830112611c56578384fd5b8135611c6461193b82611eaf565b81815284810190848601875b84811015611d42578135870161012080601f19838f03011215611c91578a8bfd5b611c9a81611e7f565b611ca58b8401611910565b81526040808401358c8301526060611cbe818601611910565b828401526080915081850135818401525060a0808501358284015260c09150611ce8828601611910565b818401525060e080850135828401526101009150611d07828601611987565b90830152918301359189831115611d1c578c8dfd5b611d2a8f8d8587010161191b565b90820152865250509287019290870190600101611c70565b50909998505050505050505050565b600060208284031215611d62578081fd5b815161144c81611fe5565b60008060408385031215611d7f578182fd5b823591506020830135611d9181611fcd565b809150509250929050565b60008060008060008060c08789031215611db4578384fd5b863595506020870135611dc681611fcd565b95989597505050506040840135936060810135936080820135935060a0909101359150565b600060208284031215611dfc578081fd5b5051919050565b60008251611e15818460208701611f15565b9190910192915050565b6001600160a01b0391909116815260200190565b6001600160a01b03929092168252602082015260400190565b6000602082528251806020840152611e6b816040850160208701611f15565b601f01601f19169190910160400192915050565b604051601f8201601f191681016001600160401b0381118282101715611ea757611ea7611fb7565b604052919050565b60006001600160401b03821115611ec857611ec8611fb7565b5060209081020190565b60008219821115611ee557611ee5611f8b565b500190565b600082611ef957611ef9611fa1565b500490565b600082821015611f1057611f10611f8b565b500390565b60005b83811015611f30578181015183820152602001611f18565b83811115611f3f576000848401525b50505050565b600081611f5457611f54611f8b565b506000190190565b6000600019821415611f7057611f70611f8b565b5060010190565b600082611f8657611f86611fa1565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b0381168114611fe257600080fd5b50565b8015158114611fe257600080fdfea26469706673582212204afa741c75840f4c7ac57f62868260c94cf36a32c857ad6a2478143859daf27b64736f6c63430008020033";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        inputs: {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): ApeDistributorInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ApeDistributor;
}
