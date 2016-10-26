import {Injectable} from '@angular/core';
import{Headers, Http, Response} from '@angular/http';
import 'rxjs/add/operator/toPromise'; 
import {Observable} from 'rxjs/Rx';
import {Date} from './date';
@Injectable()
export class FooterService
{
    restUrl : string = 'http://192.168.3.24:8088';
     private headers = new Headers({'Content-Type': 'application/json'});
    constructor(private http:Http)
    {

    }
    public getDate():Observable<Date>{
      return this.http.get(this.restUrl+'/date').map((res:Response) => res.json())
                         //...errors if any
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

    }
}