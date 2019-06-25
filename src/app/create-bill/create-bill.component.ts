import { Component, OnInit } from '@angular/core';
import { Bill } from '../../models/Bill';
import { ActivatedRoute, Router } from '@angular/router';
import { BillService } from '../../services/bill.service';
import { Subscription } from 'rxjs';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomerService } from '../../services/customer.service';
import { Customer } from '../../models/Customer';

@Component({
  selector: 'app-create-bill',
  templateUrl: './create-bill.component.html',
  styleUrls: ['./create-bill.component.css']
})

export class CreateBillComponent implements OnInit {
billLink: any[];
url: string = window.location.href;
billId: any;
billid5: number;


  type:string[] =['pending','cancelled','completed', 'recurring'];
  Bill:Bill;

  bills: Bill = {id: 0, status: '', payee: '', nickname: '', creation_date: '', payment_date: '', recurring_date: 0, upcoming_payment_date: '', payment_amount: 0, account_id: 0}; 
  sub: Subscription;
  

  constructor(private route: ActivatedRoute, private router: Router, private billService: BillService){
  }

 

onSubmit() { 
 this.billService.create(this.bills, this.bills.account_id).subscribe(result => {
  this.gotoAccountDetails();
  console.log(this.Bill)
});
}
update(){
  this.bills.id = this.billid5;
  this.billService.update(this.bills.id, this.bills.account_id, this.bills).subscribe(result =>{
    this.gotoAccountDetails();
  })
}
delete() {
this.bills.id = this.billid5;
this.billService.delete(this.bills.id).subscribe(result => {
  this.gotoAccountDetails();
});
}

gotoAccountDetails() {
  this.router.navigate([ '/accounts/'+ this.bills.account_id]);

}


ngOnInit() {
this.billLink = this.url.split('/');
console.log(this.billLink);
this.billId = this.billLink[3];
this.billid5 = this.billLink[5];
this.bills.account_id = this.billId;
console.log(this.bills)

}
}