import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { Customer } from '../models/Customer';
=======
import { Customer } from 'src/models/Customer';
>>>>>>> 66328a4855ba798db68415c45112c90d2cce722b
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient:HttpClient) { }

  public API = 'http://localhost:8080/customers/';

<<<<<<< HEAD
  //Create /customers
  create(customer:Object){
=======
  // Create/customers
  create(customer: Customer) {
>>>>>>> 66328a4855ba798db68415c45112c90d2cce722b
    return this.httpClient.post(this.API, customer);
  }
  // getAll /customers
  getAll(): Observable<any> {
    return this.httpClient.get(this.API);
  }
  // getCustomerById /customers/{id}
  getById(id: number): Observable<any> {
    return this.httpClient.get(this.API + id);
  }
  //update /customers/{id}
  // Update needs an object 
  update(id:number,customer:Customer){
    return this.httpClient.put(this.API + id, customer)
  }
  // getBillsByCustomer/customers/{id}/bills
  getBills(id: number) {
    return this.httpClient.get(this.API + id + '/bills');
  }
<<<<<<< HEAD
  //getAccountByCustomer /customers/{id}/accounts
  getAccountByCustomer(id:number){
    return this.httpClient.get(this.API + id + '/accounts')
=======
  // getAccountByCustomer /customers/{id}/accounts
  getAccount(id: number) {
    return this.httpClient.get(this.API + id + '/accounts');
>>>>>>> 66328a4855ba798db68415c45112c90d2cce722b
  }
}
