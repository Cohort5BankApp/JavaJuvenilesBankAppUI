import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/services/account.service'
import { Account } from 'src/models/Account'
import { Deposit } from 'src/models/Deposit'
import { Withdrawal } from 'src/models/Withdraw'
import { ActivatedRoute, Router} from '@angular/router'
import { Subscription } from 'rxjs'


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


  constructor(private accountService: AccountService, private route: ActivatedRoute, private router: Router) { }

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

  deleteaccount(){
    this.accountService.remove(this.account_id).subscribe(data => {
      this.account = data as any;
    }) 
  }
}

