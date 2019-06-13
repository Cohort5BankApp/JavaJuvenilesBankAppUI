import { Injectable } from '@angular/core';
import { Customer } from '../models/Customer'
import { HttpClient } from '@angular/common/http'
import { create } from 'domain';
import { stringify } from '@angular/core/src/render3/util';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private customer:Customer,private httpClient:HttpClient) { }

  public API = 'http://localhost:8080/customers/'

  //Create /customers
  create(customer:Object){
    return this.httpClient.post(this.API, customer);
  }
  //getAll /customers
  getAll(): Observable
  //getCustomerById /customers/{id}
  //update /customers/{id}
  //getBillsByCustomer /customers{id}/bills
  //getAccountByCustomer /customers/{id}/accounts
}
