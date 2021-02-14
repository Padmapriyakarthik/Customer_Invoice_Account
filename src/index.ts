import CustomerInfo from "./customer-info";
import Invoice from "./invoice";
import Account from "./account";


// invoice ...... 

(<HTMLElement>document.getElementById('invoicebtn')).addEventListener('click',()=>{

        let invoice=(<HTMLElement>document.getElementById('invoice'));
        invoice.style.display="block";
        let customer=(<HTMLElement>document.getElementById('customer'));
        customer.style.display="block";
        let account=(<HTMLElement>document.getElementById('account'));
      account.style.display="none";
        let inform=(<HTMLElement>document.getElementById('info2'));
    inform.style.display="none";
    let creditform=(<HTMLElement>document.getElementById('drawform'));
            creditform.style.display="none";
        let debitform=(<HTMLElement>document.getElementById('addform'));
            debitform.style.display="none";
            (<HTMLFormElement>document.getElementById('cusform')).reset();
    
       
        (<HTMLElement>document.getElementById('getinvoice')).addEventListener('click',()=>{
            let cust_id=+((<HTMLFormElement>document.getElementById('customerid')).value);
            let cust_name=(<HTMLFormElement>document.getElementById('customername')).value;
            let cust_dicount=+((<HTMLFormElement>document.getElementById('discount')).value);
            let inv_id=+((<HTMLFormElement>document.getElementById('invoiceid')).value);
            let inv_amount=+((<HTMLFormElement>document.getElementById('invoiceamount')).value);
           
            let obj:CustomerInfo={
                id:cust_id,
                name:cust_name,
                discount:cust_dicount,
            }
            let invoiceInfo={
                id:inv_id,
                amount:inv_amount
            }
            let invoiceobj=new Invoice(obj,invoiceInfo);
          
            let inform=(<HTMLElement>document.getElementById('info1'));
            inform.style.display="block";
            (<HTMLElement>document.getElementById('cusid')).innerText=invoiceobj.getCustomerId().toString();
            (<HTMLElement>document.getElementById('cusname')).innerText=invoiceobj.getCustomerName();
            (<HTMLElement>document.getElementById('invid')).innerText=invoiceobj.getInvoiceId().toString();
            (<HTMLElement>document.getElementById('bframt')).innerText="Rs. "+invoiceobj.getAmount().toString();
            (<HTMLElement>document.getElementById('dis_rate')).innerText=invoiceobj.getDiscountRate()+"%";
            (<HTMLElement>document.getElementById('afterdis')).innerText="Rs. "+invoiceobj.afterDiscount().toFixed(2);
    });


       let resetinvoice=(<HTMLElement>document.getElementById('reset1'));
        resetinvoice.addEventListener('click',()=>{
            (<HTMLFormElement>document.getElementById('cusform')).reset();
            (<HTMLFormElement>document.getElementById('invform')).reset();
            
            let inform=(<HTMLElement>document.getElementById('info1'));
            inform.style.display="none";
            
        });
});   


// account...

(<HTMLElement>document.getElementById('accountbtn')).addEventListener('click',()=>{

 
    let inform=(<HTMLElement>document.getElementById('info1'));
    inform.style.display="none";
    let inform1=(<HTMLElement>document.getElementById('info2'));
    inform1.style.display="none";
    let customer=(<HTMLElement>document.getElementById('customer'));
    customer.style.display="block";
    let account=(<HTMLElement>document.getElementById('account'));
    account.style.display="block";
    let invoice=(<HTMLElement>document.getElementById('invoice'));
        invoice.style.display="none";
        let creditform=(<HTMLElement>document.getElementById('drawform'));
        creditform.style.display="none";
        let show=(<HTMLElement>document.getElementById('show'));
        show.style.display="none";
        let add=(<HTMLElement>document.getElementById('add'));
        add.style.display="block";
    let debitform=(<HTMLElement>document.getElementById('addform'));
        debitform.style.display="none";
        (<HTMLFormElement>document.getElementById('accform')).reset();
        (<HTMLFormElement>document.getElementById('cusform')).reset();
   
    let accountobj;
    //add account..
    (<HTMLElement>document.getElementById('add')).addEventListener('click',()=>{

        let show=(<HTMLElement>document.getElementById('show'));
        show.style.display="block";
        let add=(<HTMLElement>document.getElementById('add'));
        add.style.display="none";
        let cust_id=+((<HTMLFormElement>document.getElementById('customerid')).value);
        let cust_name=(<HTMLFormElement>document.getElementById('customername')).value;
        let account_id=+((<HTMLFormElement>document.getElementById('accountid')).value);
        let account_balance=+((<HTMLFormElement>document.getElementById('balance')).value);
        
       
        let obj:CustomerInfo={
            id:cust_id,
            name:cust_name,
           
        }
        let accountInfo={
            id:account_id,
            balance:account_balance
        }
        accountobj=new Account(obj,accountInfo);
    });

    // get account info
    (<HTMLElement>document.getElementById('getaccount')).addEventListener('click',()=>{
        let inform=(<HTMLElement>document.getElementById('info1'));
        inform.style.display="none";
        let info2=(<HTMLElement>document.getElementById('info2'));
        info2.style.display="block";
        
        (<HTMLElement>document.getElementById('cus_ac_id')).innerText=accountobj.getCustomerId().toString();
        (<HTMLElement>document.getElementById('cus_ac_name')).innerText=accountobj.getCustomerName();
        (<HTMLElement>document.getElementById('accid')).innerText=accountobj.getAccountId().toString();
        (<HTMLElement>document.getElementById('bal')).innerText="Rs. "+accountobj.getBalance().toString();
    });

    // withdraw...
    (<HTMLElement>document.getElementById('withdraw')).addEventListener('click',()=>{

        let creditform=(<HTMLElement>document.getElementById('drawform'));
            creditform.style.display="block";
        let debitform=(<HTMLElement>document.getElementById('addform'));
            debitform.style.display="none";

            (<HTMLElement>document.getElementById('draw')).addEventListener('click',()=>{

                let with_draw=+((<HTMLFormElement>document.getElementById('creditamt')).value);
                (<HTMLElement>document.getElementById('aftercredit')).innerText=accountobj.withdraw(with_draw);
                (<HTMLElement>document.getElementById('bal')).innerText="Rs. "+accountobj.getBalance().toString();
            });

    });

    (<HTMLElement>document.getElementById('deposit')).addEventListener('click',()=>{

        let creditform=(<HTMLElement>document.getElementById('drawform'));
            creditform.style.display="none";
        let debitform=(<HTMLElement>document.getElementById('addform'));
            debitform.style.display="block";

            (<HTMLElement>document.getElementById('add_amt')).addEventListener('click',()=>{

                let depo=+((<HTMLFormElement>document.getElementById('debitamt')).value);
                (<HTMLElement>document.getElementById('afterdebit')).innerText=accountobj.depositAmount(depo);
                (<HTMLElement>document.getElementById('bal')).innerText="Rs. "+accountobj.getBalance().toString();
            });
    });

           
});

/*let accountInfo={
    id:2,
    balance:2000.00
}

let invoice=new Invoice(obj,invoiceInfo);
console.log(invoice.Customername())
let account=new Account(obj,accountInfo);
console.log(account.getBalance());
account.depositAmount(1000);
console.log(account.getBalance());
account.withdraw(2000);*/
