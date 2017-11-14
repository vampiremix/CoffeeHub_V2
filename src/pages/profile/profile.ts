import { LoginPage } from '../login/login';
import { Component } from '@angular/core';
import { App, IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  public backgroundImage = 'assets/image/profile-bg.jpg';
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public app: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }
  Logout() {
    this.app.getRootNav().push(LoginPage);
   
  }
}
