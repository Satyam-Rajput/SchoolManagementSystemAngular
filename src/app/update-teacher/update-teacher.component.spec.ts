import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTeacherComponent } from './update-teacher.component';
import { RouterTestingModule } from '@angular/router/testing';
import { AdminServiceService } from '../admin-service.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { Employee } from '../employee';
import { ActivatedRoute, ActivationEnd } from '@angular/router';

import {Observable,of} from 'rxjs';

describe('UpdateTeacherComponent', () => {
  let component: UpdateTeacherComponent;
  let fixture: ComponentFixture<UpdateTeacherComponent>;
  let fixture1:ComponentFixture<ActivatedRoute>;
 let teacher:Employee=new Employee();
 let activ:ActivatedRoute;
 let service:AdminServiceService;
 let fixture2:ComponentFixture<AdminServiceService>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateTeacherComponent ],
      imports:[RouterTestingModule,HttpClientTestingModule,FormsModule],
      providers:[AdminServiceService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTeacherComponent);
    fixture1=TestBed.get(ActivatedRoute);
    component = fixture.componentInstance;
   service=TestBed.inject(AdminServiceService);

    activ=fixture1.componentInstance;
    fixture.detectChanges();
    spyOn(sessionStorage,'getItem').and.returnValue(JSON.stringify(1));
    let teacher:Employee=new Employee();
         
    let teacher1:any=teacher;
    spyOn(service,'getTeacher').and.callFake(()=>{

     return of(teacher);

    });
  });

  it('should create', () => {
        
    
      
    expect(component).toBeTruthy();
  });

  it('should run onsubmit and password mismatched error', () => {
  component.confirmPassword="12345";

  component.lastName="abc"


  component.firstName="string";
  
  
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


  component.confirmPassword="12345";
 component.password="12345";
  component.lastName="abcgha";


  component.firstName="string";
  
  component.teacherId=1;
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
  spyOn(service,'updateTeacher').and.callFake(()=>{

    return of(false);

   });
 
 
 // spyOn(service,'updateTeacher').and.returnValue(a);

 expect(component.error).toContain("failed To Update! try Again");




});


it('should run onsubmit and return true', () => {


  component.confirmPassword="12345";
 component.password="12345";
  component.lastName="abcgha";


  component.firstName="string";
  
  component.teacherId=1;
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
 
  spyOn(service,'updateTeacher').and.callFake(()=>{

    return of(true);

   });
 // spyOn(service,'updateTeacher').and.returnValue(a);

 expect(component.error).toContain("updated Successfully");




});


});
