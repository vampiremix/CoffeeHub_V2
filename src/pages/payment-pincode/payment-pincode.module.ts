import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaymentPincodePage } from './payment-pincode';

@NgModule({
  declarations: [
    PaymentPincodePage,
  ],
  imports: [
    IonicPageModule.forChild(PaymentPincodePage),
  ],
})
export class PaymentPincodePageModule {}
