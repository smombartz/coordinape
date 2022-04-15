import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ApeToken, ApeTokenInterface } from "../ApeToken";
export declare class ApeToken__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ApeToken>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): ApeToken;
    connect(signer: Signer): ApeToken__factory;
    static readonly bytecode = "0x60c06040526b033b2e3c9fd0803ce80000006080527f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c960a0523480156200004557600080fd5b506040518060400160405280600e81526020016d636f6f7264696e6170652e636f6d60901b8152506040518060400160405280600381526020016241504560e81b8152508160039080519060200190620000a192919062000233565b508051620000b790600490602084019062000233565b505050620000d4620000ce620001dd60201b60201c565b620001e1565b604080518082019091526004808252630434f4f560e41b6020909201918252620001019160099162000233565b50604080518082018252600e81526d636f6f7264696e6170652e636f6d60901b6020918201528151808301835260018152603160f81b9082015281517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f818301527f29f08892e9d9d00942c1a4e8d6437f3fb8ccd5d61f75bf952e083399f724a975818401527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a0808301919091528351808303909101815260c09091019092528151910120600a5562000316565b3390565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b8280546200024190620002d9565b90600052602060002090601f016020900481019282620002655760008555620002b0565b82601f106200028057805160ff1916838001178555620002b0565b82800160010185558215620002b0579182015b82811115620002b057825182559160200191906001019062000293565b50620002be929150620002c2565b5090565b5b80821115620002be5760008155600101620002c3565b600281046001821680620002ee57607f821691505b602082108114156200031057634e487b7160e01b600052602260045260246000fd5b50919050565b60805160a051611eeb6200033c6000396000610eb80152600061067b0152611eeb6000f3fe608060405234801561001057600080fd5b50600436106101965760003560e01c806306c933d81461019b57806306ca0bad146101d357806306fdde03146101dd578063095ea7b3146101f257806318160ddd146102055780631c8e85681461021757806321afb5ee1461022b57806323b872dd1461023e578063313ce567146102515780633424b8ce14610260578063355274ea146102735780633644e5151461027b578063395093511461028457806340c10f1914610297578063537f5312146102aa5780635c975abb146102bd5780635fc1964f146102ca57806370a08231146102dd578063715018a6146102f057806371e2a657146102f857806372be7ec31461030b5780637a131ebe146103135780637ecebe00146103255780638da5cb5b1461034557806395d89b4114610365578063a457c2d71461036d578063a9059cbb14610380578063bf4c04c414610393578063ca2cfc20146103a6578063d505accf146103b9578063d6b0f484146103cc578063dd62ed3e146103d4578063f2fde38b1461040d578063f46eccc414610420575b600080fd5b6101be6101a93660046119fd565b60076020526000908152604090205460ff1681565b60405190151581526020015b60405180910390f35b6101db610443565b005b6101e56104e9565b6040516101ca9190611c52565b6101be610200366004611af5565b61057b565b6002545b6040519081526020016101ca565b6008546101be906301000000900460ff1681565b6008546101be9062010000900460ff1681565b6101be61024c366004611a49565b610591565b604051601281526020016101ca565b6101db61026e366004611b8c565b61060f565b610209610679565b610209600a5481565b6101be610292366004611af5565b61069d565b6101db6102a5366004611af5565b6106d9565b6101db6102b8366004611bac565b610778565b6008546101be9060ff1681565b6101db6102d8366004611b1e565b6107b3565b6102096102eb3660046119fd565b6108c9565b6101db6108e8565b6101db610306366004611b1e565b610923565b6101db610a2d565b6008546101be90610100900460ff1681565b6102096103333660046119fd565b600b6020526000908152604090205481565b61034d610a9b565b6040516001600160a01b0390911681526020016101ca565b6101e5610aaa565b6101be61037b366004611af5565b610ab9565b6101be61038e366004611af5565b610b52565b6101db6103a1366004611b1e565b610bce565b6101db6103b4366004611b1e565b610cd9565b6101db6103c7366004611a84565b610de4565b6101db61100d565b6102096103e2366004611a17565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6101db61041b3660046119fd565b61107b565b6101be61042e3660046119fd565b60066020526000908152604090205460ff1681565b3361044c610a9b565b6001600160a01b03161461047b5760405162461bcd60e51b815260040161047290611ce8565b60405180910390fd5b60085462010000900460ff16156104d65760405162461bcd60e51b815260206004820152602b6024820152600080516020611e7683398151915260448201526a696e7420616e796d6f726560a81b6064820152608401610472565b6008805462ff0000191662010000179055565b6060600380546104f890611e09565b80601f016020809104026020016040519081016040528092919081815260200182805461052490611e09565b80156105715780601f1061054657610100808354040283529160200191610571565b820191906000526020600020905b81548152906001019060200180831161055457829003601f168201915b5050505050905090565b600061058833848461111b565b50600192915050565b60085460009060ff1615806105ca57506008546301000000900460ff161580156105ca57503360009081526007602052604090205460ff165b6105e65760405162461bcd60e51b815260040161047290611ca5565b6001600160a01b0383163014156105fc57600080fd5b61060784848461123f565b949350505050565b33610618610a9b565b6001600160a01b03161461063e5760405162461bcd60e51b815260040161047290611ce8565b600854610100900460ff16156106665760405162461bcd60e51b815260040161047290611d66565b6008805460ff1916911515919091179055565b7f000000000000000000000000000000000000000000000000000000000000000090565b3360008181526001602090815260408083206001600160a01b038716845290915281205490916105889185906106d4908690611df1565b61111b565b600854339062010000900460ff16156107045760405162461bcd60e51b815260040161047290611db1565b6001600160a01b03811660009081526006602052604090205460ff166107695760405162461bcd60e51b815260206004820152601a6024820152791058d8d95cdcd0dbdb9d1c9bdb0e8810d85b9b9bdd081b5a5b9d60321b6044820152606401610472565b61077383836112e9565b505050565b33610781610a9b565b6001600160a01b0316146107a75760405162461bcd60e51b815260040161047290611ce8565b6107736009838361194d565b336107bc610a9b565b6001600160a01b0316146107e25760405162461bcd60e51b815260040161047290611ce8565b60085462010000900460ff161561080b5760405162461bcd60e51b815260040161047290611db1565b60005b8181101561088b5760006006600085858581811061083c57634e487b7160e01b600052603260045260246000fd5b905060200201602081019061085191906119fd565b6001600160a01b031681526020810191909152604001600020805460ff19169115159190911790558061088381611e44565b91505061080e565b507fa4bd966469c62332cc5041d465060dbc3e847c7b125422e59ddb3e61a2005ae782826040516108bd929190611c06565b60405180910390a15050565b6001600160a01b0381166000908152602081905260409020545b919050565b336108f1610a9b565b6001600160a01b0316146109175760405162461bcd60e51b815260040161047290611ce8565b610921600061135a565b565b3361092c610a9b565b6001600160a01b0316146109525760405162461bcd60e51b815260040161047290611ce8565b60085462010000900460ff161561097b5760405162461bcd60e51b815260040161047290611db1565b60005b818110156109fb576001600660008585858181106109ac57634e487b7160e01b600052603260045260246000fd5b90506020020160208101906109c191906119fd565b6001600160a01b031681526020810191909152604001600020805460ff1916911515919091179055806109f381611e44565b91505061097e565b507f6050e1d24499bf62f6297dc608356dc088c4e4b4fd753a8606207fdf078578e382826040516108bd929190611c06565b33610a36610a9b565b6001600160a01b031614610a5c5760405162461bcd60e51b815260040161047290611ce8565b600854610100900460ff1615610a845760405162461bcd60e51b815260040161047290611d66565b6008805460ff1961ff001990911661010017169055565b6005546001600160a01b031690565b6060600980546104f890611e09565b3360009081526001602090815260408083206001600160a01b038616845290915281205482811015610b3b5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b6064820152608401610472565b610b48338585840361111b565b5060019392505050565b60085460009060ff161580610b8b57506008546301000000900460ff16158015610b8b57503360009081526007602052604090205460ff165b610ba75760405162461bcd60e51b815260040161047290611ca5565b6001600160a01b038316301415610bbd57600080fd5b610bc783836113ac565b9392505050565b33610bd7610a9b565b6001600160a01b031614610bfd5760405162461bcd60e51b815260040161047290611ce8565b6008546301000000900460ff1615610c275760405162461bcd60e51b815260040161047290611d1d565b60005b81811015610ca757600060076000858585818110610c5857634e487b7160e01b600052603260045260246000fd5b9050602002016020810190610c6d91906119fd565b6001600160a01b031681526020810191909152604001600020805460ff191691151591909117905580610c9f81611e44565b915050610c2a565b507f93101335235e43f02b83c07a1c98aa9b8a5f278a1ee96ef3483caccdf9e5d49e82826040516108bd929190611c06565b33610ce2610a9b565b6001600160a01b031614610d085760405162461bcd60e51b815260040161047290611ce8565b6008546301000000900460ff1615610d325760405162461bcd60e51b815260040161047290611d1d565b60005b81811015610db257600160076000858585818110610d6357634e487b7160e01b600052603260045260246000fd5b9050602002016020810190610d7891906119fd565b6001600160a01b031681526020810191909152604001600020805460ff191691151591909117905580610daa81611e44565b915050610d35565b507ff55dc23bb986f9174bff1818b319b6659e80b52627abe19f6b13647d5bb3743582826040516108bd929190611c06565b83421115610e315760405162461bcd60e51b815260206004820152601a602482015279417065546f6b656e3a206578706972656420646561646c696e6560301b6044820152606401610472565b6001600160a01b038716610e965760405162461bcd60e51b815260206004820152602660248201527f417065546f6b656e3a206f776e65722063616e2774206265205a45524f2061646044820152650323932b9b9960d51b6064820152608401610472565b600a546001600160a01b0388166000908152600b6020526040812080549192917f0000000000000000000000000000000000000000000000000000000000000000918b918b918b919087610ee983611e44565b909155506040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810187905260e00160405160208183030381529060405280519060200120604051602001610f70929190606080825260029082015261190160f01b60808201526020810192909252604082015260a00190565b6040516020818303038152906040528051906020012090506000610f96828686866113b9565b9050886001600160a01b0316816001600160a01b031614610ff75760405162461bcd60e51b815260206004820152601b60248201527a417065546f6b656e3a20696e76616c6964207369676e617475726560281b6044820152606401610472565b61100289898961111b565b505050505050505050565b33611016610a9b565b6001600160a01b03161461103c5760405162461bcd60e51b815260040161047290611ce8565b6008546301000000900460ff16156110665760405162461bcd60e51b815260040161047290611d1d565b6008805463ff00000019166301000000179055565b33611084610a9b565b6001600160a01b0316146110aa5760405162461bcd60e51b815260040161047290611ce8565b6001600160a01b03811661110f5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610472565b6111188161135a565b50565b6001600160a01b03831661117d5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610472565b6001600160a01b0382166111de5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610472565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b600061124c8484846113e1565b6001600160a01b0384166000908152600160209081526040808320338452909152902054828110156112d15760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e74206578636565647320616044820152676c6c6f77616e636560c01b6064820152608401610472565b6112de853385840361111b565b506001949350505050565b6112f1610679565b816112fb60025490565b6113059190611df1565b111561134c5760405162461bcd60e51b8152602060048201526016602482015275105c19551bdad95b8e8818d85c08195e18d95959195960521b6044820152606401610472565b611356828261159e565b5050565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b60006105883384846113e1565b60008060006113ca8787878761166c565b915091506113d78161174f565b5095945050505050565b6001600160a01b0383166114455760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401610472565b6001600160a01b0382166114a75760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610472565b6001600160a01b0383166000908152602081905260409020548181101561151f5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608401610472565b6001600160a01b03808516600090815260208190526040808220858503905591851681529081208054849290611556908490611df1565b92505081905550826001600160a01b0316846001600160a01b0316600080516020611e968339815191528460405161159091815260200190565b60405180910390a350505050565b6001600160a01b0382166115f45760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610472565b80600260008282546116069190611df1565b90915550506001600160a01b03821660009081526020819052604081208054839290611633908490611df1565b90915550506040518181526001600160a01b03831690600090600080516020611e968339815191529060200160405180910390a3611356565b6000806fa2a8918ca85bafe22016d0b997e4df60600160ff1b038311156116995750600090506003611746565b8460ff16601b141580156116b157508460ff16601c14155b156116c25750600090506004611746565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015611716573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b03811661173f57600060019250925050611746565b9150600090505b94509492505050565b600081600481111561177157634e487b7160e01b600052602160045260246000fd5b141561177c57611118565b600181600481111561179e57634e487b7160e01b600052602160045260246000fd5b14156117e75760405162461bcd60e51b815260206004820152601860248201527745434453413a20696e76616c6964207369676e617475726560401b6044820152606401610472565b600281600481111561180957634e487b7160e01b600052602160045260246000fd5b14156118575760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606401610472565b600381600481111561187957634e487b7160e01b600052602160045260246000fd5b14156118d25760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b6064820152608401610472565b60048160048111156118f457634e487b7160e01b600052602160045260246000fd5b14156111185760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604482015261756560f01b6064820152608401610472565b82805461195990611e09565b90600052602060002090601f01602090048101928261197b57600085556119c1565b82601f106119945782800160ff198235161785556119c1565b828001600101855582156119c1579182015b828111156119c15782358255916020019190600101906119a6565b506119cd9291506119d1565b5090565b5b808211156119cd57600081556001016119d2565b80356001600160a01b03811681146108e357600080fd5b600060208284031215611a0e578081fd5b610bc7826119e6565b60008060408385031215611a29578081fd5b611a32836119e6565b9150611a40602084016119e6565b90509250929050565b600080600060608486031215611a5d578081fd5b611a66846119e6565b9250611a74602085016119e6565b9150604084013590509250925092565b600080600080600080600060e0888a031215611a9e578283fd5b611aa7886119e6565b9650611ab5602089016119e6565b95506040880135945060608801359350608088013560ff81168114611ad8578384fd5b9699959850939692959460a0840135945060c09093013592915050565b60008060408385031215611b07578182fd5b611b10836119e6565b946020939093013593505050565b60008060208385031215611b30578182fd5b82356001600160401b0380821115611b46578384fd5b818501915085601f830112611b59578384fd5b813581811115611b67578485fd5b8660208083028501011115611b7a578485fd5b60209290920196919550909350505050565b600060208284031215611b9d578081fd5b81358015158114610bc7578182fd5b60008060208385031215611bbe578182fd5b82356001600160401b0380821115611bd4578384fd5b818501915085601f830112611be7578384fd5b813581811115611bf5578485fd5b866020828501011115611b7a578485fd5b60208082528181018390526000908460408401835b86811015611c47576001600160a01b03611c34846119e6565b1682529183019190830190600101611c1b565b509695505050505050565b6000602080835283518082850152825b81811015611c7e57858101830151858201604001528201611c62565b81811115611c8f5783604083870101525b50601f01601f1916929092016040019392505050565b60208082526023908201527f416363657373436f6e74726f6c3a20557365722063616e6e6f74207472616e736040820152623332b960e91b606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60208082526029908201527f416363657373436f6e74726f6c3a2057686974656c69737420616c726561647960408201526808191a5cd8589b195960ba1b606082015260800190565b6020808252602b908201527f416363657373436f6e74726f6c3a20436f6e747261637420697320756e70617560408201526a39b2b2103337b932bb32b960a91b606082015260800190565b6020808252603290820152600080516020611e76833981519152604082015271696e7420746f6b656e7320616e796d6f726560701b606082015260800190565b60008219821115611e0457611e04611e5f565b500190565b600281046001821680611e1d57607f821691505b60208210811415611e3e57634e487b7160e01b600052602260045260246000fd5b50919050565b6000600019821415611e5857611e58611e5f565b5060010190565b634e487b7160e01b600052601160045260246000fdfe416363657373436f6e74726f6c3a20436f6e74726163742063616e6e6f74206dddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa264697066735822122097678d467ae8fce14ee6781f090a8148d7d589e5b767fe529709d8a32bcdff4764736f6c63430008020033";
    static readonly abi: ({
        inputs: never[];
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
    })[];
    static createInterface(): ApeTokenInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ApeToken;
}
