import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {Router,ActivatedRoute} from '@angular/router';
import {UserAuthenticationService} from '../user-authentication.service';





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user:User=new User();
private result:any;
message:string;
error:string;
userTemp:User;
constructor(private router:Router,private route:ActivatedRoute,private loginService:UserAuthenticationService ) { }

  ngOnInit(): void {
  
  }

  onSubmit()
  {
 this.loginService.userlogin(this.user).subscribe(data =>{ console.log(data);this.result=data}, error => console.log(error)); 


 if(this.result===null)
{
  this.error='Incorrect Details';
}
else if(this.result.role=='A')
{
  this.user=new User();
 this.user.email=this.result.email;
 this.user.id=this.result.id;
 this.user.password=this.result.password;
 this.user.role=this.result.role;

  sessionStorage.setItem("admin",JSON.stringify(this.user));
  sessionStorage.setItem("user",JSON.stringify(this.user));
  this.router.navigate(['admin']);
  
}

}


navigateToAdmin(user:any)
{this.router.navigate(['admin',user]);

}
}
