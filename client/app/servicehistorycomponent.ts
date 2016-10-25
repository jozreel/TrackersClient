import {Component, OnInit} from '@angular/core';
import {Service} from './trackerservicereq';
import {ServiceReqService} from './servicereq.service'
import {Router, ActivatedRoute, Params} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Location} from '@angular/common';
import {Helpers} from './helpers';
@Component({
    selector:'service-list',
    templateUrl:'/templates/servicehistory.html'

})export class ServiceHistory{
  service:Service[];
 ;

  constructor(private serviceReqService:ServiceReqService, private router:Router, private route:ActivatedRoute, private location:Location, private helper:Helpers)
  {
     
  }
  ngOnInit():void
  {

      this.route.params.forEach((param:Params)=>{
         let tId =+ param['id'];
       
         this.getHistory(tId);
      });
     

  }

  getHistory(id:number):void{
     this.serviceReqService.getAllService(id).subscribe((serv)=>this.service = serv, (err)=>console.log('afking err', err));
  }
  public goBack():void{
      this.location.back();
  }
  showService(serv:Service):void{
        console.log(serv);
         let link = ['/servicetracker',serv.TrackerModelID, serv.ServiceModelID];
         this.router.navigate(link);
  }
}