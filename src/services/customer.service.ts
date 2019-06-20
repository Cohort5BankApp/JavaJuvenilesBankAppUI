import { Injectable } from '@angular/core';
import { Customer } from 'src/models/Customer';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient: HttpClient) { }

  public API = 'http://localhost:8080/customers/';

  // Create/customers
  create(customer: Customer) {
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
  // update /customers/{id}
  // Update needs an object
  update(id: number) {
    return this.httpClient.put(this.API + id, id);
  }
  // getBillsByCustomer/customers/{id}/bills
  getBills(id: number) {
    return this.httpClient.get(this.API + id + '/bills');
  }
  // getAccountByCustomer /customers/{id}/accounts
  getAccount(id: number) {
    return this.httpClient.get(this.API + id + '/accounts');
  }
}
