import { LoginEmailPage } from '../login-email/login-email';
import { Component, ElementRef, ViewChild  } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';
import { AuthenticationProvider } from '../../providers/authentication/authentication';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
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

  @ViewChild('map') mapElement: ElementRef;
  private latLng: any = {};
  dataShop: any = [];
  
  public backgroundImage = 'assets/image/login-bg.jpg';
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private authenPVD: AuthenticationProvider,
    private fb: Facebook
  ) {
    
  }

  ionViewDidLoad() {
    this.initMap();
  }
  gotoHomePage() {
    this.navCtrl.setRoot(TabsPage);
  }
  gotoLoginEmail(){
    this.navCtrl.push(LoginEmailPage);
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
          // console.log(element.geometry.location.lat() +"         "+ element.geometry.location.lng() );
          this.dataShop.push({
            image: element.photos[0].getUrl({ 'maxWidth': 300, 'maxHeight': 300 }),
            name: element.name
          });
          console.log(this.dataShop);
        });
      }
    });
  }

  fblogin() {
    this.fb.login(['public_profile', 'user_friends', 'email'])
    .then((res: FacebookLoginResponse) => console.log('Logged into Facebook!', res))
    .catch(e => console.log('Error logging into Facebook', e));
    // this.authenPVD.facebookLogin().then((data) => { alert("FB : " + data) }).catch((err) => { alert("Err FB : " + err) });
  }
}
