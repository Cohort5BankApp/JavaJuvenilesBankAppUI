import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/services/account.service'
import { Account } from 'src/models/Account'

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {
account: Account;
account_id;

  constructor(private accountService: AccountService) { }

  ngOnInit() {
   this.accountService.get(this.account_id).subscribe(data => {
     this.account = data;
   })
  }

  //sign out button, deposits and withdrawals on init

}
