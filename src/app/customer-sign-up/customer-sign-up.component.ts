import { Component, OnInit } from '@angular/core';
import { Customer } from '../../models/Customer';
import { CustomerService } from '../../services/customer.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-customer-sign-up',
  templateUrl: './customer-sign-up.component.html',
  styleUrls: ['./customer-sign-up.component.css']
})
export class CustomerSignUpComponent implements OnInit {
customer: Customer = {id: 0, first_name: '', last_name: '', addresses: {address_id:0, street_name: '', street_number: '', city: '', state: '', zip: ''}}
sub: Subscription;


 constructor(private route: ActivatedRoute, private router: Router, private customerService: CustomerService ) { 

  }

  onSubmit(){
    console.log(this.customer)
this.customerService.create(this.customer).subscribe(result => {this.goToCustomerProfile});
  }

  

  goToCustomerProfile(){
    this.router.navigate([':customer_id/profile'])
  }

  ngOnInit() {
    this.customerService.getAll().subscribe(data => 
      {
        console.log(data)
      }
      ) 
    this.sub = this.route.params.subscribe(params =>{
      const id = params['id'];
      if(id){
        this.customerService.getById(id).subscribe((customer: any)=>{
         if(customer){
           this.customer= customer;
         } else{
           console.log(`Customer '${id}' does not exist, returning to home page.`)
           this.goToCustomerProfile();
         }
        })
      }
    })
  }

}