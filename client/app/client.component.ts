import { Component, Input, OnInit} from '@angular/core';
import {Customer} from './customer';
import {CustomerService} from './customer.service';
import { ActivatedRoute, Params, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Location }                 from '@angular/common';
import {Tracker} from './tracker';
import {Helpers} from './helpers';
@Component(
    {
        selector:'client-detail',
        templateUrl:'/templates/clientcomponent.html'
    }
)
export class ClientComponent implements OnInit{
    // @Input()
    customer:Customer;
    constructor(private customerService:CustomerService, private route: ActivatedRoute, private location: Location, private router:Router, private helper:Helpers){
        
    }
   viewTrackers(customer:Customer):void{
      let link = ['/trackers', customer.CustomerModelID, customer.CustomerName];
     this.router.navigate(link);
   }   
    
    save():void{
        this.route.params.forEach((params: Params) => {
         let id =+params['id'];
         
           var mob= this.helper.formatTel(this.customer.CustomerMobile);
             
              var tel = this.helper.formatTel(this.customer.CustomerPhone);
              this.customer.CustomerPhone = tel;
             if(mob!=='')
             {
               this.customer.CustomerMobile = mob;
             
         if(!id)
         {
            
             this.customerService.create(this.customer).subscribe((customer) =>this.goBack(), err=>{'afking err', console.log(err.message)});
             
         }
         else
         {
             console.log('old');
             
            this.customerService.update(this.customer).subscribe((customer)=>console.log('saved'),err=>{console.log('afking err',err.message)});
         }
        }
        });
    }
    ngOnInit(): void {
         this.route.params.forEach((params: Params) => {
         let id =+params['id'];
         if(id)
         {
           
           this.customerService.getCustomer(id).subscribe((customer)=>{this.customer=customer;}, err=>{console.log('afcking error',err.message);}); 
         }
        else{
            this.customer = new Customer();
        }
         });
     // this.getCustomers();
  }
   goBack(): void {
    this.location.back();
  }

   
} 