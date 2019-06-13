import { Component, OnInit } from '@angular/core';
import { Customer } from '../../models/Customer';
import { CustomerService } from '../../services/customer.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customer-sign-up',
  templateUrl: './customer-sign-up.component.html',
  styleUrls: ['./customer-sign-up.component.css']
})
export class CustomerSignUpComponent implements OnInit {
customer: Customer;
sub: Subscription;


 
  constructor(private route: ActivatedRoute, private router: Router, private customerService: CustomerService ) { 

  }

  onSubmit(){
this.customerService.create(this.customer).subscribe(result => {this.goToCustomerProfile});
  }

  goToCustomerProfile(){
    this.router.navigate([''])
  }

  ngOnInit() {
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
