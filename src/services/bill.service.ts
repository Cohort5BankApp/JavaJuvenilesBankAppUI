import { Injectable } from '@angular/core';
import { Bill } from '../models/Bill';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  // private billUrl: string;
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
  }

  public delete(id: number): Observable<any>{
    return this.http.delete<Bill>(this.api + id);
  }

  public update(id: number, value: any, account_id){
    return this.http.put(this.api + `/${account_id}/bills/` + id, value);
  }
}
