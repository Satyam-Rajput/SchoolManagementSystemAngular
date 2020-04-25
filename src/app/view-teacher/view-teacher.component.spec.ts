import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTeacherComponent } from './view-teacher.component';
import { Employee } from '../employee';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

describe('ViewTeacherComponent', () => {
  let component: ViewTeacherComponent;
  let fixture: ComponentFixture<ViewTeacherComponent>;
  
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTeacherComponent ]
      ,
      imports:[RouterTestingModule,FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should create teacher', () => {
   let teacher1:any;
   let teacher=new Employee();
   
    spyOn(sessionStorage,'getItem').and.returnValue(teacher1)
    spyOn(JSON,'parse').and.returnValue(teacher);
    spyOn(sessionStorage,'removeItem').and.callThrough();
   
   component.ngOnInit()
    expect(component.teacher).toBeTruthy();
  });
});
