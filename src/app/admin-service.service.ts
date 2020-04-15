import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import  {Observable} from 'rxjs';
import { Student } from './student';
import {Employee} from './employee';
@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  private baseUrl='http://localhost:8080/api/admin/';
  constructor(private http:HttpClient) { }
  

  saveStudent( student:Student):Observable<any>
  {
return this.http.post(`${this.baseUrl+'saveStudent'}`, student);
  }

  saveTeacher(teacher:Employee):Observable<any>
  {
return this.http.post(`${this.baseUrl+'saveTeacher'}`, teacher);
  }

  getTeacher(id:number)
  {
  return this.http.get(`${this.baseUrl+'getTeacher'}/${id}`,);
  }
}
