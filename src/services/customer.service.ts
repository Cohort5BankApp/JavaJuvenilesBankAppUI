import { Injectable } from '@angular/core';
import { Customer } from 'src/models/Customer';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

<<<<<<< HEAD
  constructor(private httpClient: HttpClient) { }
=======
  constructor(private httpClient:HttpClient) { }
>>>>>>> fda3bc707512f30e14d34b03ee6c1517bb8e0142

  public API = 'http://localhost:8080/customers/';

  // Create/customers
  create(customer: Customer) {
    return this.httpClient.post(this.API, customer);
  }
<<<<<<< HEAD
  // getAll /customers
  getAll(): Observable<any> {
    return this.httpClient.get(this.API);
=======
  //getAll /customers
  getAll(): Observable<any>{
    return this.httpClient.get<Customer[]>(this.API)
>>>>>>> fda3bc707512f30e14d34b03ee6c1517bb8e0142
  }
  // getCustomerById /customers/{id}
  getById(id: number): Observable<any> {
    return this.httpClient.get(this.API + id);
  }
<<<<<<< HEAD
  // update /customers/{id}
  // Update needs an object
  update(id: number) {
    return this.httpClient.put(this.API + id, id);
=======
  //update /customers/{id}
  // Update needs an object 
  update(id:number,customer:Customer){
    return this.httpClient.put(this.API + id, customer)
>>>>>>> fda3bc707512f30e14d34b03ee6c1517bb8e0142
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
