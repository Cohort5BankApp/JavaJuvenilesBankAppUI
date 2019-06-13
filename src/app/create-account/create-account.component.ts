import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from 'src/services/account.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  type:string[] =["Savings","Checking","Credit"];
  Account: Account;
  constructor(private route:ActivatedRoute, private router:Router, private service:AccountService) {
    console.log(service.getAll().subscribe());
   }

  ngOnInit() {
  }
  onSubmit(){
    let id :number = +this.Account.id;
    this.service.save(this.Account, id).subscribe(result =>{
      this.gotoAccountList();
    }, error => console.error(error));
    console.log(this.Account);
    }
    
  gotoAccountList(){

  }


}
