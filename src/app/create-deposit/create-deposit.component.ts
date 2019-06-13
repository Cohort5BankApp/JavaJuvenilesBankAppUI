import { Component, OnInit } from '@angular/core';
import { DepositService } from 'src/services/deposit.service';
import { Deposit } from 'src/models/Deposit';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-create-deposit',
  templateUrl: './create-deposit.component.html',
  styleUrls: ['./create-deposit.component.css']
})
export class CreateDepositComponent implements OnInit {

  deposit: Deposit = {id: 0, type: '', transaction_date: '', status: '', payee_id: 0, medium: '', amount: 0, description: ''};
  id: number;
  sub: Subscription;

  constructor(private route: ActivatedRoute, private router: Router, private depositService: DepositService) { }

  delete() {
    return this.depositService.delete(this.deposit.id).subscribe(data => {
      this.gotoAccountDetails();
    });
  }

  save() {
    return this.depositService.save(this.deposit).subscribe(data => {
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
        this.depositService.getOne(id).subscribe((deposit: Deposit) => {
          if(deposit) {
            this.deposit = deposit;
          } else {
            console.log(`Deposit not found with id, '${id}' returning to list`);
            this.gotoAccountDetails();
          }
        });
      }
    });
  }

}
