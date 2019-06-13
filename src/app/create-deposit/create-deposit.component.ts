import { Component, OnInit } from '@angular/core';
import { DepositService } from 'src/services/deposit.service';
import { Deposit } from 'src/models/Deposit';

@Component({
  selector: 'app-create-deposit',
  templateUrl: './create-deposit.component.html',
  styleUrls: ['./create-deposit.component.css']
})
export class CreateDepositComponent implements OnInit {

  deposit: any;
  id: number;

  constructor(private depositService: DepositService) { }

  getOne() {
    return this.depositService.getOne(this.deposit).subscribe(data => {
      this.deposit
    });
  }

  save() {
    return this.depositService.save(this.deposit).subscribe(data => {
      this.deposit
    });
  }

  gotoUserList() {

  }

  ngOnInit() {
    
  }

}
