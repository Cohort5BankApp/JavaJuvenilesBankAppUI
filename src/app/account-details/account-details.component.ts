import { Component, OnInit } from '@angular/core';
import { Bill } from 'src/models/Bill';
import { Withdrawal } from 'src/models/Withdraw';
import { Deposit } from 'src/models/Deposit';
import { BillService } from 'src/services/bill.service';
import { WithdrawalService } from 'src/services/withdraw.service';
import { DepositService } from 'src/services/deposit.service';
import { AccountService } from 'src/services/account.service';
import { Observable } from 'rxjs';
import { CustomerService } from 'src/services/customer.service';
import { Customer } from 'src/models/Customer';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {
  account_id:number;
  customer_id:number;
  bill:Observable<Bill[]>;
  deposit:Observable<Deposit[]>;
  withdraw:Observable<Withdrawal[]>;
  cust:Observable<Customer[]>;

  constructor(private billService:BillService, private withdrawService:WithdrawalService, private depositService:DepositService, private accountService:AccountService, private location:Location, private router:Router, private route:ActivatedRoute) {
   }

  ngOnInit() {
    let url = window.location.href;
    let p = url.split("/")
    this.account_id = +p[4];
    this.accountService.getBills(this.account_id).subscribe(list => {
      this.bill =list.data;
    });
    this.accountService.getDeposits(this.account_id).subscribe(list => {
      this.deposit = list.data;
    });
    this.accountService.getWithdrawals(this.account_id).subscribe(list =>{
      this.withdraw =list.data;
    })

  }
  public back(){
    this.location.back();
  }
  public navigateTo(id:number,type:String){
    if(type =='bill'){
    this.router.navigate([this.account_id +'/update-bill/' +id]);
    } else if(type =='deposit'){
    this.router.navigate([this.account_id + '/update-deposit/' +id]);
    } else if(type =='withdraw'){
    this.router.navigate([this.account_id + '/update-withdrawal' +id]);
    }
    console.log(type);
  }
  public navigateBill(id:number){
    this.router.navigate([this.account_id +'/update-bill/' + id]);
  }
  public navigateDeposit(id:number){
    this.router.navigate([this.account_id +'/update-deposit/' + id]);
  }
  public navigateWithdraw(id:number){
    this.router.navigate([this.account_id +'/update-withdrawal/' + id]);
  }
  public createBill(){
    this.router.navigate([this.account_id+ '/create-bill']);
  }
  public createDeposit(){
    this.router.navigate([this.account_id+'/create-deposit']);
  }
  public createWithdrawal(){
    this.router.navigate([this.account_id+ '/create-withdrawal'])
  }


}
