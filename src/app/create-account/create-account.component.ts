import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from 'src/services/account.service';
import { FormsModule } from '@angular/forms';
import { Message } from 'src/models/Message';
import {Account } from 'src/models/Account';


@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  type:string[] =["Savings","Checking","Credit"];
  Account: Account;
  accounts:Account ={account_id: 0, nickname:"", rewards:0,balance:0,customer_id:0,type:""};
  constructor(private route:ActivatedRoute, private router:Router, private service:AccountService) {
   }

  ngOnInit() {
  this.service.getAll().subscribe(data => 
    console.log(data))
  }
  onSubmit(){
    let id :number = +this.accounts.account_id;
    this.service.save(this.accounts, id).subscribe(result =>{
      this.gotoAccountList();
    }, error => console.error(error));
    console.log(this.Account);
    }
    
  gotoAccountList(){

  }


}
