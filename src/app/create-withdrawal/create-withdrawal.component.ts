import { Component, OnInit } from '@angular/core';
import { WithdrawalService } from 'src/services/withdraw.service';
import { Withdrawal } from 'src/models/Withdraw';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-create-withdrawal',
  templateUrl: './create-withdrawal.component.html',
  styleUrls: ['./create-withdrawal.component.css']
})
export class CreateWithdrawalComponent implements OnInit {

  withdrawal: Withdrawal = {id: 0, type: '', transaction_date: '', status: '', account_id: 0, medium: '', amount: 0, description: ''};
  id: number;
  //sub: Subscription;
  button: boolean;
  withdrawalLink: any[];
  url: string = window.location.href;
  withdrawalId: any;

  constructor(private route: ActivatedRoute, private router: Router, private withdrawalService: WithdrawalService) { }

  delete() {
    return this.withdrawalService.delete(this.withdrawal.id).subscribe(data => {
      this.gotoAccountDetails();
    });
  }

  save() {
    return this.withdrawalService.save(this.withdrawal, this.withdrawal.account_id).subscribe(data => {
      this.gotoAccountDetails();
    });
  }

  update() {
    return this.withdrawalService.update(this.withdrawal.id, this.withdrawal).subscribe(data => {
      this.gotoAccountDetails();
    });
  }

  gotoAccountDetails() {
    this.router.navigate([`${this.withdrawalId}/accounts/${this.withdrawal.account_id}`]);
  }

  onSubmit() {
    console.log(this.withdrawal);
  }

  ngOnInit() {
    console.log(this.button);
    this.withdrawalLink = this.url.split('/');
    this.withdrawalId = this.withdrawalLink[3];
    this.withdrawal.account_id = this.withdrawalId;
    console.log(this.withdrawalLink);
    console.log(this.withdrawal);

    if (this.withdrawalLink[4] === 'create-withdrawal') {
      this.button = false;
    } else {
      this.button = true;
    }
    console.log(this.withdrawal);
  }

}
