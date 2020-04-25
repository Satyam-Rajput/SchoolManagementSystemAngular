import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import { AdminServiceService } from '../admin-service.service';
import { Observable } from 'rxjs';
import { Employee } from '../employee';

@Component({
  selector: 'app-display-teacher',
  templateUrl: './display-teacher.component.html',
  styleUrls: ['./display-teacher.component.css']
})
export class DisplayTeacherComponent implements OnInit {

  teacher:Employee;
  result:any;
output:string;
  employees:Observable<Employee[]>;
  constructor(private router:Router,private route:ActivatedRoute,private service:AdminServiceService ) { }



  ngOnInit(): void {
    this.reloadList();
  }

  reloadList()
  {
    this.employees=this.service.getEmployees();
  }
  deleteTeacher(id:number)
  {this.output="deleted"
 this.service.deleteTeacher(id).subscribe(data=>console.log(data),error=>console.log(error));
 this.router.navigate(['display-teacher']);
  }
  updateTeacher(id:number)
  {
    sessionStorage.setItem('id',JSON.stringify(id));
    this.router.navigate(['update-teacher',id]);
  }
  viewDetails(id:number)
  {
    this.service.getTeacher(id).subscribe(data=>{this.result=data;console.log(data)},error=>console.log(error));
  this.teacher=this.result;
  if(this.teacher!=null){
  this.navigateToViewDetails(this.teacher);
  }

  }
  navigateToViewDetails(teacher:Employee)
  {
    sessionStorage.setItem("teacher",JSON.stringify(teacher));
    this.router.navigate(['view-teacher',teacher]);
  }
   
  


 
}

