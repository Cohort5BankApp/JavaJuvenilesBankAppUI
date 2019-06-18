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

  deposit: Deposit = {id: 0, type: '', transaction_date: '', status: '', account_id: 0, medium: '', amount: 0, description: ''};
  id: number;
  sub: Subscription;
  button: boolean;
  depositLink: any[];
  url: string = window.location.href;
  depositId: any;


  constructor(private route: ActivatedRoute, public router: Router, private depositService: DepositService) { }

  delete() {
    return this.depositService.delete(this.deposit.id).subscribe(data => {
      this.gotoAccountDetails();
    });
  }

  save() {
    return this.depositService.save(this.deposit.account_id, this.deposit).subscribe(data => {
      this.gotoAccountDetails();
    });
  }

  update() {
    return this.depositService.update(this.deposit.id, this.deposit).subscribe(data => {
      this.gotoAccountDetails();
    });
  }

  gotoAccountDetails() {
    this.router.navigate(['/accounts']);
  }

  onSubmit() {
    console.log(this.deposit);
  }

  //navigate to account detail page of deposit

  ngOnInit() {
    console.log(this.button);
    this.depositLink = this.url.split('/');
    this.depositId = this.depositLink[3];
    this.deposit.account_id = this.depositId;
    console.log(this.depositLink);
    console.log(this.deposit);

    if (this.depositLink[4] === 'create-deposit') {
      this.button = false;
    } else {
      this.button = true;
    }
    // this.depositId = this.url.split[1];
    // this.sub = this.route.params.subscribe(params => {
    //   const id = params['id'];
    //   if(id){
    //     this.depositService.getOne(id).subscribe((deposit: Deposit) => {
    //       if(deposit) {
    //         this.deposit = deposit;
    //       } else {
    //         console.log(`Deposit not found with id, '${id}' returning to list`);
    //         this.gotoAccountDetails();
    //       }
    //     });
    //   }
    // });
    console.log(this.deposit);
  }

}
