import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RateCupcoinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rate-cupcoin',
  templateUrl: 'rate-cupcoin.html',
})
export class RateCupcoinPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RateCupcoinPage');
  }
  closePage(){
    // alert("ปิด");
     this.navCtrl.pop();
   }

}
