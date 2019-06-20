import { Injectable } from '@angular/core';
import { Bill } from '../models/Bill';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BillService {
private billUrl: string;

  // private billUrl: string;
  
  


  constructor(private http: HttpClient) { 
    this.billUrl = `http://localhost:8080`;
  } 

  public findAll(): Observable<Bill[]>{
    return this.http.get<Bill[]>(this.billUrl + "");
  }

  public find(id: number){
    return this.http.get(this.billUrl + id + '/bills');
  }

  // Cant create without an id
  public create(bill: Bill, accountId: number): Observable<Bill>{
    return this.http.post<Bill>(this.billUrl + '/accounts/'+ accountId + '/bills' , bill);
  }

  public delete(id: number): Observable<any>{
    return this.http.delete<Bill>(`http://localhost:8080/bills/` + id);
  }

  public update(id: number, value: any, account_id){
    return this.http.put(`http://localhost:8080/accounts/${account_id}/bills/` + id, value);
  }
}
