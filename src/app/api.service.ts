import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Employee } from './employee'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/toPromise';

const API_URL = environment.apiUrl;

@Injectable()
export class ApiService {
  constructor(
    private http: Http
  ) {
  }

  private handleError(error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }

  public save(employee: Employee): Observable<Employee[]> {

    console.log("in service save" + API_URL);
    console.log(JSON.stringify(employee));

    let data = JSON.stringify(employee);

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http
      .post(API_URL+"/employee", data, options)      
      .map(response => response.json())
      .catch(this.handleError);
  }

  public saveWtPromise(employee: Employee): Promise<Employee[]> {

    console.log("in service save" + API_URL);
    console.log(JSON.stringify(employee));

    let data = JSON.stringify(employee);

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http
      .post(API_URL+"/employee", data, options).toPromise()      
      .then(response => response.json())
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    return res;
  }

  public retrieve(): Promise<Employee[]> {
    return this.http.get(API_URL+"/employees").toPromise()
	    .then(response => response.json())
      .catch(this.handleError);
  }

  headers = new Headers({ 'Content-Type': 'application/json' });
  options = new RequestOptions({ headers: this.headers });

  public retrieveWTObservable(): Observable<Employee[]> {
    return this.http.get(API_URL+"/employees", this.options)
	    .map(response => response.json())
      .catch(this.handleError);
  }
}