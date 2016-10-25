import {Component, Input, OnInit} from '@angular/core';
import{Tracker} from './tracker';
import{TrackerService} from './tracker.service';
import{ActivatedRoute, Params} from '@angular/router'
import { Observable } from 'rxjs/Observable';
import { Location }                 from '@angular/common';
import {Helpers} from './helpers';
@Component({
    templateUrl:'/templates/addtrackercomponent.html',
    selector:'tracker-display'

})export class AddTrackerComponent implements OnInit{
    tracker:Tracker;
    customerName:string;
    customerId:number;
    constructor(private trackerservice:TrackerService, private route:ActivatedRoute,private location:Location, private helper:Helpers)
    {

    }
    ngOnInit():void{
        this.route.params.forEach((params: Params) => {
         let id =+params['id'];
         this.customerId =+ params['custid']
         if(id)
         {
         console.log('uuuu');
         this.trackerservice.getTracker(id).subscribe((tracker)=>{ this.tracker = tracker; console.log(this.tracker);}, (err)=>console.log('afking err', err));
        }
        else{
            this.tracker= new Tracker();
            this.tracker.CustomerModelID = this.customerId;
        }
        });
    }
    add():void{
         this.route.params.forEach((params: Params) => {
         let id =+params['id'];
           var mob= this.helper.formatTel(this.tracker.simNumber);
             
            
             if(mob!=='')
             {
               this.tracker.simNumber= mob;
             
         if(!id)
         {
             console.log('hola')
             this.trackerservice.create(this.tracker).subscribe((tracker) =>this.goBack(), err=>{'afking err', console.log(err.message)});
         }
         else
         {
             console.log('old');
             this.trackerservice.update(this.tracker).subscribe((tracker)=>console.log('saved'),err=>{console.log('afking err',err.message)});
         }
             }
        });
    }
    goBack():void{
         this.location.back();

    }



}