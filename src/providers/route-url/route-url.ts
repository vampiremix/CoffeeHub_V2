import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the RouteUrlProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RouteUrlProvider {
  ////////////////////////////////////////////////
  apiUrl: string = 'https://coffeehubserver-test.herokuapp.com/';
  headers = new Headers({
    'Content-Type': 'application/json'
  });

  optionsURL = new RequestOptions({
    headers: this.headers
  });
  ////////////////////////////////////////////////
  constructor(public http: Http) {
    console.log('Hello RouteUrlProvider Provider');
  }

}
