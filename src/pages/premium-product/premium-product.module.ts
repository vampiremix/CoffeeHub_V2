import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PremiumProductPage } from './premium-product';

@NgModule({
  declarations: [
    PremiumProductPage,
  ],
  imports: [
    IonicPageModule.forChild(PremiumProductPage),
  ],
})
export class PremiumProductPageModule {}
