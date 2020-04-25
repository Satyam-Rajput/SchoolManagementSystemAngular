import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { AdminServiceService } from '../admin-service.service';
import { AddTeacherComponent } from './add-teacher.component';
import { of } from 'rxjs';
describe('AddTeacherComponent', () => {
  let component: AddTeacherComponent;
  let fixture: ComponentFixture<AddTeacherComponent>;
  let service:AdminServiceService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTeacherComponent ],
      imports:[RouterTestingModule,HttpClientTestingModule,FormsModule],
      providers:[AdminServiceService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTeacherComponent);
    component = fixture.componentInstance;
    service=TestBed.inject(AdminServiceService);
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
  it('should return password mismatch error', () => {
  
    component.teacher.password="123"
    component.confirmPassword="12345"
    component.onSubmit();
  

  expect(component.error).toContain("password doesn't match");
});



it('should save Teacher and return true', () => {

  component.teacher.password="12345"
  component.confirmPassword="12345"
  spyOn(service,'saveTeacher').and.callFake(()=>{

    return of(true);

   });
  component.result=true;
  
  component.onSubmit();


expect(component.output).toContain("successfully Registered");
});





it('should call save Teacher and return false', () => {
spyOn(service,'saveTeacher').and.callFake(()=>{

  return of(false);

 });

component.teacher.password="12345"
component.confirmPassword="12345"
component.result=false;

component.onSubmit();


expect(component.output).toContain("Email already exists");
});


});
