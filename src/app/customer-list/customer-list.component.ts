import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/services/customer.service';
import { Customer } from 'src/models/Customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers: Customer[];

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.customerService.getAll().subscribe(data => {
      this.customers = data;
    });
  }

}
