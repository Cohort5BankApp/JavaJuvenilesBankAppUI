import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//need to import model
import { Withdrawal } from '../models/Withdraw';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WithdrawalService {

  private withdrawalUrl: string;
 
  constructor(private http: HttpClient) {
    this.withdrawalUrl = 'http://localhost:8080/withdrawal/';
  }
 
//   public findAll(): Observable<Withdrawal[]> {
//     return this.http.get<Withdrawal[]>(this.withdrawalUrl);
//   }
 //error with the Endpoint to save a withdraw, Should be /accounts/{accountId}/withdrawals
  public save(withdrawal: Withdrawal): Observable<Withdrawal> {
    return this.http.post<Withdrawal>(this.withdrawalUrl, withdrawal);
  }

  public delete(id: number): Observable<any>{
    return this.http.delete<Withdrawal>(this.withdrawalUrl + id);
  }

  public find(id: number){
    return this.http.get(this.withdrawalUrl + id);
  }

  public update(id: number, value: any) {
    return this.http.put(this.withdrawalUrl + id, value);
  }
}
