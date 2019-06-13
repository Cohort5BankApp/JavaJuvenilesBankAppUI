import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/services/account.service'
import { Account } from 'src/models/Account'
import { DepositService } from 'src/services/deposit.service'
import { Deposit } from 'src/models/Deposit'
import { Withdrawal } from 'src/models/Withdraw'
import { WithdrawalService } from 'src/services/withdraw.service'

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {
account: Account;
deposit: Deposit;
withdrawal: Withdrawal;
account_id;
payee_id;


  constructor(private accountService: AccountService) { }

  ngOnInit() {
   this.accountService.get(this.account_id).subscribe(data => {
     this.account = data;
   })
   this.accountService.getDeposits(this.account_id).subscribe(data  => {
     this.account = data;
   })
   this.accountService.getWithdrawals(this.account_id).subscribe(data =>{
    this.account = data;
   })
  }

  //sign out button

}
