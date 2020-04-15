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
  constructor(private router:Router,private route:ActivatedRoute,private service:AdminServiceService ) { }


  ngOnInit(): void {
  }

  onSubmit()
  {

  this.service.getTeacher(this.teacherId).subscribe(data=>{this.result=data;console.log(data)},error=>console.log(error));
  alert("success")

  }
}
