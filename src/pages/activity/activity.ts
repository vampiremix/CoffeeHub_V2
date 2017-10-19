import { QrcodePage } from '../qrcode/qrcode';
import { PremiumProductPage } from '../premium-product/premium-product';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ActivityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-activity',
  templateUrl: 'activity.html',
})
export class ActivityPage {

  public backgroundImage = './assets/image/activity_2.jpg';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActivityPage');
  }

  PM(){
    this.navCtrl.push(PremiumProductPage);
  }
  closePage(){
    this.navCtrl.pop();
  }
  showQrcode(){
    this.navCtrl.setRoot(QrcodePage);
  }
}
