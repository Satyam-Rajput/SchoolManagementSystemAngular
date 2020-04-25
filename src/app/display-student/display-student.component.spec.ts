import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayStudentComponent } from './display-student.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { AdminServiceService } from '../admin-service.service';
import { of } from 'rxjs';
import { Student } from '../student';
describe('DisplayStudentComponent', () => {
  let component: DisplayStudentComponent;
  let fixture: ComponentFixture<DisplayStudentComponent>;
  let service:AdminServiceService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayStudentComponent ],
      imports:[RouterTestingModule,HttpClientTestingModule,FormsModule],
      providers:[AdminServiceService]
    })
    .compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayStudentComponent);
    component = fixture.componentInstance;
    service=TestBed.inject(AdminServiceService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should return student Deleted', () => {
   
    spyOn(service,'deleteStudent').and.callFake(()=>{

      return of(true);
 
     });
     component.deleteStudent(1)
    expect(component.output).toContain("deleted");
  });


  it('should return Student Found found', () => {
    let student:Student=new Student();
    spyOn(service,'getStudent').and.callFake(()=>{

      return of(student);
 
     });
     component.viewDetails(1)
    expect(component.student1).toBeTruthy();
  });

  it('should filter Student  found', () => {
    let student:Student=new Student();
    spyOn(service,'filterStudents').and.callFake(()=>{

      return of(student);
 
     });
     component.filterStudents()
    expect(component.students).toBeTruthy();
  });
});
