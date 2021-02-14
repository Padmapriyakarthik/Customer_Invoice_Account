import Customer from "./customer";

export default class Account extends Customer{
    accountId:number;
    accountBalance:number;

    constructor(obj,accountInfo)
    {
        super(obj)
        this.accountBalance=accountInfo.balance;
        this.accountId=accountInfo.id;
    }
    getAccountId():number{
        return this.accountId;
    }
    setAccountId(id:number):void{
        this.accountId=id;
    }
    getCustomer():string{
        return this.toString();
    }
    getBalance():number{
        return this.accountBalance;
    }
    setBalance(balance:number):void{
        this.accountBalance=balance
    }
    getcustomerName():string{
        return this.getCustomerName();
    }
    toString():string{
        return "AccountID:"+this.accountId+" AccountBalance:"+this.accountBalance.toFixed(2);
    }
    depositAmount(amount:number){
        let total=this.accountBalance+amount;
        this.setBalance(total);
        return this.accountBalance;
    }
    withdraw(amount:number){
        let in_account=this.getBalance();
        let result;
        if(in_account<=amount)
        {
            result =("Insufficient balance");
        }
        else{
             this.accountBalance=this.accountBalance-amount;
             result=this.accountBalance;
        }
        return result
    }
} 