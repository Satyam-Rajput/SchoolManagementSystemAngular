import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewStudentComponent } from './view-student.component';
import { Student } from '../student';

describe('ViewStudentComponent', () => {
  let component: ViewStudentComponent;
  let fixture: ComponentFixture<ViewStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewStudentComponent ]
    })
    .compileComponents();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(ViewStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should create student', () => {

    let student1:any;
   let student=new Student();
   
    spyOn(sessionStorage,'getItem').and.returnValue(student1)
    spyOn(JSON,'parse').and.returnValue(student);
    spyOn(sessionStorage,'removeItem').and.callThrough();
   
   component.ngOnInit()
    expect(component.student).toBeTruthy();
  });

});
