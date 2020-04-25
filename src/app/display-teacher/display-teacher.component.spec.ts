import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayTeacherComponent } from './display-teacher.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { AdminServiceService } from '../admin-service.service';
import { of } from 'rxjs';
import { Employee } from '../employee';
describe('DisplayTeacherComponent', () => {
  let component: DisplayTeacherComponent;
  let fixture: ComponentFixture<DisplayTeacherComponent>;
  let service:AdminServiceService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayTeacherComponent ],
      imports:[RouterTestingModule,HttpClientTestingModule,FormsModule],
      providers:[AdminServiceService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayTeacherComponent);
    component = fixture.componentInstance;
    service=TestBed.inject(AdminServiceService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return Teacher Deleted', () => {
   
    spyOn(service,'deleteTeacher').and.callFake(()=>{

      return of(true);
 
     });
     component.deleteTeacher(1)
    expect(component.output).toContain("deleted");
  });


  it('should return Student Found found', () => {
    let student:Employee=new Employee();
    spyOn(service,'getTeacher').and.callFake(()=>{

      return of(student);
 
     });
     component.viewDetails(1)
    expect(component.teacher).toBeTruthy();
  });

 
});
