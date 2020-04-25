import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { UserAuthenticationService } from './user-authentication.service';
import { User } from './user';

describe('UserAuthenticationService', () => {
  let service: UserAuthenticationService;
  let user:User;
  let u:any;
  beforeEach(() => {
    TestBed.configureTestingModule({
   
       imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(UserAuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  it('should return user', () => {
    spyOn(service,'userlogin').and.returnValue(u);
    expect(service.userlogin(user)).toEqual(u);
  });
});
