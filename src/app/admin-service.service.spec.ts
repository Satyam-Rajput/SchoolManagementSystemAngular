import { TestBed } from '@angular/core/testing';

import { AdminServiceService } from './admin-service.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Student } from './student';
import { Employee } from './employee';

describe('AdminServiceService', () => {
  let service: AdminServiceService;
  let student:Student;
  let result:any=true;
  let teacher:Employee;
  let httpService:HttpClientTestingModule;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[AdminServiceService]
    });
    service = TestBed.get(AdminServiceService);
    httpService=TestBed.get(HttpClientTestingModule);
 
  });

  
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should return true for saving student', () => {
    result=true;
    spyOn(service,'saveStudent').and.returnValue(result);
    expect(service.saveStudent(student)).toBeTruthy();
  });
  it('should return false for saving student', () => {
    result=false;
    
    spyOn(service,'saveStudent').and.returnValue(result);
    expect(service.saveStudent(student)).toBeFalsy();
  });
  it('should return true for saving student', () => {
    result=true;
    spyOn(service,'saveTeacher').and.returnValue(result);
    expect(service.saveTeacher(teacher)).toBeTruthy();
  });
  it('should return false for saving student', () => {
    result=false;
    spyOn(service,'saveTeacher').and.returnValue(result);
    expect(service.saveTeacher(teacher)).toBeFalsy();
  });
  it('should return employee List', () => {
    let employees:any;
    spyOn(service,'getEmployees').and.returnValue(employees);
    expect(service.getEmployees()).toEqual(employees);
  });


});
