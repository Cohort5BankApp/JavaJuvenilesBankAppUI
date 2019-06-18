import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Customer } from 'src/models/Customer';

@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.css']
})
export class CustomerProfileComponent implements OnInit {

  accounts: Account[];
  customer:Customer;

  constructor(private customerService:CustomerService,
    private activatedRoute:ActivatedRoute,
    private routeLink:RouterLink,
    private subscription:Subscription
    ) { }

  ngOnInit() {
    this.customerService.getAccountByCustomer(this.customer.id).subscribe(data => {
      console.log(data)
      this.accounts = data as any;
    })

  }

  displayCustomer(){
    this.customerService.getById
  }



}
