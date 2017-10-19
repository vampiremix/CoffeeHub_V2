import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the QrcodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-qrcode',
  templateUrl: 'qrcode.html',
})
export class QrcodePage {
  backgroundImage = 'assets/image/barcode.png';
  qrcode = null;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QrcodePage');
    this.createQrcode();
  }
  createQrcode() {
    this.qrcode = 'https://coffeehubserver.herokuapp.com/api/users/59ccb362167c2f1100d547e5';
  }
  closePage(){
    this.navCtrl.pop();
  }
}
