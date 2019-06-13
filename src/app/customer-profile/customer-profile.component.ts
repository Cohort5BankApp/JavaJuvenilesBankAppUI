import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CustomerService } from 'src/services/customer.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.css']
})
export class CustomerProfileComponent implements OnInit {

  constructor(
    private customerService: CustomerService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    
  }



}
