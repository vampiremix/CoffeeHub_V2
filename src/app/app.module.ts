import { NewProductPage } from '../pages/new-product/new-product';
import { ShopListPage } from '../pages/shop-list/shop-list';
import { SegmentButton } from 'ionic-angular/es2015';
import { LoginEmailPage } from '../pages/login-email/login-email';
import { ShopDetailPage } from '../pages/shop-detail/shop-detail';
import { ProductPage } from '../pages/product/product';
import { ProfilePage } from '../pages/profile/profile';
import { PremiumProductPage } from '../pages/premium-product/premium-product';
import { ReviewPage } from '../pages/review/review';
import { ShopLocationPage } from '../pages/shop-location/shop-location';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PromotionPage } from '../pages/promotion/promotion';
import { CouponPage } from '../pages/coupon/coupon';
import { PaymentPage } from '../pages/payment/payment';
import { OtherPage } from '../pages/other/other';
import { ActivityPage } from '../pages/activity/activity';
import { PaymentPincodePage } from '../pages/payment-pincode/payment-pincode';

import { NgxQRCodeModule } from 'ngx-qrcode2';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { QrcodePage } from '../pages/qrcode/qrcode';
import { LoginPage } from '../pages/login/login';
import { HttpModule } from '@angular/http';



@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    PromotionPage,
    CouponPage,
    PaymentPage,
    OtherPage,
    ActivityPage,
    PaymentPincodePage,
    ShopLocationPage,
    QrcodePage,
    LoginPage,
    ReviewPage,
    PremiumProductPage,
    ProfilePage,
    ProductPage,
    ShopDetailPage,
    LoginEmailPage,
    NewProductPage,
    ShopListPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp,{
      SegmentButton:'segment'
    }),
    NgxQRCodeModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    PromotionPage,
    CouponPage,
    PaymentPage,
    OtherPage,
    ActivityPage,
    PaymentPincodePage,
    ShopLocationPage,
    QrcodePage,
    LoginPage,
    ReviewPage,
    PremiumProductPage,
    ProfilePage,
    ProductPage,
    ShopDetailPage,
    LoginEmailPage,
    NewProductPage,
    ShopListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
