import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ShopDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-shop-detail',
  templateUrl: 'shop-detail.html',
})
export class ShopDetailPage {
  public shopImage = [];
  public rate = 5;
  public reviewPoint = 0;
  public dataPost = {};
  public isHide: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.shopImage = [{
      image: './assets/image/promotion_pic_new.png'
    },
    { image: './assets/image/promotion_pic_new.png' },
    { image: './assets/image/promotion_pic_new.png' }
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShopDetailPage');
  }

  getPoint(review) {
    this.reviewPoint = review;
    console.log(this.reviewPoint);
  }

  saveDataPost(post) {
    this.dataPost = {
      point: this.reviewPoint,
      comment: post
    }
    console.log(this.dataPost);
    this.isHide = !this.isHide
  }

}
