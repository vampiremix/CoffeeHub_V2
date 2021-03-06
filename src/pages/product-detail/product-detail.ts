import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProductDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product-detail',
  templateUrl: 'product-detail.html',
})
export class ProductDetailPage {
  rate = 3.5;

  dataDescriptions = {

    "name": "Cappuccino",
    "image": [
      "./assets/image/coffee-1.jpg",
      "./assets/image/coffee-2.jpg",
      "./assets/image/coffee-3.jpg"
    ],
    "detail": "The origin and history of coffee dates back to the 10th century, and possibly earlier with a number of reports and legends surrounding its first use. The native (undomesticated) origin of coffee is thought to have been Ethiopia. The earliest substantiated evidence of either coffee drinking or knowledge of the coffee tree is from the 15th century, in the Sufi monasteries of Yemen.",
    "price": 300,
    "normalprice": 500,
    "discount": 10,
    "discounttype": "%"
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductDetailPage');
  }

}
