import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';
import { ChangePasswordAdminComponent } from './change-password-admin.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { User } from '../user';
import { of } from 'rxjs';


describe('ChangePasswordAdminComponent', () => {
  let component: ChangePasswordAdminComponent;
  let fixture: ComponentFixture<ChangePasswordAdminComponent>;
  let service:AdminServiceService;
  
  
  
   
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule,HttpClientTestingModule,FormsModule],
      providers:[AdminServiceService],
      declarations: [ ChangePasswordAdminComponent ]
    })
    .compileComponents()
    ;
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangePasswordAdminComponent);
    component = fixture.componentInstance;
    service=TestBed.inject(AdminServiceService);
    spyOn(sessionStorage,'getItem').and.returnValue(JSON.stringify(new User()));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });



  it('should return password null error ', () => {
   
     component.password="";
     component.confirmPassword=""
     component.newPassword=null;
     component.onSubmit();

    expect(component.error).toContain("all fields are Required");
  });
  it('should return password mismatch error ', () => {
   
    component.password="12";
    component.confirmPassword="12"
    component.newPassword="1"
    component.onSubmit();

   expect(component.error).toContain("password doesn't match");
 });


 it('should return password updated successfully ', () => {
   
  component.password="12";
  component.confirmPassword="12"
  component.newPassword="12"
  component.result=true;
  component.onSubmit();
  spyOn(service,'changePassword').and.callFake(()=>{

    return of(true);

   });
 expect(component.output).toContain("Password changed Successfully");
});

it('should return Incorrect password  ', () => {
   component.result=false;
  component.password="12";
  component.confirmPassword="12"
  component.newPassword="12"
  component.onSubmit();
  spyOn(service,'changePassword').and.callFake(()=>{

    return of(false);

   });
 expect(component.error).toContain("Incorrect Password");
});
});
