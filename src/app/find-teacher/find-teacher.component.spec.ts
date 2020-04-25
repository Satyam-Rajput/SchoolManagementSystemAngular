import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindTeacherComponent } from './find-teacher.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { AdminServiceService } from '../admin-service.service';
import { of } from 'rxjs';
import { Employee } from '../employee';

describe('FindTeacherComponent', () => {
  let component: FindTeacherComponent;
  let fixture: ComponentFixture<FindTeacherComponent>;
  let service:AdminServiceService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindTeacherComponent ],
      imports:[RouterTestingModule,HttpClientTestingModule,FormsModule],
      providers:[AdminServiceService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindTeacherComponent);
    component = fixture.componentInstance;
    service=TestBed.inject(AdminServiceService);
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should return Employee no not found', () => {
    let student:Employee=new Employee();
    spyOn(service,'getTeacher').and.callFake(()=>{

      return of(null);
 
     });
     component.onSubmit()
    expect(component.error).toContain("Employee ID not found");
  });
  it('should returnEmployee  found', () => {
    let student:Employee=new Employee();
    spyOn(service,'getTeacher').and.callFake(()=>{

      return of(student);
 
     });
     component.onSubmit()
    expect(component.teacher).toBeTruthy();
  });

  it('should return student Deleted', () => {
    let student:Employee=new Employee();
    spyOn(service,'deleteTeacher').and.callFake(()=>{

      return of(true);
 
     });
     component.deleteTeacher(1)
    expect(component.output).toContain("deleted");
  });
});
