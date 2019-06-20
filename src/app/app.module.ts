import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { CreateBillComponent } from './create-bill/create-bill.component'; 
import { CreateWithdrawalComponent } from './create-withdrawal/create-withdrawal.component'; 
import { CreateDepositComponent } from './create-deposit/create-deposit.component';
import { CustomerSignUpComponent } from './customer-sign-up/customer-sign-up.component';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component'; 
import { AccountDetailsComponent } from './account-details/account-details.component';
import { AccountService } from 'src/services/account.service';
import { BillService } from 'src/services/bill.service';
import { CustomerService } from 'src/services/customer.service';
import { DepositService } from 'src/services/deposit.service';
import { WithdrawalService } from 'src/services/withdraw.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { FormsModule } from '@angular/forms'; 
import { TestComponent } from './test/test.component';
import { SignInComponent } from './sign-in/sign-in.component';




@NgModule({
  declarations: [
    AppComponent,
    CreateAccountComponent,
    CreateWithdrawalComponent,
    CreateDepositComponent,
    CustomerSignUpComponent,
    CreateBillComponent,
    CustomerProfileComponent,
    AccountDetailsComponent,
    TestComponent,
    SignInComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule, 
    FormsModule

  ],
  providers: [
    AccountService,
    BillService,
    CustomerService,
    DepositService,
    WithdrawalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
