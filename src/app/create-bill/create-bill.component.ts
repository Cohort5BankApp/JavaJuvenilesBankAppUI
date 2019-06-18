import { Component, OnInit } from '@angular/core';
import { Bill } from '../../models/Bill';
import { ActivatedRoute, Router } from '@angular/router';
import { BillService } from '../../services/bill.service';
import { Subscription } from 'rxjs';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-bill',
  templateUrl: './create-bill.component.html',
  styleUrls: ['./create-bill.component.css']
})

export class CreateBillComponent implements OnInit {

  type:string[] =["Savings","Checking","Credit"];
  Bill:Bill;
  bills: Bill = {id: 0, type: '', payee: '', nickname: '', creation_date: '', payment_date: '', recurring_date: '', upcoming_payment_date: '', payment_amount: '', account_id: 0}; 
  sub: Subscription;

  constructor(private route: ActivatedRoute, private router: Router, private billService: BillService){
  }


onSubmit() {
return this.billService.create(this.bills, 1).subscribe(result => {
  this.gotoAccountDetails();
});
}

delete() {
return this.billService.delete(this.bills.id).subscribe(result => {
  this.gotoAccountDetails();
});
}

gotoAccountDetails() {
this.router.navigate(['/accounts']);
}

ngOnInit() {
this.sub = this.route.params.subscribe(params => {
  const id = params['id'];
  if(id){
    this.billService.find(id).subscribe((bill: Bill) => {
      if (bill) {
        this.bills = bill;
      } else {
        console.log(`Bill not found with id, '${id}' returning to details`);
        this.gotoAccountDetails();
      }
    });
  }
});
}
}