import { Component, OnInit } from '@angular/core';
import {Student} from '../student';
import {Router,ActivatedRoute} from '@angular/router';
import { AdminServiceService } from '../admin-service.service';
@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
result:boolean;
  confirmPassword:string;
 student:Student; 
  
   constructor(private router:Router,private route:ActivatedRoute,private service:AdminServiceService ) { }


  ngOnInit(): void {
  this.student=new Student();
 
  }

  onSubmit()
  {
    if(this.student.password==this.confirmPassword){
this.service.saveStudent(this.student).subscribe(data =>{ console.log(data);this.result=data}, error => console.log(error));
  
if(this.result)
{
  alert("success")
  this.router.navigate(['admin']);
}
else
{
  console.log("failure");
}
    }
    else
    {
      alert("password doesn't match");
    }
}
}
