
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { ShopLocationPage } from '../shop-location/shop-location';

/**
 * Generated class for the PromotionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-promotion',
  templateUrl: 'promotion.html',
})
export class PromotionPage {
  page = "Promotion";
  user;
  list = ['./assets/image/promotion_pic_new.png',
  './assets/image/promotion_pic_new.png',
  './assets/image/promotion_pic_new.png',
  './assets/image/promotion_pic_new.png',
  './assets/image/promotion_pic_new.png'];
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user =  window.localStorage.getItem('user');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PromotionPage');
  }

  gotoProfile(){
    this.navCtrl.push(ProfilePage);
  }
  location(){
    this.navCtrl.push(ShopLocationPage);
  }
}
