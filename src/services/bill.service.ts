import { Injectable } from '@angular/core';
import { Bill } from '../models/Bill';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  // private billUrl: string;
  API = 'http://localhost:8080/accounts/${accountId}/bills'

  constructor(private http: HttpClient) { 
  } 

  public findAll(): Observable<Bill[]>{
    return this.http.get<Bill[]>(this.API);
  }

  public find(id: number){
    return this.http.get(`http://localhost:8080/bills/` + id);
  }

  // Cant create without an id
  public create(bill: Bill, account_id): Observable<Bill>{
    return this.http.post<Bill>(`http://localhost:8080/accounts/${account_id}/bills/`, bill);
  }

  public delete(id: number): Observable<any>{
    return this.http.delete<Bill>(`http://localhost:8080/bills/` + id);
  }

  public update(id: number, value: any, account_id){
    return this.http.put(`http://localhost:8080/accounts/${account_id}/bills/` + id, value);
  }
}
