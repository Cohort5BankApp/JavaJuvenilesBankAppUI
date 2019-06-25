import { Component, OnInit } from '@angular/core';
import { WithdrawalService } from 'src/services/withdraw.service';
import { Withdrawal } from 'src/models/Withdraw';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AccountService } from 'src/services/account.service';


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
  withdrawalId: number;
  withdrawalId5:number;
  custId:number;

  constructor(private route: ActivatedRoute, private router: Router, private withdrawalService: WithdrawalService, private accountService:AccountService) { }

  delete() {
    this.withdrawal.id = this.withdrawalId5;
    return this.withdrawalService.delete(this.withdrawal.id).subscribe(data => {
      this.gotoAccountDetails();
    });
  }
  getOwner(){
    this.accountService.getOwner(this.withdrawal.account_id).subscribe(result =>{
      console.log(result)
      this.custId = result.data
    })
  }

  save() {
    this.getOwner();
    this.withdrawalService.save(this.withdrawal, this.withdrawal.account_id).subscribe();
    this.gotoAccountDetails();

  }

  update() {
    this.withdrawal.id = this.withdrawalId5;
    return this.withdrawalService.update(this.withdrawal.id, this.withdrawal).subscribe(data => {
      this.gotoAccountDetails();
    });
  }

  gotoAccountDetails() {
    this.router.navigate([`/accounts/${this.withdrawal.account_id}`]);
  }

  onSubmit() {
    console.log(this.withdrawal);
  }

  ngOnInit() {
    this.withdrawalLink = this.url.split('/');
    this.withdrawalId = +this.withdrawalLink[3];
    this.withdrawal.account_id = this.withdrawalId;
    this.withdrawalId5 = +this.withdrawalLink[5];
  

    if (this.withdrawalLink[4] === 'create-withdrawal') {
      this.button = false;
    } else {
      this.button = true;
    }
    console.log(this.withdrawal);
  }

}
