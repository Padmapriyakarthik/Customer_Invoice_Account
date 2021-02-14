import Customer from "./customer";

export default class Invoice extends Customer{

    invoiceId:number;
    invoiceamount?:number;
    
    constructor(Customerobj,Invoiceobj)
    {
      
        super(Customerobj)
        this.invoiceId=Invoiceobj.id;
        this.invoiceamount=Invoiceobj.amount;
    }
    getInvoiceId():number{
        return this.invoiceId;
    }
    setInvoiceId(id:number):void{
        this.invoiceId=id
    }
    getCustomer():string{
       
        return this.toString();
    }
    setCustomer(Customerobj):void{

        this.setCustomerId(Customerobj.id);
        this.setCustomerName(Customerobj.name);
        this.setDiscountRate(Customerobj.discount);
    }
    getAmount():number{
        return this.invoiceamount;
    }
    setAmount(amount:number):void{
        this.invoiceamount=amount;    
    }
    Customername():string{
        return this.getCustomerName();
    }
    afterDiscount():number{
        let dis=this.invoiceamount*(this.discountRate)/100;
        return this.invoiceamount-dis;
    }
}