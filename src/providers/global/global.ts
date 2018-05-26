import { Injectable } from '@angular/core';
import { Http,RequestOptions,Headers,Response  } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class GlobalProvider {

  	constructor(public http: Http) {
    	console.log('Hello GlobalProvider Provider');
  	}

  	private handleErrorObservable (error: Response | any) {
        return Observable.throw(error.message || error);
    }

  	submit(data){
        let headers = new Headers({'Content-Type':'application/json'})
        let option = new RequestOptions({headers:headers});
        return this.http.post("http://diary.solutions-iv.com/mail.php",data,option)
            .map((res:Response)=>res.json())
            .catch(this.handleErrorObservable)
    }

}
