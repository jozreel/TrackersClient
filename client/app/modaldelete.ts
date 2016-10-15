import {Component, Input} from  '@angular/core';
import {Router} from '@angular/router';
import {CustomerService} from './customer.service';
import {ActivatedRoute, Params} from '@angular/router';
@Component({
selector:'modal-delete',
templateUrl:'/templates/modaldelete.html'
})
export class ModalDelete{ 
    @Input()
    id:number;
   constructor(private router:Router, private customerservice:CustomerService,private route:ActivatedRoute){
       
   }
   closeDialog():void{
        let link = ['/home'];
          this.router.navigate(link);
   }
   deleteCustomer():void{
        this.route.params.forEach((params: Params) => {
            let id =+ params['id'];
            if(id)
              this.customerservice.remove(id).subscribe((cust)=>console.log(cust), err=>console.log('afking err', err));id
       
   });
   }
}