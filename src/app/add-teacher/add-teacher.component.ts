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
  teacher:Employee;
  
  constructor(private router:Router,private route:ActivatedRoute,private service:AdminServiceService ) { }


  ngOnInit(): void {
   this.teacher=new Employee();

  }
  onSubmit()
  {
    if(this.teacher.password==this.confirmPassword){
    this.service.saveTeacher(this.teacher).subscribe(data=>{this.result=data},error=>console.log(error));
    
    if(this.result)
    {
      alert("success")
      this.router.navigate(['admin']);
    }
    else
    {
     alert("failure")
    }}
    else
    {
      alert("password doesn't match")
    }
    
  }
  

}
