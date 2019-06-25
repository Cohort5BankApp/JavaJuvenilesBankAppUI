import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Subscription, Observable } from 'rxjs';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import { Customer } from 'src/models/Customer';
import { Message } from 'src/models/Message';
import { Account } from 'src/models/Account';

@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.css']
})
export class CustomerProfileComponent implements OnInit {

  accounts: Observable<Account[]>;
  message: Message;
  id: number;
  customer: Customer = {customer_id: 0, first_name: '', last_name: '', addresses: [{address_id:0, street_number: '', street_name: '', city: '', state:'', zip:''}]};
  constructor(
    private customerService: CustomerService, 
    private router: Router, 
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const customer_id = this.route.snapshot.paramMap.get('customer_id');
    this.id = +customer_id;
    this.customerService.getById(this.id).subscribe(data => { 
      data = <Message>data;
      this.customer = <Customer>data.data;
      console.log(this.customer);
    });
    this.customerService.getAccountByCustomer(this.id).subscribe(list =>{ 
      this.accounts = list.data;
      console.log(list);
  
    });
  }

}

