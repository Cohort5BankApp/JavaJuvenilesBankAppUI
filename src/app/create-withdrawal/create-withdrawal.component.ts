import { Component, OnInit } from '@angular/core';
import { Withdrawal } from 'src/models/Withdraw';
import { WithdrawalService } from 'src/services/withdraw.service';
import { Subscription, from } from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-create-withdrawal',
  templateUrl: './create-withdrawal.component.html',
  styleUrls: ['./create-withdrawal.component.css']
})
export class CreateWithdrawalComponent implements OnInit {
  getWithdrawals: any;



withdrawal: Withdrawal = {id: 0, type: '', transaction_date: '', status: '', account_id: 0, medium: '', amount: 0, description: ''}
sub: Subscription;
  
 

constructor(private route: ActivatedRoute, private router: Router, private withdrawalService: WithdrawalService) {}

save() {
    return this.withdrawalService.save(this.withdrawal).subscribe(result => {
      this.gotoAccountDetails();
    });
  }
delete() {
    return this.withdrawalService.delete(this.withdrawal.id).subscribe(result => {
      this.gotoAccountDetails();
    });
  }
find() {
    return this.withdrawalService.find(this.withdrawal.id).subscribe(result => {
      this.gotoAccountDetails();
    });
  }

gotoAccountDetails() {
  this.router.navigate(['/accounts']);
}

ngOnInit(){
  this.sub = this.route.params.subscribe(params => {
    const id = params['id'];
    if (id) {
      this.withdrawalService.find(id).subscribe((withdrawal: Withdrawal) =>{
        if(withdrawal){
          this.withdrawal = withdrawal;
        } else {
          console.log(`Withdrawal not found with id, '${id}' returning to details`);
          this.gotoAccountDetails();
        }
      })
    }
  })
}
}

