import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class AccountService {
  public_API = 'http://localhost:8080/accounts'

  constructor(private http: HttpClient) { 

  }
  // get account by id method

  get (id: number): Observable<any>{
    return this.http.get(`http://localhost:8080/accounts/${id}`);
  }

  //get all accounts method

  getAll(): Observable<any>{
    return this.http.get(this.public_API);
  }

  //create an account method

  save(account: Object): Observable<Object>{
    return this.http.post(`http://localhost:8080/customers/${id}/accounts`, account)
  }

  //get an account owner method

  getOwner(id: number): Observable<any>{
    return this.http.get(`http://localhost:8080/accounts/${id}/customer`);
  }

  //get bills by account method

  getBills(id: number): Observable<any>{
    return this.http.get(`http://localhost:8080/accounts/${id}/bills`);
  }

  //get withdrawals by account method

  getWithdrawals(id: number): Observable<any>{
    return this.http.get(`http://localhost:8080/accounts/${id}/withdrawals`);
  }

  //get deposits by account method
  
  getDeposits(id: number): Observable<any>{
    return this.http.get(`http://localhost:8080/accounts/${id}/deposits`);
  }

  //update an account method
  
  update(id: number, value: any): Observable<Object> {
    return this.http.put(`http://localhost:8080/accounts/${id}`, value);
  }

  //delete an account method

  remove(id: number) {
    return this.http.delete(`http://localhost:8080/accounts/${id}`);
  }
}