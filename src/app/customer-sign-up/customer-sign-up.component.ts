import { Component, OnInit } from '@angular/core';
import { Customer } from '../../models/Customer';
import { CustomerService } from '../../services/customer.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Address } from 'src/models/Address';

@Component({
  selector: 'app-customer-sign-up',
  templateUrl: './customer-sign-up.component.html',
  styleUrls: ['./customer-sign-up.component.css']
})
export class CustomerSignUpComponent implements OnInit {
  address: Address = new Address();
//     {
//     address_id:0, 
//     street_number: '', 
//     street_name: '', 
//     city: '', 
//     state: '', 
//     zip: ''
// };
addresses:Address[];
  customer: Customer = {customer_id: 0, first_name: '', last_name: '', addresses: this.addresses};
  id : number;

sub: Subscription;


 constructor(private route: ActivatedRoute, private router: Router, private customerService: CustomerService ) { 

  }

  onSubmit(){
    this.addresses = [this.address];
    this.customer.addresses = this.addresses;
this.customerService.create(this.customer).subscribe(result => {this.goToCustomerProfile()});
  }

  update(){
    this.customer.customer_id = this.id;
    this.customerService.update(this.customer.customer_id, this.customer).subscribe();
    this.goToCustomerProfile();
  }

  goToCustomerProfile(){
    this.router.navigate(['/customers'])
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params =>{
       this.id = params['id'];
       console.log(this.id);
      if(this.id){
        this.customerService.getById(this.id).subscribe((customer: any)=>{
         if(customer){
           this.customer= customer;
         } else{
           console.log(`Customer '${this.id}' does not exist, returning to home page.`)
           this.goToCustomerProfile();
         }
        })
      }
    })
  }

}