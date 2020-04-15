import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import  {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserAuthenticationService {

  private baseUrl='http://localhost:8080/api/user/login';
  constructor(private http:HttpClient) { }


  userlogin( user:Object):Observable<any>
  {
return this.http.post(`${this.baseUrl}`, user);
  }
}
