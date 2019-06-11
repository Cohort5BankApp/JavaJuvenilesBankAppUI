import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';
import { CreateDepositComponent } from './create-deposit/create-deposit.component';
import { CustomerSignUpComponent } from './customer-sign-up/customer-sign-up.component';
import { CreateBillComponent } from './create-bill/create-bill.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { CreateWithdrawalComponent } from './create-withdrawal/create-withdrawal.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerProfileComponent,
    CreateDepositComponent,
    CustomerSignUpComponent,
    CreateBillComponent,
    CreateAccountComponent,
    AccountDetailsComponent,
    CreateWithdrawalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
