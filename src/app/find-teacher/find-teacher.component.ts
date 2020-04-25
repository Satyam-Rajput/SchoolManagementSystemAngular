import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import { AdminServiceService } from '../admin-service.service';
import { Employee } from '../employee';
@Component({
  selector: 'app-find-teacher',
  templateUrl: './find-teacher.component.html',
  styleUrls: ['./find-teacher.component.css']
})
export class FindTeacherComponent implements OnInit {

  teacherId:number;
  teacher:Employee;
  result:any;
  output:string;
error:string;
  constructor(private router:Router,private route:ActivatedRoute,private service:AdminServiceService ) { }


  ngOnInit(): void {

 this.teacher=this.route.snapshot.params['teacher'];

  }

  onSubmit()

  {

  this.service.getTeacher(this.teacherId).subscribe(data=>{this.result=data;console.log(data)},error=>console.log(error));
  this.teacher=this.result;
  if(this.teacher!=null){
    this.error=""
  this.setDataToObject(this.teacher);
  
  }
  else
  {
    this.error="Employee ID not found"
  }

  }



  deleteTeacher(id:number)
  {
 this.service.deleteTeacher(id).subscribe(data=>console.log(data),error=>console.log(error));
 this.output="deleted"
 this.router.navigate(['display-teacher']);
  }
  updateTeacher(id:number)
  {
    this.router.navigate(['update-teacher',id]);
  }
  setDataToObject(teacher:Employee)
  {

    this.router.navigate(['find-teacher',teacher]);
  }
}
