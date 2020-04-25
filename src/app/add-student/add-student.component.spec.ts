import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { AdminServiceService } from '../admin-service.service';

import { AddStudentComponent } from './add-student.component';
import { of } from 'rxjs';

describe('AddStudentComponent', () => {
  let component: AddStudentComponent;
  let fixture: ComponentFixture<AddStudentComponent>;
  let service:AdminServiceService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddStudentComponent ],
      imports:[RouterTestingModule,HttpClientTestingModule,FormsModule],
      providers:[AdminServiceService]
    })
    .compileComponents();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(AddStudentComponent);
    component = fixture.componentInstance;
    service=TestBed.inject(AdminServiceService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should return password mismatch error', () => {
  
      component.student.password="123"
      component.confirmPassword="12345"
      component.onSubmit();
    

    expect(component.error).toContain("password doesn't match");
  });



  it('should save student and return true', () => {
  
    component.student.password="12345"
    component.confirmPassword="12345"
    spyOn(service,'saveStudent').and.callFake(()=>{

      return of(true);
 
     });
    component.result=true;
    
    component.onSubmit();
  

  expect(component.output).toContain("successfully Registered");
});





it('should call save student and return false', () => {
  spyOn(service,'saveStudent').and.callFake(()=>{

    return of(false);

   });
  
  component.student.password="12345"
  component.confirmPassword="12345"
  component.result=false;
  
  component.onSubmit();


expect(component.output).toContain("Email already exists");
});


});
