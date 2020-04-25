import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNavbarComponent } from './admin-navbar.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('AdminNavbarComponent', () => {
  let component: AdminNavbarComponent;
  let fixture: ComponentFixture<AdminNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminNavbarComponent ],
      imports:[RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should logout', () => {

   component.logout();
   const spy=spyOn(sessionStorage,"removeItem")
  expect(sessionStorage.getItem("admin")).toBeUndefined;
  
  });
});
