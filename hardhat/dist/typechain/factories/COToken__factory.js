"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.COToken__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        anonymous: false,
        inputs: [],
        name: "AllowlistDisabled",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address[]",
                name: "minters",
                type: "address[]",
            },
        ],
        name: "AllowlistedAddressesAdded",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address[]",
                name: "minters",
                type: "address[]",
            },
        ],
        name: "AllowlistedAddressesRemoved",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        name: "Approval",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address[]",
                name: "minters",
                type: "address[]",
            },
        ],
        name: "MintersAdded",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address[]",
                name: "minters",
                type: "address[]",
            },
        ],
        name: "MintersRemoved",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [],
        name: "MintingDisabledForever",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "OwnershipTransferred",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "bool",
                name: "status",
                type: "bool",
            },
        ],
        name: "PauseStatusChanged",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [],
        name: "PausingDisabledForever",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        name: "Transfer",
        type: "event",
    },
    {
        inputs: [],
        name: "DOMAIN_SEPARATOR",
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
                internalType: "address[]",
                name: "_addresses",
                type: "address[]",
            },
        ],
        name: "addAllowlistedAddresses",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address[]",
                name: "_minters",
                type: "address[]",
            },
        ],
        name: "addMinters",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                internalType: "address",
                name: "spender",
                type: "address",
            },
        ],
        name: "allowance",
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
        inputs: [],
        name: "allowlistDisabled",
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
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "allowlistedAddresses",
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
        inputs: [
            {
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "approve",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "balanceOf",
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
        inputs: [],
        name: "cap",
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
                internalType: "bool",
                name: "_status",
                type: "bool",
            },
        ],
        name: "changePauseStatus",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "decimals",
        outputs: [
            {
                internalType: "uint8",
                name: "",
                type: "uint8",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "subtractedValue",
                type: "uint256",
            },
        ],
        name: "decreaseAllowance",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "disableAllowlist",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "disableMintingForever",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "disablePausingForever",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "foreverUnpaused",
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
        inputs: [
            {
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "addedValue",
                type: "uint256",
            },
        ],
        name: "increaseAllowance",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_account",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_amount",
                type: "uint256",
            },
        ],
        name: "mint",
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
        ],
        name: "minters",
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
        name: "mintingDisabled",
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
        name: "name",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
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
        ],
        name: "nonces",
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
        inputs: [],
        name: "owner",
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
        inputs: [],
        name: "paused",
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
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "deadline",
                type: "uint256",
            },
            {
                internalType: "uint8",
                name: "v",
                type: "uint8",
            },
            {
                internalType: "bytes32",
                name: "r",
                type: "bytes32",
            },
            {
                internalType: "bytes32",
                name: "s",
                type: "bytes32",
            },
        ],
        name: "permit",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address[]",
                name: "_addresses",
                type: "address[]",
            },
        ],
        name: "removeAllowlistedAddresses",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address[]",
                name: "_minters",
                type: "address[]",
            },
        ],
        name: "removeMinters",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "symbol",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "totalSupply",
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
                name: "_to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_amount",
                type: "uint256",
            },
        ],
        name: "transfer",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_from",
                type: "address",
            },
            {
                internalType: "address",
                name: "_to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_amount",
                type: "uint256",
            },
        ],
        name: "transferFrom",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x60c06040526b033b2e3c9fd0803ce80000006080527f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c960a0523480156200004557600080fd5b50604080518082018252600e81526d636f6f7264696e6170652e636f6d60901b602080830191825283518085019094526002845261434f60f01b908401528151919291620000969160039162000125565b508051620000ac90600490602084019062000125565b505050620000c9620000c3620000cf60201b60201c565b620000d3565b62000208565b3390565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b8280546200013390620001cb565b90600052602060002090601f016020900481019282620001575760008555620001a2565b82601f106200017257805160ff1916838001178555620001a2565b82800160010185558215620001a2579182015b82811115620001a257825182559160200191906001019062000185565b50620001b0929150620001b4565b5090565b5b80821115620001b05760008155600101620001b5565b600281046001821680620001e057607f821691505b602082108114156200020257634e487b7160e01b600052602260045260246000fd5b50919050565b60805160a051611f826200022e6000396000610f71015260006106d00152611f826000f3fe608060405234801561001057600080fd5b506004361061018b5760003560e01c806306ca0bad1461019057806306fdde031461019a578063095ea7b3146101b8578063103ee2f5146101db57806318160ddd146101fe57806321afb5ee1461021057806323b872dd14610223578063313ce567146102365780633424b8ce14610245578063355274ea146102585780633644e51514610260578063395093511461026857806340c10f191461027b5780635c975abb1461028e5780635fc1964f1461029b57806370a08231146102ae578063715018a6146102c157806371e2a657146102c957806372be7ec3146102dc5780637a131ebe146102e45780637ecebe00146102f65780638da5cb5b1461031657806395d89b41146103365780639b1989501461033e578063a457c2d714610352578063a9059cbb14610365578063c4722a4d14610378578063cf8e629a1461038b578063d505accf14610393578063dd62ed3e146103a6578063f2fde38b146103df578063f356c912146103f2578063f46eccc414610405575b600080fd5b610198610428565b005b6101a26104f7565b6040516101af9190611cb4565b60405180910390f35b6101cb6101c6366004611bb1565b610589565b60405190151581526020016101af565b6101cb6101e9366004611ab9565b60076020526000908152604090205460ff1681565b6002545b6040519081526020016101af565b6008546101cb9062010000900460ff1681565b6101cb610231366004611b05565b61059f565b604051601281526020016101af565b610198610253366004611c48565b610630565b6102026106ce565b6102026106f2565b6101cb610276366004611bb1565b6107c7565b610198610289366004611bb1565b610803565b6008546101cb9060ff1681565b6101986102a9366004611bda565b6108a2565b6102026102bc366004611ab9565b6109b8565b6101986109d7565b6101986102d7366004611bda565b610a12565b610198610b1c565b6008546101cb90610100900460ff1681565b610202610304366004611ab9565b60096020526000908152604090205481565b61031e610bb3565b6040516001600160a01b0390911681526020016101af565b6101a2610bc2565b6008546101cb906301000000900460ff1681565b6101cb610360366004611bb1565b610bd1565b6101cb610373366004611bb1565b610c6a565b610198610386366004611bda565b610cf9565b610198610e04565b6101986103a1366004611b40565b610e9b565b6102026103b4366004611ad3565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6101986103ed366004611ab9565b6110c6565b610198610400366004611bda565b611166565b6101cb610413366004611ab9565b60066020526000908152604090205460ff1681565b33610431610bb3565b6001600160a01b0316146104605760405162461bcd60e51b815260040161045790611d7f565b60405180910390fd5b60085462010000900460ff16156104bb5760405162461bcd60e51b815260206004820152602b6024820152600080516020611f0d83398151915260448201526a696e7420616e796d6f726560a81b6064820152608401610457565b6008805462ff00001916620100001790556040517fd498043d7ad0aae95bcd163cc21a9f809917f820b6eb2114164f7eb62af7627a90600090a1565b60606003805461050690611ea0565b80601f016020809104026020016040519081016040528092919081815260200182805461053290611ea0565b801561057f5780601f106105545761010080835404028352916020019161057f565b820191906000526020600020905b81548152906001019060200180831161056257829003601f168201915b5050505050905090565b6000610596338484611271565b50600192915050565b60085460009060ff1615806105d857506008546301000000900460ff161580156105d857503360009081526007602052604090205460ff165b6105f45760405162461bcd60e51b815260040161045790611d3c565b6001600160a01b03831630141561061d5760405162461bcd60e51b815260040161045790611d07565b610628848484611395565b949350505050565b33610639610bb3565b6001600160a01b03161461065f5760405162461bcd60e51b815260040161045790611d7f565b600854610100900460ff16156106875760405162461bcd60e51b815260040161045790611db4565b6008805460ff19168215159081179091556040519081527fef37df9624f797913e7585c7f7b5d004ba6704be3c64b0561c157728ccc869859060200160405180910390a150565b7f000000000000000000000000000000000000000000000000000000000000000090565b604080518082018252600e81526d636f6f7264696e6170652e636f6d60901b6020918201528151808301835260018152603160f81b9082015281517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f818301527f29f08892e9d9d00942c1a4e8d6437f3fb8ccd5d61f75bf952e083399f724a975818401527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a0808301919091528351808303909101815260c0909101909252815191012090565b3360008181526001602090815260408083206001600160a01b038716845290915281205490916105969185906107fe908690611e88565b611271565b600854339062010000900460ff161561082e5760405162461bcd60e51b815260040161045790611dff565b6001600160a01b03811660009081526006602052604090205460ff166108935760405162461bcd60e51b815260206004820152601a6024820152791058d8d95cdcd0dbdb9d1c9bdb0e8810d85b9b9bdd081b5a5b9d60321b6044820152606401610457565b61089d838361143f565b505050565b336108ab610bb3565b6001600160a01b0316146108d15760405162461bcd60e51b815260040161045790611d7f565b60085462010000900460ff16156108fa5760405162461bcd60e51b815260040161045790611dff565b60005b8181101561097a5760006006600085858581811061092b57634e487b7160e01b600052603260045260246000fd5b90506020020160208101906109409190611ab9565b6001600160a01b031681526020810191909152604001600020805460ff19169115159190911790558061097281611edb565b9150506108fd565b507fa4bd966469c62332cc5041d465060dbc3e847c7b125422e59ddb3e61a2005ae782826040516109ac929190611c68565b60405180910390a15050565b6001600160a01b0381166000908152602081905260409020545b919050565b336109e0610bb3565b6001600160a01b031614610a065760405162461bcd60e51b815260040161045790611d7f565b610a1060006114af565b565b33610a1b610bb3565b6001600160a01b031614610a415760405162461bcd60e51b815260040161045790611d7f565b60085462010000900460ff1615610a6a5760405162461bcd60e51b815260040161045790611dff565b60005b81811015610aea57600160066000858585818110610a9b57634e487b7160e01b600052603260045260246000fd5b9050602002016020810190610ab09190611ab9565b6001600160a01b031681526020810191909152604001600020805460ff191691151591909117905580610ae281611edb565b915050610a6d565b507f6050e1d24499bf62f6297dc608356dc088c4e4b4fd753a8606207fdf078578e382826040516109ac929190611c68565b33610b25610bb3565b6001600160a01b031614610b4b5760405162461bcd60e51b815260040161045790611d7f565b600854610100900460ff1615610b735760405162461bcd60e51b815260040161045790611db4565b6008805460ff1961ff0019909116610100171690556040517f3f497821ce68d0936d5908ecb1360ef3c825e415f122cd465b3bab23d6a5bf7490600090a1565b6005546001600160a01b031690565b60606004805461050690611ea0565b3360009081526001602090815260408083206001600160a01b038616845290915281205482811015610c535760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b6064820152608401610457565b610c603385858403611271565b5060019392505050565b60085460009060ff161580610ca357506008546301000000900460ff16158015610ca357503360009081526007602052604090205460ff165b610cbf5760405162461bcd60e51b815260040161045790611d3c565b6001600160a01b038316301415610ce85760405162461bcd60e51b815260040161045790611d07565b610cf28383611501565b9392505050565b33610d02610bb3565b6001600160a01b031614610d285760405162461bcd60e51b815260040161045790611d7f565b6008546301000000900460ff1615610d525760405162461bcd60e51b815260040161045790611e3f565b60005b81811015610dd257600160076000858585818110610d8357634e487b7160e01b600052603260045260246000fd5b9050602002016020810190610d989190611ab9565b6001600160a01b031681526020810191909152604001600020805460ff191691151591909117905580610dca81611edb565b915050610d55565b507ff875362c4f1cfd50ea9685a61df0a1c19304428e6c289bf17208b0baa8b575d982826040516109ac929190611c68565b33610e0d610bb3565b6001600160a01b031614610e335760405162461bcd60e51b815260040161045790611d7f565b6008546301000000900460ff1615610e5d5760405162461bcd60e51b815260040161045790611e3f565b6008805463ff000000191663010000001790556040517f2d35c8d348a345fd7b3b03b7cfcf7ad0b60c2d46742d5ca536342e4185becb0790600090a1565b83421115610ee75760405162461bcd60e51b8152602060048201526019602482015278434f546f6b656e3a206578706972656420646561646c696e6560381b6044820152606401610457565b6001600160a01b038716610f4b5760405162461bcd60e51b815260206004820152602560248201527f434f546f6b656e3a206f776e65722063616e2774206265205a45524f2061646460448201526403932b9b9960dd1b6064820152608401610457565b6000610f556106f2565b6001600160a01b038916600090815260096020526040812080547f0000000000000000000000000000000000000000000000000000000000000000928c928c928c92909190610fa383611edb565b909155506040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810187905260e0016040516020818303038152906040528051906020012060405160200161102a929190606080825260029082015261190160f01b60808201526020810192909252604082015260a00190565b60405160208183030381529060405280519060200120905060006110508286868661150e565b9050886001600160a01b0316816001600160a01b0316146110b05760405162461bcd60e51b815260206004820152601a602482015279434f546f6b656e3a20696e76616c6964207369676e617475726560301b6044820152606401610457565b6110bb898989611271565b505050505050505050565b336110cf610bb3565b6001600160a01b0316146110f55760405162461bcd60e51b815260040161045790611d7f565b6001600160a01b03811661115a5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610457565b611163816114af565b50565b3361116f610bb3565b6001600160a01b0316146111955760405162461bcd60e51b815260040161045790611d7f565b6008546301000000900460ff16156111bf5760405162461bcd60e51b815260040161045790611e3f565b60005b8181101561123f576000600760008585858181106111f057634e487b7160e01b600052603260045260246000fd5b90506020020160208101906112059190611ab9565b6001600160a01b031681526020810191909152604001600020805460ff19169115159190911790558061123781611edb565b9150506111c2565b507f8e57ccca240b595c47024ae5107fe735c445b00720b01a618479f91709ee980382826040516109ac929190611c68565b6001600160a01b0383166112d35760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610457565b6001600160a01b0382166113345760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610457565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b60006113a2848484611536565b6001600160a01b0384166000908152600160209081526040808320338452909152902054828110156114275760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e74206578636565647320616044820152676c6c6f77616e636560c01b6064820152608401610457565b6114348533858403611271565b506001949350505050565b6114476106ce565b8161145160025490565b61145b9190611e88565b11156114a15760405162461bcd60e51b815260206004820152601560248201527410d3d51bdad95b8e8818d85c08195e18d959591959605a1b6044820152606401610457565b6114ab82826116f3565b5050565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6000610596338484611536565b600080600061151f878787876117c1565b9150915061152c816118a4565b5095945050505050565b6001600160a01b03831661159a5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401610457565b6001600160a01b0382166115fc5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610457565b6001600160a01b038316600090815260208190526040902054818110156116745760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608401610457565b6001600160a01b038085166000908152602081905260408082208585039055918516815290812080548492906116ab908490611e88565b92505081905550826001600160a01b0316846001600160a01b0316600080516020611f2d833981519152846040516116e591815260200190565b60405180910390a350505050565b6001600160a01b0382166117495760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610457565b806002600082825461175b9190611e88565b90915550506001600160a01b03821660009081526020819052604081208054839290611788908490611e88565b90915550506040518181526001600160a01b03831690600090600080516020611f2d8339815191529060200160405180910390a36114ab565b6000806fa2a8918ca85bafe22016d0b997e4df60600160ff1b038311156117ee575060009050600361189b565b8460ff16601b1415801561180657508460ff16601c14155b15611817575060009050600461189b565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa15801561186b573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381166118945760006001925092505061189b565b9150600090505b94509492505050565b60008160048111156118c657634e487b7160e01b600052602160045260246000fd5b14156118d157611163565b60018160048111156118f357634e487b7160e01b600052602160045260246000fd5b141561193c5760405162461bcd60e51b815260206004820152601860248201527745434453413a20696e76616c6964207369676e617475726560401b6044820152606401610457565b600281600481111561195e57634e487b7160e01b600052602160045260246000fd5b14156119ac5760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606401610457565b60038160048111156119ce57634e487b7160e01b600052602160045260246000fd5b1415611a275760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b6064820152608401610457565b6004816004811115611a4957634e487b7160e01b600052602160045260246000fd5b14156111635760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604482015261756560f01b6064820152608401610457565b80356001600160a01b03811681146109d257600080fd5b600060208284031215611aca578081fd5b610cf282611aa2565b60008060408385031215611ae5578081fd5b611aee83611aa2565b9150611afc60208401611aa2565b90509250929050565b600080600060608486031215611b19578081fd5b611b2284611aa2565b9250611b3060208501611aa2565b9150604084013590509250925092565b600080600080600080600060e0888a031215611b5a578283fd5b611b6388611aa2565b9650611b7160208901611aa2565b95506040880135945060608801359350608088013560ff81168114611b94578384fd5b9699959850939692959460a0840135945060c09093013592915050565b60008060408385031215611bc3578182fd5b611bcc83611aa2565b946020939093013593505050565b60008060208385031215611bec578182fd5b82356001600160401b0380821115611c02578384fd5b818501915085601f830112611c15578384fd5b813581811115611c23578485fd5b8660208083028501011115611c36578485fd5b60209290920196919550909350505050565b600060208284031215611c59578081fd5b81358015158114610cf2578182fd5b60208082528181018390526000908460408401835b86811015611ca9576001600160a01b03611c9684611aa2565b1682529183019190830190600101611c7d565b509695505050505050565b6000602080835283518082850152825b81811015611ce057858101830151858201604001528201611cc4565b81811115611cf15783604083870101525b50601f01601f1916929092016040019392505050565b6020808252818101527f434f546f6b656e3a2043616e6e6f74207472616e7366657220746f2073656c66604082015260600190565b60208082526023908201527f416363657373436f6e74726f6c3a20557365722063616e6e6f74207472616e736040820152623332b960e91b606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b6020808252602b908201527f416363657373436f6e74726f6c3a20436f6e747261637420697320756e70617560408201526a39b2b2103337b932bb32b960a91b606082015260800190565b6020808252603290820152600080516020611f0d833981519152604082015271696e7420746f6b656e7320616e796d6f726560701b606082015260800190565b60208082526029908201527f416363657373436f6e74726f6c3a20416c6c6f776c69737420616c726561647960408201526808191a5cd8589b195960ba1b606082015260800190565b60008219821115611e9b57611e9b611ef6565b500190565b600281046001821680611eb457607f821691505b60208210811415611ed557634e487b7160e01b600052602260045260246000fd5b50919050565b6000600019821415611eef57611eef611ef6565b5060010190565b634e487b7160e01b600052601160045260246000fdfe416363657373436f6e74726f6c3a20436f6e74726163742063616e6e6f74206dddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa2646970667358221220daa92101991c711962d61a42ef35953ef5a150251922edad4c28f156341e005264736f6c63430008020033";
class COToken__factory extends ethers_1.ContractFactory {
    constructor(signer) {
        super(_abi, _bytecode, signer);
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
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
exports.COToken__factory = COToken__factory;
COToken__factory.bytecode = _bytecode;
COToken__factory.abi = _abi;
