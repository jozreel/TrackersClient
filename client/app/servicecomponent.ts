import {Component, OnInit} from '@angular/core';
import {ServiceReqService} from'./servicereq.service';
import{Service} from './trackerservicereq';
import { Observable } from 'rxjs/Observable';
import {Router, ActivatedRoute, Params} from'@angular/router';
import {Part} from './part';
import { Location }                 from '@angular/common';
import {Helpers} from './helpers';
@Component({

    selector:"service-fields",
    templateUrl:'/templates/servicecomponent.html'
})export class ServiceComponent{
     service:Service;
     trackerId:number;
    // parts:Part[];
    constructor(private serviceReqService:ServiceReqService, private route:ActivatedRoute, private location:Location,private helper:Helpers)
    {
        
    }
    ngOnInit():void{
        this.route.params.forEach((params: Params) => {
         let id =+params['serviceid'];
         let trackerid =+  params['id'];
         this.trackerId = trackerid;
         if(id)
         {
           console.log('iddd', id);
           this.serviceReqService.getService(id).subscribe((serv)=>{this.service=serv; this.service.date = this.helper.formatDate(serv.date);}, err=>{console.log('afcking error',err.message);}); 
         }
        else{
            this.service = new Service();
             this.service.partsReplaced = [];
            this.service.TrackerModelID  =trackerid;
        }
         });
     // th
    }
    addService(service:Service):void{
        // if(this.service.partsReplaced.length > 0)
           // this.service.partsReplaced = this.parts;
         if(!service.ServiceModelID)
            this.serviceReqService.addServiveReq(service).subscribe((serv)=>this.goBack(), (err)=>console.log('afkingerr', err));
          else
          {
            
              this.serviceReqService.saveServiveReq(service).subscribe((serv)=>this.goBack(), (err)=>console.log('afkingerr', err));
          }
    }
    addPart(partnm:string):void{
        console.log(this.service,'mon');
         if(partnm!=='')
         { 
          let part = new Part();
          part.partsName =partnm;
          if(this.service.ServiceModelID)
             part.ServiceModelID = this.service.ServiceModelID;
          this.service.partsReplaced.push(part);
          console.log(this.service.partsReplaced);
         }
    }
    removePart(part:Part):void{
        var ind = this.service.partsReplaced.indexOf(part,0)
        this.service.partsReplaced.splice(ind,1);
    }
      goBack():void{
         this.location.back();

    }



}