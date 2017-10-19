import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PaymentPincodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-payment-pincode',
  templateUrl: 'payment-pincode.html',
})
export class PaymentPincodePage {
  step = 1;
  pin = "";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentPincodePage');
  }
  
  confirm(step) {
    // alert("AA")
    this.step = 2;
  }
}
