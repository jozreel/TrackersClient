import { Component , OnInit} from '@angular/core';
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
    constructor(private customerService:CustomerService,private router: Router){
        
    }  

    getCustomers():void{
   
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
}

