let bankBytecode ="6080604090815260008054600160a060020a033316600160a060020a031990911681178255815260026020908152828220829055600390529081205561071c8061004a6000396000f3006080604052600436106100a35763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416632e1a7d4d81146100a857806341c0e1b5146100c25780637b83b50b146100d75780638526c12f146100fe578063a3b1458814610113578063a9059cbb1461011e578063d0b3145614610142578063d0e30db01461015a578063ed674de314610162578063fdd858b714610177575b600080fd5b3480156100b457600080fd5b506100c060043561018c565b005b3480156100ce57600080fd5b506100c06102b7565b3480156100e357600080fd5b506100ec610342565b60408051918252519081900360200190f35b34801561010a57600080fd5b506100ec61035e565b6100c060043561037a565b34801561012a57600080fd5b506100c0600160a060020a03600435166024356103e3565b34801561014e57600080fd5b506100c06004356104e8565b6100c06105a9565b34801561016e57600080fd5b506100c061060a565b34801561018357600080fd5b506100ec6106d4565b600160a060020a033316600090815260016020526040902054670de0b6b3a764000082029081111561021f57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f796f75722062616c616e63657320617265206e6f7420656e6f75676800000000604482015290519081900360640190fd5b604051600160a060020a0333169082156108fc029083906000818181858888f19350505050158015610255573d6000803e3d6000fd5b50600160a060020a033316600081815260016020908152604091829020805485900390558151858152429181019190915281517f5bb95829671915ece371da722f91d5371159095dcabf2f75cd6c53facb7e1bab929181900390910190a25050565b60005433600160a060020a0390811691161461033457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f796f7520617265206e6f74206f776e6572000000000000000000000000000000604482015290519081900360640190fd5b600054600160a060020a0316ff5b600160a060020a03331660009081526001602052604090205490565b600160a060020a03331660009081526002602052604090205490565b600160a060020a03331660008181526002602090815260408083203490819055600383529281902085905580519283529082018490524282820152517fee481034275635e2bc1bc2e58ed09ff25f64b6253a5b21b13d37b4f49df627299181900360600190a250565b600160a060020a033316600090815260016020526040902054670de0b6b3a764000082029081111561047657604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f796f75722062616c616e63657320617265206e6f7420656e6f75676800000000604482015290519081900360640190fd5b600160a060020a033381166000818152600160209081526040808320805487900390559387168083529184902080548601905583518681524291810191909152835191937fbabc8cd3bd6701ee99131f374fd2ab4ea66f48dc4e4182ed78fecb0502e44dd692918290030190a3505050565b600160a060020a03331660008181526002602052604080822054905190929183156108fc02918491818181858888f1935050505015801561052d573d6000803e3d6000fd5b50600160a060020a0333167f88136d625628f85476be97689840d9864d1164dcf044e6a47da243c2fb36fc1c83606484820260408051938452919004850160208301524282820152519081900360600190a25050600160a060020a03331660009081526002602090815260408083208390556003909152812055565b600160a060020a0333166000818152600160209081526040918290208054349081019091558251908152429181019190915281517fad40ae5dc69974ba932d08b0a608e89109412d41d04850f5196f144875ae2660929181900390910190a2565b600160a060020a03331660008181526002602052604080822054905190929183156108fc02918491818181858888f1935050505015801561064f573d6000803e3d6000fd5b50600160a060020a0333166000818152600360205260409020547fbebb81976c94f919ab9f34271e379b31eeba8f21a0353225f8325cf9baafe7ae9060649084026040805192909104850182524260208301528051918290030190a250600160a060020a03331660009081526002602090815260408083208390556003909152812055565b600160a060020a033316600090815260036020526040902054905600a165627a7a723058205e15eac3e9b887bf0290cb2bb708a9be422522b8aa86d4ddeb6767f1c02663c50029";

let bankAbi =[
  {
    "constant": false,
    "inputs": [
      {
        "name": "etherValue",
        "type": "uint256"
      }
    ],
    "name": "withdraw",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "kill",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getBankBalance",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getCd",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "period",
        "type": "uint256"
      }
    ],
    "name": "cd",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "to",
        "type": "address"
      },
      {
        "name": "etherValue",
        "type": "uint256"
      }
    ],
    "name": "transfer",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "period",
        "type": "uint256"
      }
    ],
    "name": "advCd",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "deposit",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "cdDone",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getCdPeriod",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "from",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "value",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "timestamp",
        "type": "uint256"
      }
    ],
    "name": "DepositEvent",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "from",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "value",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "timestamp",
        "type": "uint256"
      }
    ],
    "name": "WithdrawEvent",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "value",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "timestamp",
        "type": "uint256"
      }
    ],
    "name": "TransferEvent",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "from",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "value",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "cdPeriod",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "timestamp",
        "type": "uint256"
      }
    ],
    "name": "CdEvent",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "from",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "moneyBack",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "timestamp",
        "type": "uint256"
      }
    ],
    "name": "CdDoneEvent",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "from",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "cdPeriod",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "moneyBack",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "timestamp",
        "type": "uint256"
      }
    ],
    "name": "AdvCdEvent",
    "type": "event"
  }
];
