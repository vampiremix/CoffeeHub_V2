import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { RouteUrlProvider } from '../route-url/route-url';
import { UsersModel } from '../../models/users.model';

/*
  Generated class for the AuthenticationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthenticationProvider {


  constructor(public http: Http,
  private routeurl : RouteUrlProvider) {
    console.log('Hello AuthenticationProvider Provider');
  }

  signin(logindata): Promise<UsersModel> {
    return new Promise((resolve, reject) => {
      this.http.post(this.routeurl.apiUrl + 'api/auth/signin', logindata, this.routeurl.optionsURL).map(res => {
        return res.json();
      }).subscribe(data => {
        resolve(data as Promise<UsersModel>);
      }, (error) => {
        reject(error);
      });
    })
  }

  facebookLogin(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(this.routeurl.apiUrl + 'api/auth/facebook').map(res => {
        return res.json();
      }).subscribe(data => {
        resolve(data);
      }, (error) => {
        reject(error);
      });
    })
  }
}
