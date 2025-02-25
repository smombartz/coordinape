"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApeDistributor__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "_registry",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "vault",
                type: "address",
            },
            {
                indexed: true,
                internalType: "bytes32",
                name: "circle",
                type: "bytes32",
            },
            {
                indexed: true,
                internalType: "address",
                name: "admin",
                type: "address",
            },
        ],
        name: "AdminApproved",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "vault",
                type: "address",
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "circle",
                type: "bytes32",
            },
            {
                indexed: false,
                internalType: "address",
                name: "token",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "interval",
                type: "uint256",
            },
        ],
        name: "AllowanceUpdated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "vault",
                type: "address",
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "circle",
                type: "bytes32",
            },
            {
                indexed: false,
                internalType: "address",
                name: "token",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "epoch",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "index",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "address",
                name: "account",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "Claimed",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "vault",
                type: "address",
            },
            {
                indexed: true,
                internalType: "bytes32",
                name: "circle",
                type: "bytes32",
            },
            {
                indexed: true,
                internalType: "address",
                name: "token",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "epochId",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint8",
                name: "_tapType",
                type: "uint8",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "EpochFunded",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "apeVault",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "yearnVault",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "yearnApeVaultFundsTapped",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "allowances",
        outputs: [
            {
                internalType: "uint256",
                name: "maxAmount",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "cooldownInterval",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "checkpoints",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "circleAlloc",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_vault",
                type: "address",
            },
            {
                internalType: "bytes32",
                name: "_circle",
                type: "bytes32",
            },
            {
                internalType: "address",
                name: "_token",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_epoch",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_index",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "_account",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_checkpoint",
                type: "uint256",
            },
            {
                internalType: "bool",
                name: "_redeemShares",
                type: "bool",
            },
            {
                internalType: "bytes32[]",
                name: "_proof",
                type: "bytes32[]",
            },
        ],
        name: "claim",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "address",
                        name: "vault",
                        type: "address",
                    },
                    {
                        internalType: "bytes32",
                        name: "circle",
                        type: "bytes32",
                    },
                    {
                        internalType: "address",
                        name: "token",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "epoch",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "index",
                        type: "uint256",
                    },
                    {
                        internalType: "address",
                        name: "account",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "checkpoint",
                        type: "uint256",
                    },
                    {
                        internalType: "bool",
                        name: "redeemShare",
                        type: "bool",
                    },
                    {
                        internalType: "bytes32[]",
                        name: "proof",
                        type: "bytes32[]",
                    },
                ],
                internalType: "struct ApeDistributor.ClaimData[]",
                name: "_claims",
                type: "tuple[]",
            },
        ],
        name: "claimMany",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "currentAllowances",
        outputs: [
            {
                internalType: "uint256",
                name: "debt",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "intervalStart",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "epochs",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "epochClaimBitMap",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "epochRoots",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "epochTracking",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_vault",
                type: "address",
            },
            {
                internalType: "bytes32",
                name: "_circle",
                type: "bytes32",
            },
            {
                internalType: "address",
                name: "_token",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_epoch",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_index",
                type: "uint256",
            },
        ],
        name: "isClaimed",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "registry",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "_circle",
                type: "bytes32",
            },
            {
                internalType: "address",
                name: "_token",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_amount",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_cooldownInterval",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_epochs",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_intervalStart",
                type: "uint256",
            },
        ],
        name: "setAllowance",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_vault",
                type: "address",
            },
            {
                internalType: "bytes32",
                name: "_circle",
                type: "bytes32",
            },
            {
                internalType: "address",
                name: "_token",
                type: "address",
            },
            {
                internalType: "address[]",
                name: "_users",
                type: "address[]",
            },
            {
                internalType: "uint256[]",
                name: "_amounts",
                type: "uint256[]",
            },
            {
                internalType: "uint256",
                name: "_amount",
                type: "uint256",
            },
            {
                internalType: "uint8",
                name: "_tapType",
                type: "uint8",
            },
        ],
        name: "tapEpochAndDistribute",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "_circle",
                type: "bytes32",
            },
            {
                internalType: "address",
                name: "_admin",
                type: "address",
            },
        ],
        name: "updateCircleAdmin",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_vault",
                type: "address",
            },
            {
                internalType: "bytes32",
                name: "_circle",
                type: "bytes32",
            },
            {
                internalType: "address",
                name: "_token",
                type: "address",
            },
            {
                internalType: "bytes32",
                name: "_root",
                type: "bytes32",
            },
            {
                internalType: "uint256",
                name: "_amount",
                type: "uint256",
            },
            {
                internalType: "uint8",
                name: "_tapType",
                type: "uint8",
            },
        ],
        name: "uploadEpochRoot",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        name: "vaultApprovals",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
