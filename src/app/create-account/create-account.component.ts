import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, DefaultUrlSerializer } from '@angular/router';
import { AccountService } from 'src/services/account.service';
import {Account } from 'src/models/Account';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  Type:string[] =["Savings","Checking","Credit"];
  allAccounts:Account[];
  accounts:Account ={account_id: 0, nickname:"", rewards:0,balance:0,customer_id:0,type:""};
  update:boolean;
  urlA;
  UrlId;
  url:String;
  accountU:string;


  constructor(private route:ActivatedRoute, private router:Router, private service:AccountService) {

   }
   

  ngOnInit() {

    //gets all accounts
    this.service.getAll().subscribe(data => 
      this.allAccounts = data.data );

      if(this.accounts.customer_id===0){
        this.update= false;
      } else{
        this.update= true;
      }

      this.url= window.location.href;
      this.urlA = this.url.split("/");
      this.UrlId = this.urlA[3];
      this.accounts.customer_id = this.UrlId;
    }

  

  save(){
    let id :number = this.UrlId;
    console.log(this.accounts)
    this.service.save(this.accounts, id).subscribe(result =>{
      this.gotoAccountList();
    }, error => console.error(error));
    }
  
    //route to the customer profile
  gotoAccountList(){
    this.router.navigate([this.UrlId+ "/profile"])
  }

  //update the account
  updates(){
    return this.service.update(this.accounts.account_id,this.accounts).subscribe(result =>{
      this.gotoAccountList();
    }, error => console.error(error));
  }

  //delete the account
  delete(){
    console.log(this.accounts)
    this.service.remove(this.accounts.account_id).subscribe(result =>{
      this.gotoAccountList()}, error => console.error(error));
  }

}
