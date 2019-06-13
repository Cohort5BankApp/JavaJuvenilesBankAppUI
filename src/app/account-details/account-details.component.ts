import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/services/account.service'
import { Account } from 'src/models/Account'
import { Deposit } from 'src/models/Deposit'
import { Withdrawal } from 'src/models/Withdraw'


@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {
account: Account;
deposits: Array<Deposit>;
withdrawals: Array<Withdrawal>;
account_id: number;


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

  

}

