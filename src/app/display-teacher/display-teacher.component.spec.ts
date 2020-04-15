import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayTeacherComponent } from './display-teacher.component';

describe('DisplayTeacherComponent', () => {
  let component: DisplayTeacherComponent;
  let fixture: ComponentFixture<DisplayTeacherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayTeacherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
