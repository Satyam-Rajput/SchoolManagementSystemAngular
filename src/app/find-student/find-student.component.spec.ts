import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindStudentComponent } from './find-student.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { AdminServiceService } from '../admin-service.service';
import { of } from 'rxjs';
import { Student } from '../student';
describe('FindStudentComponent', () => {
  let component: FindStudentComponent;
  let fixture: ComponentFixture<FindStudentComponent>;
  let service:AdminServiceService;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindStudentComponent ],
      imports:[RouterTestingModule,HttpClientTestingModule,FormsModule],
      providers:[AdminServiceService]
    })
    .compileComponents();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(FindStudentComponent);
    component = fixture.componentInstance;
    service=TestBed.inject(AdminServiceService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });



  it('should return roll no not found', () => {
    let student:Student=new Student();
    spyOn(service,'getStudent').and.callFake(()=>{

      return of(null);
 
     });
     component.onSubmit()
    expect(component.error).toContain("Roll No not Found");
  });
  it('should return Student Found found', () => {
    let student:Student=new Student();
    spyOn(service,'getStudent').and.callFake(()=>{

      return of(student);
 
     });
     component.onSubmit()
    expect(component.student).toBeTruthy();
  });

  it('should return student Deleted', () => {
    let student:Student=new Student();
    spyOn(service,'deleteStudent').and.callFake(()=>{

      return of(true);
 
     });
     component.deleteStudent(1)
    expect(component.output).toContain("deleted");
  });
});
