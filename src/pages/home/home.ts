import { NewProductPage } from '../new-product/new-product';
import { PremiumProductPage } from '../premium-product/premium-product';
import { ProductPage } from '../product/product';
import { PromotionPage } from '../promotion/promotion';
import { ShopLocationPage } from '../shop-location/shop-location';
import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { ActivityPage } from '../activity/activity';
import { QrcodePage } from '../qrcode/qrcode';
import { ProfilePage } from '../profile/profile';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private dataListX: Array<any> = [];
  private promotionData: Array<any> = [];
  private promotionData2: Array<any> = [];
  private shopData: Array<any> = [];
  private shopData2: Array<any> = [];
  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
    this.dataListX = [{
      link: ShopLocationPage,
      image: './assets/image/SL4.jpg'
    }, {
      link: ProductPage,
      image: './assets/image/SL5.jpg'
    }, {
      link: PremiumProductPage,
      image: './assets/image/SL3.jpg'
    }, {
      link: NewProductPage,
      image: './assets/image/SL.jpg'
    }];

    this.promotionData = [{
      image: './assets/image/promotion/promotion.jpg'
    }, {
      image: './assets/image/promotion/promotion2.jpg'
    }, {
      image: './assets/image/promotion/promotion3.jpg'
    }, {
      image: './assets/image/promotion/promotion4.jpg'
    },];

    this.promotionData2 = [{
      image: './assets/image/promotion/promotion5.jpg'
    }, {
      image: './assets/image/promotion/promotion6.jpg'
    }, {
      image: './assets/image/promotion/promotion7.jpg'
    }, {
      image: './assets/image/promotion/promotion8.jpg'
    }];
    this.shopData = [{
      image: './assets/image/shop/nameshop.jpg'
    }, {
      image: './assets/image/shop/nameshop2.jpg'
    }, {
      image: './assets/image/shop/nameshop3.jpg'
    }, {
      image: './assets/image/shop/nameshop4.jpg'
    },];

    this.shopData2 = [{
      image: './assets/image/shop/nameshop5.jpg'
    }, {
      image: './assets/image/shop/nameshop6.jpg'
    }, {
      image: './assets/image/shop/nameshop7.jpg'
    }, {
      image: './assets/image/shop/nameshop8.jpg'
    }];

  }

  popupActivities() {
    const profileModal = this.modalCtrl.create(ActivityPage, { userId: 8675309 });
    profileModal.present();
  }
  gotoProfile() {
    this.navCtrl.push(ProfilePage);
  }

  location() {
    this.navCtrl.push(ShopLocationPage);
  }
  gotoQR() {
    this.navCtrl.push(QrcodePage);
  }
  gotoPromotion() {

    this.navCtrl.push(PromotionPage);
  }
  gotoPage(Page) {
    this.navCtrl.push(Page);
  }
  gotoShopList(){

  }
}
