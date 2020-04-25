import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import { AdminServiceService } from '../admin-service.service';
import { Employee } from '../employee';
@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css']
})
export class AddTeacherComponent implements OnInit {
  result:boolean=false;
  confirmPassword:string;
error:string;
  teacher:Employee;
  output:string;
  constructor(private router:Router,private route:ActivatedRoute,private service:AdminServiceService ) { }


  ngOnInit(): void {
   this.teacher=new Employee();

  }
  onSubmit()
  {
    if(this.teacher.password==this.confirmPassword&&this.confirmPassword!=null&&this.confirmPassword!=""){
    this.service.saveTeacher(this.teacher).subscribe(data=>{this.result=data;console.log(data)},error=>console.log(error));
    
    if(this.result)
    {
      this.output="successfully Registered";
     
    }

    else
    {
     this.output="Email already exists"
    }}
    else
    {
      this.error="password doesn't match"
    }
    
  }
  

}
