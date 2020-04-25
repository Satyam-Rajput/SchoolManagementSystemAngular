import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import { AdminServiceService } from '../admin-service.service';
import { Observable } from 'rxjs';
import { Student } from '../student';
@Component({
  selector: 'app-display-student',
  templateUrl: './display-student.component.html',
  styleUrls: ['./display-student.component.css']
})
export class DisplayStudentComponent implements OnInit {
 
  studentClass:string;

  result:any;
  student1:Student;
  output:string;
 students:Observable<Student[]>;
  constructor(private router:Router,private route:ActivatedRoute,private service:AdminServiceService ) { }
error:string;
  ngOnInit(): void {
    
   if(this.studentClass==null||this.studentClass=="all"||this.studentClass=="") 
  this.reloadList();
  else
  this.filterStudents()

  }

  reloadList()
  {
    this.students=this.service.getStudents();
  }
  deleteStudent(id:number)
  {
this.service.deleteStudent(id).subscribe(data=>{console.log(data)},error=>console.log(error));
this.output="deleted"
this.router.navigate(['display-student']);
  }
  updateStudent(id:number)
  {
   
    
 this.router.navigate(['update-student',id]);

  }

  viewDetails(id:number)
  {
    this.service.getStudent(id).subscribe(data=>{this.result=data;console.log(data)},error=>console.log(error));
  this.student1=this.result;
  if(this.student1!=null)
  {
    this.navigateTo(this.student1);
  }
 
    

  }
  navigateTo(student:Student)
  {
    sessionStorage.setItem("student",JSON.stringify(student));
    this.router.navigate(["view-student",student]);
  }

  filterStudents()
  {

this.students=this.service.filterStudents(this.studentClass);
this.router.navigate(['display-student']);
  }
}