const _bytecode = "0x60806040523480156200001157600080fd5b506040516200256e3803806200256e83398101604081905262000034916200005a565b600280546001600160a01b0319166001600160a01b03929092169190911790556200008a565b6000602082840312156200006c578081fd5b81516001600160a01b038116811462000083578182fd5b9392505050565b6124d4806200009a6000396000f3fe608060405234801561001057600080fd5b50600436106100d05760003560e01c8063100956f9146100d55780632417957e1461012257806324c17997146101535780633a5d5a39146101685780633efd825e1461017b5780633fdd34cc146101bc5780634766c2dc146101cf5780635abc5d0b146101e25780637b103999146101f5578063a78618c514610208578063a7fde93f1461022b578063bf6fe2871461023e578063c313bac914610278578063c8f4d8e3146102a3578063da269c09146102e5578063e4b8b2dc14610331575b600080fd5b61010f6100e3366004611dd2565b600860209081526000948552604080862082529385528385208152918452828420909152825290205481565b6040519081526020015b60405180910390f35b61010f610130366004611d91565b600760209081526000938452604080852082529284528284209052825290205481565b610166610161366004611ed7565b610389565b005b6101666101763660046121cf565b6103e3565b6101af610189366004611d66565b60036020908152600092835260408084209091529082529020546001600160a01b031681565b6040516101199190612281565b6101666101ca36600461207d565b61044a565b6101666101dd366004611e24565b610601565b6101666101f0366004611fd1565b61078d565b6002546101af906001600160a01b031681565b61021b610216366004611f80565b610bb3565b6040519015158152602001610119565b6101666102393660046121fe565b610c26565b61010f61024c366004611f39565b600460209081526000948552604080862082529385528385208152918452828420909152825290205481565b61010f6102863660046121cf565b600560209081526000928352604080842090915290825290205481565b61010f6102b1366004611f80565b6006602090815260009586526040808720825294865284862081529285528385208352908452828420909152825290205481565b61031c6102f3366004611d91565b600060208181529381526040808220855292815282812090935282529020805460019091015482565b60408051928352602083019190915201610119565b61036e61033f366004611d91565b600160208181526000948552604080862082529385528385209052908352912080549181015460029091015483565b60408051938452602084019290925290820152606001610119565b610397868686858588610e0e565b6001600160a01b0380871660009081526007602090815260408083208984528252808320938816835292905290812080548492906103d690849061237d565b9091555050505050505050565b33600081815260036020908152604080832086845290915280822080546001600160a01b0319166001600160a01b03861690811790915590519092859290917f99c55459df64a58c031e4e675400c552c7ab3fb4952eaae32b64a091b14f7bcd9190a45050565b60005b81518110156105fd576105eb82828151811061047957634e487b7160e01b600052603260045260246000fd5b6020026020010151600001518383815181106104a557634e487b7160e01b600052603260045260246000fd5b6020026020010151602001518484815181106104d157634e487b7160e01b600052603260045260246000fd5b6020026020010151604001518585815181106104fd57634e487b7160e01b600052603260045260246000fd5b60200260200101516060015186868151811061052957634e487b7160e01b600052603260045260246000fd5b60200260200101516080015187878151811061055557634e487b7160e01b600052603260045260246000fd5b602002602001015160a0015188888151811061058157634e487b7160e01b600052603260045260246000fd5b602002602001015160c001518989815181106105ad57634e487b7160e01b600052603260045260246000fd5b602002602001015160e001518a8a815181106105d957634e487b7160e01b600052603260045260246000fd5b6020026020010151610100015161078d565b806105f581612407565b91505061044d565b5050565b8483146106685760405162461bcd60e51b815260206004820152602a60248201527f4170654469737472696275746f723a204172726179206c656e6774687320646f604482015269040dcdee840dac2e8c6d60b31b60648201526084015b60405180910390fd5b8161067385856115ed565b146106dc5760405162461bcd60e51b815260206004820152603360248201527f4170654469737472696275746f723a20416d6f756e7420646f6573206e6f74206044820152726d617463682073756d206f662076616c75657360681b606482015260840161065f565b6106ec8989898585600019610e0e565b60005b858110156107815761076f87878381811061071a57634e487b7160e01b600052603260045260246000fd5b905060200201602081019061072f9190611d2e565b86868481811061074f57634e487b7160e01b600052603260045260246000fd5b905060200201358a6001600160a01b03166116469092919063ffffffff16565b8061077981612407565b9150506106ef565b50505050505050505050565b61079a8989898989610bb3565b156107d95760405162461bcd60e51b815260206004820152600f60248201526e436c61696d656420616c726561647960881b604482015260640161065f565b604080516020808201889052606087901b6001600160601b03191682840152605480830187905283518084039091018152607490920183528151918101919091206001600160a01b038c81166000908152600484528481208d82528452848120918c1681529083528381208a82529092529190205461085a908390836116a1565b6108945760405162461bcd60e51b815260206004820152600b60248201526a2bb937b73390383937b7b360a91b604482015260640161065f565b6001600160a01b03808b1660009081526008602090815260408083208d845282528083208c851684528252808320938916835292905220548085116109375760405162461bcd60e51b815260206004820152603360248201527f476976656e20636865636b706f696e74206e6f7420686967686572207468616e6044820152720818dd5c9c995b9d0818da1958dadc1bda5b9d606a1b606482015260840161065f565b600061094382876123a9565b9050600760008d6001600160a01b03166001600160a01b0316815260200190815260200160002060008c815260200190815260200160002060008b6001600160a01b03166001600160a01b03168152602001908152602001600020548111156109ff5760405162461bcd60e51b815260206004820152602860248201527f43616e277420636c61696d206d6f7265207468616e20636972636c652068617360448201526720746f206769766560c01b606482015260840161065f565b6001600160a01b03808d1660009081526007602090815260408083208f84528252808320938e1683529290529081208054839290610a3e9084906123a9565b90915550506001600160a01b03808d1660009081526008602090815260408083208f845282528083208e851684528252808320938b16835292905220869055610a8a8c8c8c8c8c6116b9565b848015610a9f5750336001600160a01b038816145b15610b2a57604051627b8a6760e11b8152600481018290526001600160a01b0388811660248301528b169062f714ce90604401602060405180830381600087803b158015610aec57600080fd5b505af1158015610b00573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b24919061224d565b50610b3e565b610b3e6001600160a01b038b168883611646565b604080516001600160a01b038e81168252602082018e90528c811682840152606082018c9052608082018b9052891660a082015260c0810183905290517fb55a6b31ba8a4be3eabbb854fd8adef29d42d7aa9bf91df4c77d5687b59809ef9181900360e00190a1505050505050505050505050565b600080610bc261010084612395565b90506000610bd261010085612422565b6001600160a01b0398891660009081526006602090815260408083209a835299815289822098909a168152968952878720958752948852508585209085529095525091902054600190911b90811614919050565b4281610c30578091505b80821015610c7d5760405162461bcd60e51b815260206004820152601a602482015279125b9d195c9d985b081cdd185c9d081a5b881d1a19481c185cdd60321b604482015260640161065f565b604051806040016040528086815260200185815250600080336001600160a01b03166001600160a01b0316815260200190815260200160002060008981526020019081526020016000206000886001600160a01b03166001600160a01b0316815260200190815260200160002060008201518160000155602082015181600101559050506040518060600160405280600081526020018381526020018481525060016000336001600160a01b03166001600160a01b0316815260200190815260200160002060008981526020019081526020016000206000886001600160a01b03166001600160a01b031681526020019081526020016000206000820151816000015560208201518160010155604082015181600201559050507f13241e168a73dc44609b3c902bf37a573168224a56087e3bf181bfab79a617e03388888888604051610dfd9594939291906001600160a01b03958616815260208101949094529190931660408301526060820192909252608081019190915260a00190565b60405180910390a150505050505050565b600260009054906101000a90046001600160a01b03166001600160a01b031663c45a01556040518163ffffffff1660e01b815260040160206040518083038186803b158015610e5c57600080fd5b505afa158015610e70573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e949190611d4a565b6001600160a01b0316635487beb6876040518263ffffffff1660e01b8152600401610ebf9190612281565b60206040518083038186803b158015610ed757600080fd5b505afa158015610eeb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f0f91906121b3565b610f675760405162461bcd60e51b8152602060048201526024808201527f4170654469737472696275746f723a205661756c7420646f6573206e6f7420656044820152631e1a5cdd60e21b606482015260840161065f565b6000336001600160a01b0316876001600160a01b0316638da5cb5b6040518163ffffffff1660e01b815260040160206040518083038186803b158015610fac57600080fd5b505afa158015610fc0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fe49190611d4a565b6001600160a01b0389811660009081526003602090815260408083208c84529091529020549181169290921492501633148061101d5750805b6110755760405162461bcd60e51b815260206004820152602360248201527f4170654469737472696275746f723a2053656e646572206e6f7420617070726f6044820152621d995960ea1b606482015260840161065f565b60ff83166002141561112757846001600160a01b0316876001600160a01b0316632a64e6356040518163ffffffff1660e01b815260040160206040518083038186803b1580156110c457600080fd5b505afa1580156110d8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110fc9190611d4a565b6001600160a01b0316146111225760405162461bcd60e51b815260040161065f906122e1565b6111c8565b846001600160a01b0316876001600160a01b031663fbfa77cf6040518163ffffffff1660e01b815260040160206040518083038186803b15801561116a57600080fd5b505afa15801561117e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111a29190611d4a565b6001600160a01b0316146111c85760405162461bcd60e51b815260040161065f906122e1565b806111d9576111d98787878761172a565b6040516370a0823160e01b81526000906001600160a01b038716906370a0823190611208903090600401612281565b60206040518083038186803b15801561122057600080fd5b505afa158015611234573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611258919061224d565b6040516378186c8960e11b81526004810187905260ff861660248201529091506000906001600160a01b038a169063f030d91290604401602060405180830381600087803b1580156112a957600080fd5b505af11580156112bd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112e1919061224d565b90506000876001600160a01b03166370a08231306040518263ffffffff1660e01b81526004016113119190612281565b60206040518083038186803b15801561132957600080fd5b505afa15801561133d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611361919061224d565b90508661136e84836123a9565b146113dc5760405162461bcd60e51b815260206004820152603860248201527f4170654469737472696275746f723a20446964206e6f74207265636569766520604482015277636f727265637420616d6f756e74206f6620746f6b656e7360401b606482015260840161065f565b811561149657896001600160a01b03167fc01d33a8020741602dd424793b13242b879ac09190c3314317c142ed94b8c1748b6001600160a01b031663fbfa77cf6040518163ffffffff1660e01b815260040160206040518083038186803b15801561144657600080fd5b505afa15801561145a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061147e9190611d4a565b8460405161148d929190612295565b60405180910390a25b6000600560008b815260200190815260200160002060008a6001600160a01b03166001600160a01b0316815260200190815260200160002054905085600460008d6001600160a01b03166001600160a01b0316815260200190815260200160002060008c815260200190815260200160002060008b6001600160a01b03166001600160a01b03168152602001908152602001600020600083815260200190815260200160002081905550600560008b815260200190815260200160002060008a6001600160a01b03166001600160a01b03168152602001908152602001600020600081548092919061158790612407565b90915550506040805182815260ff891660208201529081018990526001600160a01b03808b16918c918e16907f4150e192e15f92cd46a4aeea3fff087735dd08c3ce908174c4e91e038c3b96f69060600160405180910390a45050505050505050505050565b6000805b8281101561163f5783838281811061161957634e487b7160e01b600052603260045260246000fd5b905060200201358261162b919061237d565b91508061163781612407565b9150506115f1565b5092915050565b61169c8363a9059cbb60e01b8484604051602401611665929190612295565b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152611862565b505050565b6000826116ae8584611934565b1490505b9392505050565b60006116c761010083612395565b905060006116d761010084612422565b6001600160a01b039788166000908152600660209081526040808320998352988152888220979099168152958852868620948652938752508484209084529094529190208054600190921b909117905550565b6001600160a01b038085166000818152602081815260408083208884528252808320948716808452948252808320815180830183528154815260019182015481850152948452825280832088845282528083209483529390529190912081518311156117e35760405162461bcd60e51b815260206004820152602260248201527f416d6f756e742074617070656420657863656564206d617820616c6c6f77616e604482015261636560f01b606482015260840161065f565b806001015442101561182f5760405162461bcd60e51b8152602060048201526015602482015274115c1bd8da081a185cc81b9bdd081cdd185c9d1959605a1b604482015260640161065f565b8151815461183e90859061237d565b111561184e5761184e81836119ee565b828160000160008282546103d6919061237d565b60006118b7826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316611aca9092919063ffffffff16565b80519091501561169c57808060200190518101906118d591906121b3565b61169c5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b606482015260840161065f565b600081815b84518110156119e657600085828151811061196457634e487b7160e01b600052603260045260246000fd5b602002602001015190508083116119a65760408051602081018590529081018290526060016040516020818303038152906040528051906020012092506119d3565b60408051602081018390529081018490526060016040516020818303038152906040528051906020012092505b50806119de81612407565b915050611939565b509392505050565b6000826001015442611a0091906123a9565b905081602001518111611a555760405162461bcd60e51b815260206004820152601e60248201527f436f6f6c646f776e20696e74657276616c206e6f742066696e69736865640000604482015260640161065f565b6000836002015411611aa55760405162461bcd60e51b8152602060048201526019602482015278436972636c652063616e6e6f742074617020616e796d6f726560381b604482015260640161065f565b600080845542600185015560028401805491611ac0836123f0565b9190505550505050565b6060611ad98484600085611ae1565b949350505050565b606082471015611b425760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b606482015260840161065f565b611b4b85611c10565b611b975760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161065f565b600080866001600160a01b03168587604051611bb39190612265565b60006040518083038185875af1925050503d8060008114611bf0576040519150601f19603f3d011682016040523d82523d6000602084013e611bf5565b606091505b5091509150611c05828286611c1a565b979650505050505050565b803b15155b919050565b60608315611c295750816116b2565b825115611c395782518084602001fd5b8160405162461bcd60e51b815260040161065f91906122ae565b8035611c1581612478565b60008083601f840112611c6f578182fd5b5081356001600160401b03811115611c85578182fd5b6020830191508360208083028501011115611c9f57600080fd5b9250929050565b600082601f830112611cb6578081fd5b81356020611ccb611cc68361235a565b61232a565b8281528181019085830183850287018401881015611ce7578586fd5b855b85811015611d0557813584529284019290840190600101611ce9565b5090979650505050505050565b8035611c1581612490565b803560ff81168114611c1557600080fd5b600060208284031215611d3f578081fd5b81356116b281612478565b600060208284031215611d5b578081fd5b81516116b281612478565b60008060408385031215611d78578081fd5b8235611d8381612478565b946020939093013593505050565b600080600060608486031215611da5578081fd5b8335611db081612478565b9250602084013591506040840135611dc781612478565b809150509250925092565b60008060008060808587031215611de7578081fd5b8435611df281612478565b9350602085013592506040850135611e0981612478565b91506060850135611e1981612478565b939692955090935050565b600080600080600080600080600060e08a8c031215611e41578485fd5b8935611e4c81612478565b985060208a0135975060408a0135611e6381612478565b965060608a01356001600160401b0380821115611e7e578687fd5b611e8a8d838e01611c5e565b909850965060808c0135915080821115611ea2578586fd5b50611eaf8c828d01611c5e565b90955093505060a08a01359150611ec860c08b01611d1d565b90509295985092959850929598565b60008060008060008060c08789031215611eef578384fd5b8635611efa81612478565b9550602087013594506040870135611f1181612478565b93506060870135925060808701359150611f2d60a08801611d1d565b90509295509295509295565b60008060008060808587031215611f4e578182fd5b8435611f5981612478565b9350602085013592506040850135611f7081612478565b9396929550929360600135925050565b600080600080600060a08688031215611f97578283fd5b8535611fa281612478565b9450602086013593506040860135611fb981612478565b94979396509394606081013594506080013592915050565b60008060008060008060008060006101208a8c031215611fef578283fd5b8935611ffa81612478565b985060208a0135975060408a013561201181612478565b965060608a0135955060808a0135945060a08a013561202f81612478565b935060c08a0135925060e08a013561204681612490565b91506101008a01356001600160401b03811115612061578182fd5b61206d8c828d01611ca6565b9150509295985092959850929598565b6000602080838503121561208f578182fd5b82356001600160401b03808211156120a5578384fd5b818501915085601f8301126120b8578384fd5b81356120c6611cc68261235a565b81815284810190848601875b848110156121a4578135870161012080601f19838f030112156120f3578a8bfd5b6120fc8161232a565b6121078b8401611c53565b81526040808401358c8301526060612120818601611c53565b828401526080915081850135818401525060a0808501358284015260c0915061214a828601611c53565b818401525060e080850135828401526101009150612169828601611d12565b9083015291830135918983111561217e578c8dfd5b61218c8f8d85870101611ca6565b908201528652505092870192908701906001016120d2565b50909998505050505050505050565b6000602082840312156121c4578081fd5b81516116b281612490565b600080604083850312156121e1578182fd5b8235915060208301356121f381612478565b809150509250929050565b60008060008060008060c08789031215612216578384fd5b86359550602087013561222881612478565b95989597505050506040840135936060810135936080820135935060a0909101359150565b60006020828403121561225e578081fd5b5051919050565b600082516122778184602087016123c0565b9190910192915050565b6001600160a01b0391909116815260200190565b6001600160a01b03929092168252602082015260400190565b60006020825282518060208401526122cd8160408501602087016123c0565b601f01601f19169190910160400192915050565b60208082526029908201527f4170654469737472696275746f723a205661756c742063616e6e6f742073757060408201526838363c903a37b5b2b760b91b606082015260800190565b604051601f8201601f191681016001600160401b038111828210171561235257612352612462565b604052919050565b60006001600160401b0382111561237357612373612462565b5060209081020190565b6000821982111561239057612390612436565b500190565b6000826123a4576123a461244c565b500490565b6000828210156123bb576123bb612436565b500390565b60005b838110156123db5781810151838201526020016123c3565b838111156123ea576000848401525b50505050565b6000816123ff576123ff612436565b506000190190565b600060001982141561241b5761241b612436565b5060010190565b6000826124315761243161244c565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b038116811461248d57600080fd5b50565b801515811461248d57600080fdfea2646970667358221220e7cb6cb7bbffbae5584413667013556a718d2a323e08421cd793a492f5e13fa064736f6c63430008020033";
class ApeDistributor__factory extends ethers_1.ContractFactory {
    constructor(signer) {
        super(_abi, _bytecode, signer);
    }
    deploy(_registry, overrides) {
        return super.deploy(_registry, overrides || {});
    }
    getDeployTransaction(_registry, overrides) {
        return super.getDeployTransaction(_registry, overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.ApeDistributor__factory = ApeDistributor__factory;
ApeDistributor__factory.bytecode = _bytecode;
ApeDistributor__factory.abi = _abi;
