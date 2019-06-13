import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/services/account.service'
import { Account } from 'src/models/Account'

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {
  accounts: Array<Account>

  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.accountService.getAll().subscribe(data => {
      this.accounts = data;
    })
  }

  

}