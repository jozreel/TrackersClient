import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import {CustomerService} from './customer.service';
import { RouterModule } from '@angular/router'; 
import {HomeComponent }  from './homecomponent';
import {TrackerComponent} from './trackercomponent'
import { ClientComponent } from './client.component';
import {ClientList} from './listcomponent';
import {TrackerService} from './tracker.service';
import {AddTrackerComponent} from './addtrackercomponent'
@NgModule({
  imports:[BrowserModule,HttpModule,FormsModule, RouterModule.forRoot([
    {path:'client/:id', component:ClientComponent},{path:'client', component:ClientComponent},
    {path:'trackers/:id/:name', component:TrackerComponent}, {path:'', component:ClientList, pathMatch:'full'}, {path:'home', component:ClientList},
    {path:'tracker/:id', component:AddTrackerComponent},{path:'addtracker/:custid', component:AddTrackerComponent}
  ])],
  declarations: [HomeComponent, ClientComponent, ClientList,TrackerComponent, AddTrackerComponent],
  providers:[CustomerService,TrackerService],
  bootstrap:[ HomeComponent]
})
export class AppModule { }
