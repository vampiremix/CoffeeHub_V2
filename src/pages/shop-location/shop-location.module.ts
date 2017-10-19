import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShopLocationPage } from './shop-location';

@NgModule({
  declarations: [
    ShopLocationPage,
  ],
  imports: [
    IonicPageModule.forChild(ShopLocationPage),
  ],
})
export class ShopLocationPageModule {}
