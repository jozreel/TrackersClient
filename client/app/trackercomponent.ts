import {Component, Input, OnInit} from '@angular/core';
import{Tracker} from './tracker';
import{TrackerService} from './tracker.service';
import{ActivatedRoute, Params, Router} from '@angular/router'
import { Observable } from 'rxjs/Observable';
import { Location }                 from '@angular/common';
@Component({
@Component({
    templateUrl:'/templates/trackercomponent.html',
    selector:'tracker-list'

})export class TrackerComponent{
    trackers:Tracker[];
  
    customerName:string;
    customerId:number;
    constructor(private trackerservice:TrackerService, private route:ActivatedRoute, private router:Router, private location:Location)
    {

    }
    getTrackers(id):void{
        this.trackerservice.getTrackers(id).subscribe((trackers)=>this.trackers = trackers, err=>console.log('afking err', err));
    }
    ngOnInit():void{
          this.route.params.forEach((params: Params) => {
              console.log(params, 'poooo');
              let id =+params['id'];
              this.customerName = params['name'];
              this.customerId = id;
              this.getTrackers(id);
          });
    }
    showTracker(tracker:Tracker):void{
       
        let link = ['/tracker',tracker.TrackerModelID,];
          this.router.navigate(link);
    }
    addTracker():void{
      
        let link = ['/addtracker',this.customerId];
          this.router.navigate(link);
    }
    goBack():void{
         this.location.back();

    }

}