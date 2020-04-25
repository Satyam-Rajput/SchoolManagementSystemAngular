import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateStudentComponent } from './update-student.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { AdminServiceService } from '../admin-service.service';
import { Student } from '../student';
import { of } from 'rxjs';

describe('UpdateStudentComponent', () => {
  let component: UpdateStudentComponent;
  let fixture: ComponentFixture<UpdateStudentComponent>;
 
  let student:Student=new Student();
  
  let service:AdminServiceService;
  let fixture2:ComponentFixture<AdminServiceService>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateStudentComponent ],
      imports:[RouterTestingModule,HttpClientTestingModule,FormsModule],
      providers:[AdminServiceService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateStudentComponent);
    component = fixture.componentInstance;
    service=TestBed.inject(AdminServiceService);
    fixture.detectChanges();
    spyOn(sessionStorage,'getItem').and.returnValue(JSON.stringify(1));
    spyOn(service,'getStudent').and.callFake(()=>{

      return of(student);
 
     });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });






  
  it('should run onsubmit and password mismatched error', () => {
    component.confirmPassword="12345";
  
    component.lastName="abc"
  
  
    component.firstName="string";
    
    component.fatherName="abc";
    component.studentClass="sdd";
    component.email="string";
    component.dateOfBirth=new Date();
    component.phoneNumber=1234;
    component.houseNumber=111;
    component.pincode=123;
    component.streetName="string";
    component.city="string";
    component. country="string";
    component.state="string";
    
    component.onSubmit()
   expect(component.error).toContain("Pasword doesn't match");
  
  });
  it('should run onsubmit and return false', () => {
  
    component.fatherName="abc";
    component.studentClass="sdd";
    component.confirmPassword="12345";
   component.password="12345";
    component.lastName="abcgha";
  
  
    component.firstName="string";
    
    component.studentId=1;
    component.email="string";
    component.dateOfBirth=new Date();
    component.phoneNumber=1234;
    component.houseNumber=111;
    component.pincode=123;
    component.streetName="string";
    component.city="string";
    component. country="string";
    component.state="string";
    component.result=false;
    
    component.onSubmit()
    let a:any=true;
    spyOn(service,'updateStudent').and.callFake(()=>{

      return of(false);
 
     });
   
   // spyOn(service,'updateTeacher').and.returnValue(a);
  
   expect(component.output).toContain("failed to Update ! try Again");
  
  
  
  
  });
  
  
  it('should run onsubmit and return true', () => {
  
  
    component.confirmPassword="12345";
   component.password="12345";
    component.lastName="abcgha";
  
  
    component.firstName="string";
    component.fatherName="abc";
    component.studentClass="sdd";
    component.studentId=1;
    component.email="string";
    component.dateOfBirth=new Date();
    component.phoneNumber=1234;
    component.houseNumber=111;
    component.pincode=123;
    component.streetName="string";
    component.city="string";
    component. country="string";
    component.state="string";
    component.result=true;
    
    component.onSubmit()
    let a:any=true;
  
    spyOn(service,'updateStudent').and.callFake(()=>{

      return of(true);
 
     });
   // spyOn(service,'updateTeacher').and.returnValue(a);
  
   expect(component.output).toContain("Succcessfully Updated");
  
  
  
  
  });



    
  it('should run setDetails', () => {
    component.confirmPassword="12345";
  
    component.lastName="abc"
  
  
    component.firstName="string";
    
    component.fatherName="abc";
    component.studentClass="sdd";
    component.email="string";
    component.dateOfBirth=new Date();
    component.phoneNumber=1234;
    component.houseNumber=111;
    component.pincode=123;
    component.streetName="string";
    component.city="string";
    component. country="string";
    component.state="string";
    
    component.setDetails()
   expect(component.student.country).toContain("string");
  
  });
});
