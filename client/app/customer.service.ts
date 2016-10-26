import {Injectable} from '@angular/core';
import{Headers, Http, Response} from '@angular/http';
import 'rxjs/add/operator/toPromise'; 
import {Observable} from 'rxjs/Rx';
import {Customer} from './customer'
import {Country} from './country';
@Injectable()
export class CustomerService{
    restUrl : string = 'http://192.168.3.132:60883/api/CustomerModels';
     private headers = new Headers({'Content-Type': 'application/json'});
    constructor(private http:Http)
    {
    
    }
    public getCustomers():Observable<Customer[]>{ 
       
       
      return this.http.get(this.restUrl)
                        // ...and calling .json() on the response to return data
                         .map((res:Response) => res.json())
                         //...errors if any
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

    }  
    create(customer:Customer):Observable<Customer>
    {
     
      
      return this.http.post(this.restUrl,JSON.stringify(customer),{headers:this.headers}).map((res:Response)=>res.json()).catch((error:any)=>Observable.throw(error.json().error || 'Server error'));
    }
    update(customer:Customer):Observable<Customer>
    {
      const url = this.restUrl+'/'+customer.CustomerModelID;
      //console.log(JSON.stringify(customer));
      return this.http.put(url,JSON.stringify(customer),{headers:this.headers}).map((res:Response)=>{res.json()}).catch((error:any)=>Observable.throw(error.json().error || 'Server error'));
    }
    public getCustomer(id):Observable<Customer>{ 
       
       const url = this.restUrl+'/'+id;
      return this.http.get(url)
                        // ...and calling .json() on the response to return data
                         .map((res:Response) => res.json())
                         //...errors if any
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

    }  
    search(term: string): Observable<Customer[]> {
      //var url = 'http://localhost:60883/api/CustomerModels?name='
     
    return this.http.get(this.restUrl+'?name='+term).map((r: Response) =>r.json()) .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  remove(id:number):Observable<void>{
      const url = this.restUrl+'/'+id;
      return this.http.delete(url, {headers:this.headers}).map((res:Response)=>res.json()).catch((error:any)=>Observable.throw(error.json().error||'Server error'));
  }

  countries():Observable<Country[]>
  {
       return this.http.get('http://192.168.3.24:8088/countries')
                        // ...and calling .json() on the response to return data
                         .map((res:Response) => res.json())
                         //...errors if any
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

  }
  /*  private handleError(error: any): Observable<any> {
  console.error('An error occurred', error);
  return Promise.reject(error.message || error);
}*/

}  