import {Service} from './trackerservicereq';
import {Injectable} from '@angular/core';
import{Headers, Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise'; 
@Injectable()
export class ServiceReqService{

    private restUrl ='http://192.168.3.132:60883/api/ServiceModels';
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http:Http)
    {

    }

    public addServiveReq(service:Service):Observable<Service>{
               console.log(JSON.stringify(service));
               return this.http.post(this.restUrl, JSON.stringify(service), {headers:this.headers}).map((res:Response)=>res.json()).catch((error:any)=>Observable.throw(error.json().error||'server error'));

    }

    public getService(id):Observable<Service>{
            //  var url = this.restUrl+'/'+id;
              var url = 'http://192.168.3.132:60883/api/servicemodels/GetServiceModel/'+id;
              return this.http.get(url).map((res:Response)=>res.json()).catch((error:any)=>Observable.throw(error.json().error||'server error'));
       
    }
    public getAllService(id:number):Observable<Service[]>{
          var url = this.restUrl+'/ServiceForTracker/'+id;
       return this.http.get(url).map((res:Response)=>res.json()).catch((error:any)=>Observable.throw(error.json().error || 'server error'))
    }
     public saveServiveReq(service:Service):Observable<Service>{
               
                const url = this.restUrl+'/'+service.ServiceModelID;
               return this.http.put(url, JSON.stringify(service), {headers:this.headers}).map((res:Response)=>res.json()).catch((error:any)=>Observable.throw(error.json().error||'server error'));

    }

    public removePart(partid):Observable<Service>{
         const url = this.restUrl+'/'+partid;
         return this.http.delete(url, {headers:this.headers}).map((res:Response)=>res.json()).catch((error:any)=>Observable.throw(error.json().error||'Server error'));

    }

}


