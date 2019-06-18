import { Injectable } from '@angular/core';
import { Customer } from '../models/Customer';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private API: 'http://localhost:8080/customers/'

  constructor(private httpClient:HttpClient) { 
    
  }

  //Create /customers
  public create(customer:Customer): Observable<Customer>{
    return this.httpClient.post<Customer>(this.API, customer);
  }
  //getAll /customers
  public findAll(): Observable<Customer>{
    return this.httpClient.get<Customer>(this.API)
  }
  //getCustomerById /customers/{id}
  public getById(id:number):Observable<any>{
    return this.httpClient.get(this.API + id)
  }
  //update /customers/{id}
  // Update needs an object 
  public update(id:number, value: any){
    return this.httpClient.put(this.API + id, value)
  }
  //getBillsByCustomer /customers/{id}/bills
  public getBills(id:number){
    return this.httpClient.get(this.API + id + '/bills')
  }
  //getAccountByCustomer /customers/{id}/accounts
  public getAccountByCustomer(id:number){
    return this.httpClient.get(this.API + id + '/accounts')
  }
}
