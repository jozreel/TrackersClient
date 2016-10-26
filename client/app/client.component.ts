import { Component, Input, OnInit} from '@angular/core';
import {Customer} from './customer';
import {CustomerService} from './customer.service';
import { ActivatedRoute, Params, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Location }                 from '@angular/common';
import {Tracker} from './tracker';
import {Helpers} from './helpers';
import {Country} from './country';
@Component(
    {
        selector:'client-detail',
        templateUrl:'/templates/clientcomponent.html'
    }
)
export class ClientComponent implements OnInit{
    // @Input()
    customer:Customer;
    countries:Country[];
    showSpin:boolean = false;
    constructor(private customerService:CustomerService, private route: ActivatedRoute, private location: Location, private router:Router, private helper:Helpers){
        
    }
   viewTrackers(customer:Customer):void{
      let link = ['/trackers', customer.CustomerModelID, customer.CustomerName];
     this.router.navigate(link);
   }   
    
    save():void{
        this.showSpin = true;
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
            
             this.customerService.create(this.customer).subscribe((customer) =>this.goBack(), err=>{ this.showSpin=false; console.log(err.message)});
             
         }
         else
         {
             console.log('old');
             
            this.customerService.update(this.customer).subscribe((customer)=> this.showSpin=false,err=>{ this.showSpin=false; console.log('afking err',err.message);});
         }
        }
        });
    }
    ngOnInit(): void {
         this.customerService.countries().subscribe((country)=>this.countries= country, (err)=>console.log('afking err', err));
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
       this.showSpin =false ;
    this.location.back();
  }

   
} 