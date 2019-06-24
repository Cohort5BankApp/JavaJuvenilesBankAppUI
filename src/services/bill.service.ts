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
<<<<<<< HEAD
  //API = 'http://localhost:8080/accounts/${accountId}/bills'
  api = 'http://bankingapplicationspringboot-env-1.k2hcfmgmya.us-east-2.elasticbeanstalk.com'

  constructor(private http: HttpClient) { 
  }

  public find(id: number){
    return this.http.get(this.api + id);
  }

  // Cant create without an id
  public create(bill: Bill, account_id: number): Observable<Bill>{
    return this.http.post<Bill>(this.api + `/accounts/${account_id}/bills/`, bill);
=======
  
  


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
>>>>>>> abdb11cff04e2200dbd2afc85598bfbe39e5e53e
  }

  public delete(id: number): Observable<any>{
    return this.http.delete<Bill>(this.api + id);
  }

  public update(id: number, value: any, account_id){
    return this.http.put(this.api + `/${account_id}/bills/` + id, value);
  }
}
