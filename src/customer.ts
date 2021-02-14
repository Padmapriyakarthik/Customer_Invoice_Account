import CustomerInfo from "./customer-info";

export default class Customer
{
    customerId:number;
    customerName:string;
    discountRate:number;

    constructor(obj:CustomerInfo)
    {
        this.customerId=obj.id;
        this.customerName=obj.name;
        this.discountRate=obj.discount;
    }

    getCustomerId():number{
        return this.customerId;
    }

    setCustomerId(id:number):void{
        this.customerId=id;
    }

    getCustomerName():string{
        return this.customerName;
    }

    setCustomerName(name:string):void{
        this.customerName=name;
    }
    
    getDiscountRate():number{
        return this.discountRate;
    }

    setDiscountRate(discount:number):void{
        this.discountRate=discount;
    }

    toString():string{
        return "CustomerName:"+this.customerName+" CustomerID:"+this.customerId+" Discount:"+this.discountRate;
    }

}