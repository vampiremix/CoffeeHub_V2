import { RateCupcoinPage } from './../rate-cupcoin/rate-cupcoin';
import { AboutPage } from './../about/about';
import { ShopListPage } from '../shop-list/shop-list';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the OtherPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-other',
  templateUrl: 'other.html',
})
export class OtherPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad OtherPage');
  }
  shopList(){
    this.navCtrl.push(ShopListPage);
  }
  about(){
    this.navCtrl.push(AboutPage);
  }
  rateCupcoin(){
    this.navCtrl.push(RateCupcoinPage);
  }
}
