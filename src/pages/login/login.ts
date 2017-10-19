import { LoginEmailPage } from '../login-email/login-email';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  
  public backgroundImage = 'assets/image/login-bg.jpg';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  gotoHomePage() {
    this.navCtrl.setRoot(TabsPage);
  }
  gotoLoginEmail(){
    this.navCtrl.push(LoginEmailPage);
  }
}
