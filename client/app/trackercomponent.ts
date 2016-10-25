import {Component, Input, OnInit} from '@angular/core';
import{Tracker} from './tracker';
import{TrackerService} from './tracker.service';
import{ActivatedRoute, Params, Router} from '@angular/router'
import { Observable } from 'rxjs/Observable';
import { Location }                 from '@angular/common';

@Component({
    templateUrl:'/templates/trackercomponent.html',
    selector:'tracker-list'

})export class TrackerComponent{
    trackers:Tracker[];
   showModal:boolean;
   showel:boolean;
   trackerId:number;
    isWarnig:boolean;
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
    stopPorperg(ev):void{
        ev.stopPropagation();

    }
    showModalFunc(ev, tracker:Tracker):void{
       ev.stopPropagation();

        this.trackerId = tracker.TrackerModelID;
        this.showel = true;

    }
    removeTracker(tracker:Tracker):void{
    
        this.showel= false;
         this.trackerservice.remove(this.trackerId).subscribe((cust)=>this.getTrackers(this.customerId), err=>console.log('afking err', err));
      
        
    }
    hideDialog():void{
    this.showModal = false;
             console.log(this.customerId);
    this.showel = false;
    this.isWarnig = false;
  }
  serviceForm(ev, tracker:Tracker)
  {
     // ev.stopPropagation();
       let link = ['/servicetracker',tracker.TrackerModelID];
       this.router.navigate(link);

  }
  serviceHistory(ev, id:number):void{
      ev.stopPropagation();
      let link = ['/servicehistory', id];
      this.router.navigate(link);
  }
}