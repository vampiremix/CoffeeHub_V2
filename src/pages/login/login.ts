import { RegisterPage } from '../register/register';
import { LoginEmailPage } from '../login-email/login-email';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, LoadingController, NavController, NavParams } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';
import { AuthenticationProvider } from '../../providers/authentication/authentication';



/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var google;

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  ////
  @ViewChild('map') mapElement: ElementRef;
  private latLng: any = {};
  dataShop: any = [];

  public backgroundImage = 'assets/image/login-bg.jpg';
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private authenPVD: AuthenticationProvider,
    public loadingCtrl: LoadingController
  ) {

  }

  ionViewDidLoad() {
    this.initMap();
  }
  gotoHomePage() {
    this.navCtrl.setRoot(TabsPage);
  }
  gotoLoginEmail() {
    this.navCtrl.push(LoginEmailPage);
  }
  register() {
    this.navCtrl.push(RegisterPage);
  }

  initMap() {
    this.latLng = {
      lat: 13.9381232,
      lng: 100.71376
    };

    let map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 12,
      center: this.latLng
    });

    let request = {
      location: this.latLng,
      radius: '112500',
      types: ['restaurant'],
      keyword: 'coffee'
    };

    let service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, (results, status) => {
      if (status == 'OK') {
        results.forEach(element => {
          console.log(element);
          // let data = element.id;
          // element.forEach(element1 => {
          //   console.log(element1);
          // });

          // console.log(element.geometry.location.lat() +"         "+ element.geometry.location.lng() );
          this.dataShop.push({
            image: element.photos[0].getUrl({ 'maxWidth': 300, 'maxHeight': 300 }),
            name: element.name
          });
          // console.log(this.dataShop);
        });
      }
    });
  }

  fblogin() {
    const loading = this.loadingCtrl.create({
      spinner: 'crescent',
      content: `
        <div class="custom-spinner-container">
          <div><img src='./assets/image/gif2.gif'></div>
        </div>`
    });
    loading.present();
    this.authenPVD.facebookLogin().then((data) => {
      let sendLoginData = {
        username: this.authenPVD.fbUser.email,
        password: 'P@ssw0rd1234'
      }
      this.authenPVD.signinMean(sendLoginData).then((loginData) => {
        // alert("LOGIN FB DATA FROM MEAN : " + JSON.stringify(loginData));
        loading.dismiss();
        window.localStorage.setItem('user', JSON.stringify(loginData));
        this.navCtrl.setRoot(TabsPage);
      }).catch((ERR) => {
        let msgERR = JSON.parse(ERR._body);
        if (msgERR.message == "Invalid username or password") {
          let sendSignUp = {
            username: this.authenPVD.fbUser.email,
            password: "P@ssw0rd1234",
            firstName: this.authenPVD.fbUser.first_name,
            lastName: this.authenPVD.fbUser.last_name,
            displayName: this.authenPVD.fbUser.name,
            email: this.authenPVD.fbUser.email,
            profileImageURL: this.authenPVD.fbUser.picture.data.url
          }
          this.authenPVD.signup(sendSignUp).then((success) => {
            loading.dismiss();
            alert("Registered User");
            this.navCtrl.setRoot(TabsPage);
          }).catch((regErr) => {
            let ErrMsg = JSON.parse(regErr._body)
            alert("Register User ERROR : " + ErrMsg.message);
          })
        }
        alert("LOGIN FB DATA FROM MEAN ERR: " + JSON.stringify(ERR));
        loading.dismiss();
      })
    }).catch((err) => {
      loading.dismiss();
    });
  }

}
