import { LoginPage } from '../../pages/login/login';
import { ShopLocationPage } from '../../pages/shop-location/shop-location';
import { ProfilePage } from '../../pages/profile/profile';
import { Events, NavController } from 'ionic-angular';
import { Component, Input } from '@angular/core';

/**
 * Generated class for the HeaderToolbarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'header-toolbar',
  templateUrl: 'header-toolbar.html'
})
export class HeaderToolbarComponent {
  @Input() title: string;
  // @Input() user: UsersModel = new UsersModel;
  text: string;
  user;
  constructor(public events: Events, public navCtrl: NavController) {
    console.log('Hello HeaderToolbarComponent Component');
    this.user = JSON.parse(window.localStorage.getItem('user'));
    console.log("User : ", this.user);
  }
  gotoProfile() {
    this.navCtrl.push(ProfilePage);
  }
  location() {
    this.navCtrl.push(ShopLocationPage);
  }
  gotoLogin(){
    this.navCtrl.parent.parent.setRoot(LoginPage);
  }
}
