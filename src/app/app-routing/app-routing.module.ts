import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateAccountComponent } from 'src/app/create-account/create-account.component';
import { CreateBillComponent } from 'src/app/create-bill/create-bill.component';
import { CreateWithdrawalComponent } from 'src/app/create-withdrawal/create-withdrawal.component';
import { CreateDepositComponent } from 'src/app/create-deposit/create-deposit.component';
import { CustomerSignUpComponent } from 'src/app/customer-sign-up/customer-sign-up.component';
import { CustomerProfileComponent } from 'src/app/customer-profile/customer-profile.component';
import { AccountDetailsComponent } from 'src/app/account-details/account-details.component';

const routes: Routes = [
{path: ':customer_id/create-account', component: CreateAccountComponent},
{path: ':account_id/update-account', component: CreateAccountComponent},
{path: ':account_id/create-bill', component: CreateBillComponent},
{path: ':account_id/update-bill', component: CreateBillComponent},
{path: ':account_id/create-withdrawal', component: CreateWithdrawalComponent},
{path: ':account_id/update-withdrawal', component: CreateWithdrawalComponent},
{path: ':account_id/create-deposit', component: CreateDepositComponent},
{path: ':account-id/update-deposit', component: CreateDepositComponent},
{path: 'test', component: CustomerSignUpComponent},
{path: ':customer-id/update-customer', component: CustomerSignUpComponent},
{path: ':customer_id/profile', component: CustomerProfileComponent},
{path: ':customer_id/accounts/:account_id', component: AccountDetailsComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}