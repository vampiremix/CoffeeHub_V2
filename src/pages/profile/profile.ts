import { AuthenticationProvider } from '../../providers/authentication/authentication';
import { FavoritePage } from './../favorite/favorite';
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
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public auth:AuthenticationProvider,
    private app: App
  ) {
    this.auth.private().subscribe(data =>{
      console.log(data);
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }
  favorite() {
    this.navCtrl.push(FavoritePage);

  }
  Logout() {
    // window.localStorage.removeItem('user');
    // this.navCtrl.parent.parent.setRoot(LoginPage);
    this.auth.logout();
    this.app.getRootNav().setRoot(LoginPage);
  }
}
