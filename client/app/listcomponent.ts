import { Component , OnInit,ElementRef} from '@angular/core';
import {CustomerService} from './customer.service';
import {Customer} from './customer';
import {Tracker} from './tracker';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Router }            from '@angular/router';



@Component({
    templateUrl:'/templates/clientlistcomponent.html',
    selector:'client-list',
    providers:[CustomerService]

})
export class ClientList implements OnInit{
 customers:Customer[];
 showModal:boolean;
 showel:boolean;
 customerId:number;
    constructor(private customerService:CustomerService,private router: Router, private el:ElementRef){
        this.showModal=false;
        this.showel = false;
    }  

    getCustomers():void{
      console.log('getting all customers');
       this.customerService.getCustomers().subscribe(customers=>this.customers=customers, err=>{console.log('afcking error',err);}); 
    }
 
 ngOnInit(): void {
    this.getCustomers();
  }
  public onSelect(customer:Customer):void{
     let link = ['/client', customer.CustomerModelID];
     this.router.navigate(link);
     
  }
  public addClient():void{
    let link = ['/client'];
     this.router.navigate(link);
  }
  search(event,val):void{
    
    var key = event.keyCode || event.charCode;
    console.log(val.length);
     if(val.length ==0)
     {
       this.getCustomers();
     }
     else
      this.customerService.search(val).subscribe((customers)=>{this.customers=customers;}, err=>{console.log('afcking error',err);});
  }
  doNothing(event,customer:Customer):void{
    if(customer.Trackers.length ==0 )
    {
  // let link = ['/delete',customer.CustomerModelID,];
       //   this.router.navigate(link);
       this.customerId = customer.CustomerModelID;
       this.showel = true;
    }
    else
       this.showModal=true;
    event.stopPropagation();
  }
  hideDialog():void{
    this.showModal = false;
    this.showel = false;
  }
 deleteCustomer():void{
             console.log(this.customerId);
            if(this.customerId)
            {
              
              this.showel= false;
              this.customerService.remove(this.customerId).subscribe((cust)=>this.getCustomers(), err=>console.log('afking err', err));
            }
       
   
   }
}

