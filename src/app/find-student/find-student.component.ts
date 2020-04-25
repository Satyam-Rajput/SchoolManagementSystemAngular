import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import { AdminServiceService } from '../admin-service.service';
import {Student} from '../student';
@Component({
  selector: 'app-find-student',
  templateUrl: './find-student.component.html',
  styleUrls: ['./find-student.component.css']
})
export class FindStudentComponent implements OnInit {
error:string;

  studentId:number;
  student:Student=new Student();
  result:any;
  output:string;
  constructor(private router:Router,private route:ActivatedRoute,private service:AdminServiceService ) { }


  ngOnInit(): void {
    this.error=" "
    this.student=this.route.snapshot.params['student'];
   // JSON.parse(sessionStorage.getItem("student"));
   // sessionStorage.removeItem("student")
    //
    
    

   
  }
  onSubmit()
  {
   
    
   this.service.getStudent(this.studentId).subscribe(data=>{this.result=data;console.log(data)},error=>console.log(error));
  this.student=this.result;
  if(this.student!=null)
  {this.error=""
    this.navigateTo(this.student);
  }
  else
  
  {
    this.error="Roll No not Found"
  }

  }
  deleteStudent(id:number)
  {
this.service.deleteStudent(id).subscribe(data=>{console.log(data),this.result=data;},error=>console.log(error));
this.output="deleted"
this.router.navigate(['display-student']);
  }
  updateStudent(id:number)
  {
   
    
 this.router.navigate(['update-student',id]);

  }

   navigateTo(student:Student)
   {
    // sessionStorage.setItem("student",JSON.stringify(student))
     this.router.navigate(['find-student',student]);
   }
}
