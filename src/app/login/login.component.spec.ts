import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UserAuthenticationService } from '../user-authentication.service';
import { User } from '../user';
import { of } from 'rxjs';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let service:UserAuthenticationService;
  let user:User=new User();
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports:[RouterTestingModule,HttpClientTestingModule,FormsModule],
      providers:[UserAuthenticationService]
     
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    service=TestBed.inject(UserAuthenticationService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });




  xit('should return null', () => {

    let ans=null;
    component.onSubmit();
    spyOn(service,'userlogin').and.callFake(()=>{

      return of(ans);
 
     });

     expect(component.error).toContain("Incorrect Details");


  
  });
  xit('should return user', () => {

    component.onSubmit();
    spyOn(service,'userlogin').and.callFake(()=>{
     user.email="123@gi.com"
     user.id=1
     user.password="23"
     user.role="A"
     user.userId=3;
      return of(user);
 
     });

     expect(component.error).toContain("Incorrect Details");


  
  });
});
