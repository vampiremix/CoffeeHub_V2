import { FavoritePage } from './../favorite/favorite';
import { LoginPage } from '../login/login';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }
  favorite() {
    this.navCtrl.push(FavoritePage);

  }
  Logout() {
    window.localStorage.removeItem('user');
    this.navCtrl.parent.parent.setRoot(LoginPage);
  }
}
