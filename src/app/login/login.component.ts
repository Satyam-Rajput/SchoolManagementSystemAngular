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
constructor(private router:Router,private route:ActivatedRoute,private loginService:UserAuthenticationService ) { }

  ngOnInit(): void {
   this.message=this.route.params["message"];
   
   if(this.message!=null)
   alert(this.message)
  
  }

  onSubmit()
  {
 this.loginService.userlogin(this.user).subscribe(data =>{ console.log(data);this.result=data}, error => console.log(error)); 


 if(this.result==null)
{
  console.log('Incorrect Details');
}
else if(this.result.role=='A')
{
  this.user=new User();
 this.user.email=this.result.email;
 this.user.id=this.result.id;
 this.user.password=this.result.password;
 this.user.role=this.result.role;
  console.log("Admin");
  sessionStorage.setItem("admin",JSON.stringify(this.user));
  this.router.navigate(['admin']);
  
}
else if(this.result.role=='T')
{console.log("Teacher");
sessionStorage.setItem("teacher",this.result);
this.router.navigate(['teacher']);
}
else if(this.result.role=="S")
{
  console.log("Student");
  sessionStorage.setItem("student",this.result);
  this.router.navigate(['student']);
}
}


navigateToAdmin(user:any)
{this.router.navigate(['admin',user]);

}
}
