import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message } from 'src/models/Message';

@Injectable({providedIn: 'root'})
export class AccountService {
  public_API = 'http://bankingapplicationspringboot-env-1.k2hcfmgmya.us-east-2.elasticbeanstalk.com'

  constructor(private http: HttpClient) { 

  }
  // get account by id method

  get (id: number): Observable<any>{
    return this.http.get(this.public_API + `/accounts/${id}`);
  }

  //get all accounts method

  getAll(): Observable<any>{
    return this.http.get(this.public_API + '/accounts');
  }

  //create an account method

  save(account: Object, customer_id: number): Observable<Object>{
    return this.http.post(this.public_API + `/customers/${customer_id}/accounts`, account);
  }

  //get an account owner method

  getOwner(id: number): Observable<any>{
    return this.http.get(this.public_API + `/accounts/${id}/customer`);
  }

  //get bills by account method

  getBills(id: number): Observable<any>{
    return this.http.get(this.public_API + `/accounts/${id}/bills`);
  }

  //get withdrawals by account method

  getWithdrawals(id: number): Observable<any>{
    return this.http.get(this.public_API + `/accounts/${id}/withdrawals`);
  }

  //get deposits by account method
  
  getDeposits(id: number): Observable<any>{
    return this.http.get(this.public_API + `/accounts/${id}/deposits`);
  }

  //update an account method
  
  update(id: number, value: any): Observable<Object> {
    return this.http.put(this.public_API + `accounts/${id}`, value);
  }

  //delete an account method

  remove(id: number) {
    return this.http.delete(this.public_API + `/accounts/${id}`);
  }
}
