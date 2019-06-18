import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import {Customer } from 'src/models/Customer'
import { Subscription } from 'rxjs';
import { Address } from 'src/models/Address';


@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.css'],
})
export class CustomerProfileComponent implements OnInit {

  customer:Customer = {id:0,first_name:"",last_name:"",address:{address_id:0,street_number:"",street_name:"",city:"",state:"",zip:""}}
  accounts: {Account}[];
  

  constructor(private customerService:CustomerService,
    ) { }

  ngOnInit() {
    // this.customerService.findAll().subscribe(data => {console.log(
    //   this.accounts = data)
    // });
  }

}
