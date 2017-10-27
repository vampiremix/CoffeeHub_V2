import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
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
  private fbUser: FaceBookUserModel;

  constructor(public http: Http,
    private fb: Facebook,
    private routeurl: RouteUrlProvider) {
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

  facebookLogin() {
    this.fb.login(['public_profile', 'user_friends', 'email'])
      .then((res: FacebookLoginResponse) => {
        alert('Logged into Facebook! : ' + JSON.stringify(res));
        this.fb.api('me?fields=email,id,first_name,name,last_name,picture.width(600).height(600)', null).then(
          (resData) => {
            this.fbUser = resData;
            alert(" DATA : " + JSON.stringify(resData));
          }).catch((err) =>{
            alert("ไม่สามารถล็อคอินเข้าสู่ระบบด้วย Facebook ได้");
          });

      }
      )
      .catch(e => alert('Error logging into Facebook : ' + e));
    // this.authenPVD.facebookLogin().then((data) => { alert("FB : " + data) }).catch((err) => { alert("Err FB : " + err) });





  }
}
