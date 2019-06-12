import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Deposit } from '../models/deposit';

@Injectable({
  providedIn: 'root'
})
export class DepositService {

  private depositUrl: string;
  private accountId: string;
  private depositId: string;

  constructor(private http: HttpClient) {
    this.depositUrl ='http://localhost:8080';
   }
   public findAll():Observable<Deposit[]>{
     return this.http.get<Deposit[]>(this.depositUrl+"/accounts" +this.accountId + "/deposits");
   }
   public getOne(id: number){
     return this.http.get(this.depositUrl +"/deposits" + id);
   }
   public save(deposit: Deposit){
     return this.http.post<Deposit>(this.depositUrl + "/accounts" + this.accountId +"deposits",deposit )
   }
   public update(id: number, deposit: Deposit){
     return this.http.put(this.depositUrl+"/deposits"+id,deposit);
   }
   public delete(id:number){
     return this.http.delete(this.depositUrl+"/deposits"+id);
   }
}