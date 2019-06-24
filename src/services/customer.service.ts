import { Injectable } from '@angular/core';
import { Customer } from 'src/models/Customer';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient:HttpClient) { }

  //public API = 'http://localhost:8080/customers/';
  public API = 'http://bankingapplicationspringboot-env-1.k2hcfmgmya.us-east-2.elasticbeanstalk.com'

  // Create/customers
  create(customer: Customer) {
    return this.httpClient.post(this.API + '/customers', customer);
  }
  // getAll /customers
  getAll(): Observable<any> {
    return this.httpClient.get(this.API + '/customers/');
  }
  // getCustomerById /customers/{id}
  getById(id: number): Observable<any> {
    return this.httpClient.get(this.API + '/customers/' + id);
  }
  //update /customers/{id}
  // Update needs an object 
  update(id:number,customer:Customer){
    return this.httpClient.put(this.API + '/customers/' + id, customer)
  }
  // getBillsByCustomer/customers/{id}/bills
  getBills(id: number) {
    return this.httpClient.get(this.API + '/customers/' + id + '/bills');
  }
  // getAccountByCustomer /customers/{id}/accounts
  getAccount(id: number) {
    return this.httpClient.get(this.API + 'customers' + id + '/accounts');
  }
}
