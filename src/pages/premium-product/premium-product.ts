import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PremiumProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-premium-product',
  templateUrl: 'premium-product.html',
})
export class PremiumProductPage {

  public backgroundImage = './assets/image/premium_2.jpg';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PremiumProductPage');
  }
  sell(){
    alert("แปป นะครับ ยังไม่เสร็จ T_T !! ");
  }
  closePage(){
    this.navCtrl.pop();
  }
}
