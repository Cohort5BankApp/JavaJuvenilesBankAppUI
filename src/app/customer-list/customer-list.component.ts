import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/services/customer.service';
import { Customer } from 'src/models/Customer';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customer: Customer = {id: 0, first_name: '', last_name: '', address: {
    address_id: 0, street_number: '', street_name: '', city: '', state: '', zip: ''}};

  customers: Customer[];

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.customerService.getAll().subscribe(data => {
      this.customers = data;
    });
    console.log(this.customers);
  }

}
