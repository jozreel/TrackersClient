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
import {AddTrackerComponent} from './addtrackercomponent';
import {ServiceComponent} from './servicecomponent';
import {ModalDelete} from './modaldelete';
import { ServiceReqService } from './servicereq.service';
import{ServiceHistory} from './servicehistorycomponent';
import {Helpers} from './helpers';
@NgModule({
  imports:[BrowserModule,HttpModule,FormsModule, RouterModule.forRoot([
    {path:'client/:id', component:ClientComponent},{path:'client', component:ClientComponent},
    {path:'trackers/:id/:name', component:TrackerComponent}, {path:'', component:ClientList, pathMatch:'full'}, {path:'home', component:ClientList},
    {path:'tracker/:id', component:AddTrackerComponent},{path:'addtracker/:custid', component:AddTrackerComponent},{path:'delete/:id', component:ModalDelete},
    {path:'servicetracker/:id', component:ServiceComponent},{path:'servicetracker/:id/:serviceid', component:ServiceComponent},{path:'servicehistory/:id', component:ServiceHistory}
  ])],
  declarations: [HomeComponent, ClientComponent, ClientList,TrackerComponent, AddTrackerComponent,ModalDelete, ServiceComponent,ServiceHistory],
  providers:[CustomerService,TrackerService, ServiceReqService, Helpers],
  bootstrap:[ HomeComponent]
})
export class AppModule {
  
 }
