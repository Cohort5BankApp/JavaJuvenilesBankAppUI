import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class AccountService {
  public_API = 'http://localhost:8080/accounts'

  constructor(private http: HttpClient) { 

  }
  // get account by id method

  get (id: number): Observable<any>{
    return this.http.get(`http://localhost:8080/accounts/${id}`);
  }

  //get all accounts method

  getAll(): Observable<any>{
    return this.http.get(this.public_API);
  }

  //create an account method

  save(account: Object): Observable<Object>{
    return this.http.post(this.public_API, account)
  }


}




//   save(person: Object): Observable<Object> {
//      return this.http.post(this.public_API, person) 
//   }
//   remove(id: number) {
//     return this.http.delete(`http://localhost:8080/person/${id}`);
//   }
//   update(id: number, value: any): Observable<Object> {
//     return this.http.put(`http://localhost:8080/person/${id}`, value);
//   }
// }