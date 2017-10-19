import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
})
export class ProductPage {
  tabs: number = 0;
  pet = "dinks";
  @ViewChild('myElement') element: ElementRef;
  private dataListX: Array<any> = [];

  product = 
  {
    "dinks": [
        {
            "name": "เมลโล่มอคค่า (Mellow Mocha)",
            "image": "https://img.kapook.com/u/2016/surauch/cook1/coffee1_1.jpg",
            "price":"195"
        },
        {
            "name": "อัฟโฟกาโต (Affogato)",
            "image": "https://img.kapook.com/u/2016/surauch/cOOK/coffee2.jpg",
            "price":"56"
        },
        {
            "name": "กาแฟนมฟองละมุน",
            "image": "https://img.kapook.com/u/2016/surauch/cOOK/coffee7.jpg",
            "price":"100"
        },
        {
            "name": "กาแฟเย็นกลิ่นซินนามอน",
            "image": "https://img.kapook.com/u/2016/surauch/cOOK/coffee10.jpg",
            "price":"89"
        },
        {
            "name": "กาแฟเย็นเวียดนาม",
            "image": "https://img.kapook.com/u/2016/surauch/cOOK/coffee11.jpg",
            "price":"79"
        },
        {
            "name": "เมลโล่มอคค่า (Mellow Mocha)",
            "image": "https://img.kapook.com/u/2016/surauch/cook1/coffee1_1.jpg",
            "price":"79"
        },
        {
            "name": "อัฟโฟกาโต (Affogato)",
            "image": "https://img.kapook.com/u/2016/surauch/cOOK/coffee2.jpg",
            "price":"79"
        },
        {
            "name": "กาแฟนมฟองละมุน",
            "image": "https://img.kapook.com/u/2016/surauch/cOOK/coffee7.jpg",
            "price":"79"
        },
        {
            "name": "กาแฟเย็นกลิ่นซินนามอน",
            "image": "https://img.kapook.com/u/2016/surauch/cOOK/coffee10.jpg",
            "price":"79"
        },
        {
            "name": "กาแฟเย็นเวียดนาม",
            "image": "https://img.kapook.com/u/2016/surauch/cOOK/coffee11.jpg",
            "price":"79"
        }
    ],
    "desserts": [
        {
            "name": "คุกกี้",
            "image": "http://www.coffeefavour.com/wp-content/uploads/2016/05/2-cookie-Custom.jpg",
            "price":"50"
        },
        {
            "name": "วาฟเฟิล",
            "image": "http://www.coffeefavour.com/wp-content/uploads/2016/05/3-kipacard.kz-waffle-Custom.jpg",
            "price":"99"
        },
        {
            "name": "มัฟฟิน",
            "image": "http://www.coffeefavour.com/wp-content/uploads/2016/05/4-siera-mafini-44745940-Custom.jpg",
            "price":"159"
        },
        {
            "name": "แซนวิช",
            "image": "http://www.coffeefavour.com/wp-content/uploads/2016/05/5-sandwich-Custom.jpg",
            "price":"59"
        },
        {
            "name": "เค้ก",
            "image": "http://www.coffeefavour.com/wp-content/uploads/2016/05/6-come_and_have_coffee_cake-Custom.jpg",
            "price":"89"
        }
    ],
    "foods": [
        {
            "name": "ซี่โครงหมูบาร์บีคิว",
            "image": "https://www.1112.com/images/products/maindish/website/itm114002.png",
            "price":"88"
        },
        {
            "name": "ปีกไก่ บาร์บีคิว 10 ชิ้น",
            "image": "https://www.1112.com/images/products/maindish/website/itm116539.png",
            "price":"36"
        },
        {
            "name": "ชิกเก้นสติ๊กส์",
            "image": "https://www.1112.com/images/products/maindish/website/itm116520.png",
            "price":"200"
        },
        {
            "name": "ปีกไก่ทอด สไตล์เกาหลี",
            "image": "https://www.1112.com/images/products/maindish/website/itm116561.png",
            "price":"300"
        },
        {
            "name": "ชิกเก้น นักเก็ตส์ พร้อมน้ำจิ้มไก่",
            "image": "https://www.1112.com/images/products/appetizer/website/itm116570.png",
            "price":"176"
        }
    ]
}
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    
  }

}
