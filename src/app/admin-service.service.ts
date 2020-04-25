import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import  {Observable} from 'rxjs';
import { Student } from './student';
import {Employee} from './employee';
import { User } from './user';
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

  getEmployees():Observable<any>
  {
 return this.http.get(`${this.baseUrl+'getEmployees'}`);
  }
  getStudents():Observable<any>
  {
 return this.http.get(`${this.baseUrl+'getStudents'}`);
  }
  filterStudents(studentClass:string):Observable<any>
  {
 return this.http.get(`${this.baseUrl+'filterStudents'}/${studentClass}`);
  }
  getTeacher(id:number)
  {
  return this.http.get(`${this.baseUrl+'getTeacher'}/${id}`);
  }

  getStudent(id:number)
  {
  return this.http.get(`${this.baseUrl+'getStudent'}/${id}`);
  }



  getEmployeesCount()
  {
  return this.http.get(`${this.baseUrl+'getEmployeesCount'}`);
  }
  getStudentsCount()
  {
  return this.http.get(`${this.baseUrl+'getStudentsCount'}`);
  }


  deleteStudent(id:number)
  {
  return this.http.delete(`${this.baseUrl+'deleteStudent'}/${id}`);
  }
  deleteTeacher(id:number)
  {
  return this.http.delete(`${this.baseUrl+'deleteTeacher'}/${id}`);
  }

  updateStudent(id:number,student:Student):Observable<any>
  {
    return this.http.put(`${this.baseUrl+'updateStudent'}/${id}`,student);
  }
  updateTeacher(id:number,teacher:Employee):Observable<any>
  {
    return this.http.put(`${this.baseUrl+'updateTeacher'}/${id}`,teacher);
  }


changePassword(password:string,user:User)
{
  return this.http.post(`${this.baseUrl+'changePassword'}/${password}`,user);
 }
 
}
