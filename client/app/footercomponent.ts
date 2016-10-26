import {Component,OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {FooterService} from './footer.service';
import {Date} from './date';
@Component({
    selector:'my-foot',
    template:'<span>{{date}}</span>'
    

})
export class FooterComponent{
    date:string;
  constructor(private footerService:FooterService){

  }
  ngOnInit():void{
      this.footerService.getDate().subscribe((res)=>{this.date = res.year; console.log(res);}, err=>console.log('afking error', err));
  }
}