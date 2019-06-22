import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/services/customer.service';
import { Customer } from 'src/models/Customer';
import { ActivatedRoute, Router } from '@angular/router';
import { Address } from 'src/models/Address';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  // customer: Customer = {id: 0, first_name: '', last_name: '', addresses: { 
  //   address_id: 0, street_number: '', street_name: '', city: '', state: '', zip: ''}};

  customer:Customer = new Customer();
  customers: Observable<Customer[]>;
  address: Observable<Address[]>;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private customerService: CustomerService) { }

  ngOnInit() {
    this.customerService.getAll().subscribe(list => {
      console.log(list);
      this.customers = list.data;
    });

  }

  onSubmit() {
    console.log(this.customers);
  }

  Click(id: number) {
    this.router.navigate([`${id}/profile`]);
  }

}
