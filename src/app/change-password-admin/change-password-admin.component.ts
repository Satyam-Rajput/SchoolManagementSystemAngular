import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-change-password-admin',
  templateUrl: './change-password-admin.component.html',
  styleUrls: ['./change-password-admin.component.css']
})
export class ChangePasswordAdminComponent implements OnInit {

  password:string;
  newPassword:string;
  confirmPassword:string;
  user:User=new User();
  
  usr:any;
  error:string;
  output:string;
  result:any;
  constructor(private router:Router,private route:ActivatedRoute,private service:AdminServiceService ) { }


  ngOnInit(): void {

    this.user=JSON.parse(sessionStorage.getItem("admin"));
  }


  onSubmit()
  {
    if(this.password!=null&&this.newPassword!=null&&this.confirmPassword!=null){
    if(this.newPassword===this.confirmPassword)
    {this.error=""
   
    this.user.password=this.newPassword;
   this.service.changePassword(this.password,this.user).subscribe(data=>{this.result=data;console.log(data)},error=>console.log(error));
 
  
if(this.result)
{
  
  this.output="Password changed Successfully"
  this.error=""
}
else
{
  
  this.error="Incorrect Password"
  this.output=""
}

  

    }
    else
    {
      this.error="password doesn't match";
    }
  }
  else
  {
    this.error="all fields are Required"
  }
}

}
