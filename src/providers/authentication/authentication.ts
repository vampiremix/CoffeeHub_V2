import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { RouteUrlProvider } from '../route-url/route-url';
import { UsersModel } from '../../models/users.model';
import { FaceBookUserModel } from "../../models/users.model";
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
/*
  Generated class for the AuthenticationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthenticationProvider {
  public fbUser: FaceBookUserModel;

  constructor(public http: Http,
    private fb: Facebook,
    private routeurl: RouteUrlProvider) {
    console.log('Hello AuthenticationProvider Provider');
  }

  signinMean(logindata): Promise<UsersModel> {
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
    return new Promise((loginSuccess, loginError) => {
      this.fb.login(['public_profile', 'user_friends', 'email'])
        .then((res: FacebookLoginResponse) => {
          // alert('Logged into Facebook! : ' + JSON.stringify(res));
          this.fb.api('me?fields=email,id,first_name,name,last_name,picture.width(600).height(600)', null).then(
            (resData) => {
              this.fbUser = resData;
              loginSuccess(resData as Promise<any>);
              // alert(" DATA : " + JSON.stringify(resData));
            }).catch((err) => {
              loginError(err as Promise<any>);
              alert("ไม่สามารถล็อคอินเข้าสู่ระบบด้วย Facebook ได้");
            });
        }
        )
        .catch(e => {
          loginError(e as Promise<any>);
          alert('Error logging into Facebook : ' + JSON.stringify(e))
        });

    })
  }

  //----------------------------------------token------------------------------------------------//

  createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', window.localStorage.getItem('token'));
  }

  private() {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.get(this.routeurl.apiUrl + 'api/users/me', {
      headers: headers
    }).map(res => {
      res.json()
    });
  }
  signin(logindata) {
    return this.http.post(this.routeurl.apiUrl + "api/auth/signin", logindata).map(this.extractData);
  }


  signup(signupData): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post(this.routeurl.apiUrl + 'api/auth/signup', signupData, this.routeurl.optionsURL).map(res => {
        return res.json();
      }).subscribe(data => {
        window.localStorage.setItem('user', JSON.stringify(data));
        resolve(data as Promise<UsersModel>);

      }, (error) => {
        reject(error);
      });
    })
  }

  isLogged() {
    if (window.localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }
  logout() {
    window.localStorage.removeItem('token');
    return this.http.get(this.routeurl.apiUrl + "api/auth/signout").map(this.extractData);;
  }
  private extractData(res: Response) {
    let body = res.json();
    window.localStorage.setItem('token', body.loginToken);
    return body || {};
  }
}
