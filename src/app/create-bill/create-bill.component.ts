import { Component, OnInit } from '@angular/core';
import { Bill } from '../../models/Bill';
import { ActivatedRoute, Router } from '@angular/router';
import { BillService } from '../../services/bill.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-create-bill',
  templateUrl: './create-bill.component.html',
  styleUrls: ['./create-bill.component.css']
})

export class CreateBillComponent implements OnInit {

  bill: Bill = {id: 0, type: '', payee: '', nickname: '', creation_date: '', payment_date: '', recurring_date: 0, upcoming_payment_date: '', payment_amount: 0, account_id: 0}; 
  sub: Subscription;

  constructor(private route: ActivatedRoute, private router: Router, private billService: BillService){
  }


save() {
return this.billService.create(this.bill).subscribe(result => {
  this.gotoAccountDeails();
})
}

delete() {
return this.billService.delete(this.bill.id).subscribe(result => {
  this.gotoAccountDeails();
})
}

gotoAccountDeails() {
this.router.navigate(['/account']);
}

ngOnInit() {
this.sub = this.route.params.subscribe(params => {
  const id = params['id'];
  if(id){
    this.billService.find(id).subscribe((bill: Bill) => {
      if (bill) {
        this.bill = bill;
      } else {
        console.log(`Bill not found with id, '${id}' returning to details`);
        this.gotoAccountDeails();
      }
    })
  }
})
}
}