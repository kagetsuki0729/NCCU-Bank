pragma solidity ^0.4.23;

contract Bank {
    // 此合約的擁有者
    address private owner;

    // 儲存所有會員的餘額
    mapping (address => uint256) private balance;
    mapping (address => uint256) private cdAmount;//定存金額
    mapping (address => uint256) private cdPeriod;//定存期數

    // 事件們，用於通知前端 web3.js
    event DepositEvent(address indexed from, uint256 value, uint256 timestamp);
    event WithdrawEvent(address indexed from, uint256 value, uint256 timestamp);
    event TransferEvent(address indexed from, address indexed to, uint256 value, uint256 timestamp);
    event CdEvent(address indexed from, uint256 value,uint256 cdPeriod, uint256 timestamp);
    event CdDoneEvent(address indexed from,uint256 moneyBack, uint256 timestamp);
    event AdvCdEvent(address indexed from,uint256 cdPeriod,uint256 moneyBack, uint256 timestamp);

    modifier isOwner() {
        require(owner == msg.sender, "you are not owner");
        _;
    }
    
    // 建構子
    constructor() public payable {
        owner = msg.sender;
        cdAmount[msg.sender]=0;
        cdPeriod[msg.sender]=0;
    }
    //購買定存
    function cd(uint256 period) public payable  {
        cdAmount[msg.sender] = msg.value;
        cdPeriod[msg.sender] = period;

        emit CdEvent(msg.sender, msg.value,period, now);
    }
    //定存合約期滿
    function cdDone() public {
        uint256 weiValue=cdAmount[msg.sender];
       
        msg.sender.transfer(weiValue);
        
        emit CdDoneEvent(msg.sender,weiValue+weiValue*cdPeriod[msg.sender]/100, now);
        cdAmount[msg.sender]=0;
        cdPeriod[msg.sender]=0;
    }
    //定存提前解約
    function advCd(uint256 period) public {
        uint256 weiValue=cdAmount[msg.sender];
       
        msg.sender.transfer(weiValue);
        
        emit AdvCdEvent(msg.sender,period,weiValue+weiValue*period/100, now);
        cdAmount[msg.sender]=0;
        cdPeriod[msg.sender]=0;
    }

    // 存錢
    function deposit() public payable {
        balance[msg.sender] += msg.value;

        emit DepositEvent(msg.sender, msg.value, now);
    }

    // 提錢
    function withdraw(uint256 etherValue) public {
        uint256 weiValue = etherValue * 1 ether;

        require(balance[msg.sender] >= weiValue, "your balances are not enough");

        msg.sender.transfer(weiValue);

        balance[msg.sender] -= weiValue;

        emit WithdrawEvent(msg.sender, etherValue, now);
    }

    // 轉帳
    function transfer(address to, uint256 etherValue) public {
        uint256 weiValue = etherValue * 1 ether;

        require(balance[msg.sender] >= weiValue, "your balances are not enough");

        balance[msg.sender] -= weiValue;
        balance[to] += weiValue;

        emit TransferEvent(msg.sender, to, etherValue, now);
    }

    // 檢查銀行帳戶餘額
    function getBankBalance() public view returns (uint256) {
        return balance[msg.sender];
    }
    function getCd() public view returns (uint256) {
        return cdAmount[msg.sender];
    }
    function getCdPeriod() public view returns (uint256) {
        return cdPeriod[msg.sender];
    }

    function kill() public isOwner {
        selfdestruct(owner);
    }
}