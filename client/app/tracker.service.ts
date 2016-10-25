import {Tracker} from './tracker';
import {Injectable} from '@angular/core';
import{Headers, Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise'; 
@Injectable()
export class TrackerService{
     restUrl : string = 'http://192.168.3.132:60883/api/TrackerModels';  
     private headers = new Headers({'Content-Type': 'application/json'});
    constructor(private http:Http)
    {  
    
    }  
 public getTrackers(id):Observable<Tracker[]>{
       const url = this.restUrl+'/CustomerTrackers/'+id;
       console.log(url);
       return this.http.get(url)
                        // ...and calling .json() on the response to return data
                         .map((res:Response) => res.json())
                         //...errors if any
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  public getTracker(trackerid):Observable<Tracker>{
       const url = this.restUrl+'/GetTrackerModel/'+trackerid;
       console.log(url);
       return this.http.get(url)
                        // ...and calling .json() on the response to return data
                         .map((res:Response) => res.json())
                         //...errors if any
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  public create(tracker:Tracker):Observable<Tracker>
    {
      console.log(JSON.stringify(tracker), 'tototoo');
      return this.http.post(this.restUrl,JSON.stringify(tracker),{headers:this.headers}).map((res:Response)=>res.json()).catch((error:any)=>Observable.throw(error.json().error || 'Server error'));
    }

    public update(tracker:Tracker):Observable<Tracker>
    {
      const url = this.restUrl+'/'+tracker.TrackerModelID;
      //console.log(JSON.stringify(customer));
      return this.http.put(url,JSON.stringify(tracker),{headers:this.headers}).map((res:Response)=>{res.json()}).catch((error:any)=>Observable.throw(error.json().error || 'Server error'));
    }

    public remove(id:number):Observable<Tracker>{
      const url = this.restUrl+'/'+id;
      return this.http.delete(url, {headers:this.headers}).map((res:Response)=>res.json()).catch((error:any)=>Observable.throw(error.json().error||'Server error'));
  }
} 