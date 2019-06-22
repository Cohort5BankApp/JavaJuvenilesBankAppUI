import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Subscription, Observable } from 'rxjs';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import { Customer } from 'src/models/Customer';
import { AccountService } from 'src/services/account.service';
import { Account } from 'src/models/Account';

@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.css']
})
export class CustomerProfileComponent implements OnInit {
  
customerid:number;
accounts:Observable<Account[]>;

  constructor(private customerService:CustomerService, private router:Router){
  }

ngOnInit(){
  let url= window.location.href;
  let urlSplit= url.split('/');
  let splitUrl = urlSplit[3];
  this.customerid = +splitUrl;

  this.customerService.getAccountByCustomer(this.customerid).subscribe(list => {
    this.accounts = list.data;
  })
  }
  createAccount(){
    this.router.navigate([this.customerid + '/create-account'])
  }
  updateAccount(id:number){
    this.router.navigate([this.customerid + '/update-account/' +id])
  }
}


