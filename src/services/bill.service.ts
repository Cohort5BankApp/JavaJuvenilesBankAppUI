import { Injectable } from '@angular/core';
import { Bill } from '../models/Bill';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  private billUrl: string;

  constructor(private http: HttpClient) { 
    this.billUrl = 'http://localhost:8080/bills/';
  } 

  public findAll(): Observable<Bill[]>{
    return this.http.get<Bill[]>(this.billUrl);
  }

  public find(id: number){
    return this.http.get(this.billUrl + id);
  }

  public create(bill: Bill): Observable<Bill>{
    return this.http.post<Bill>(this.billUrl, bill);
  }

  public delete(id: number): Observable<any>{
    return this.http.delete<Bill>(this.billUrl + id);
  }

  public update(id: number, value: any){
    return this.http.put(this.billUrl + id, value);
  }
}
