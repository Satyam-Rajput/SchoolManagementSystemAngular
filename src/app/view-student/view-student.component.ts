import { Component, OnInit } from '@angular/core';
import {Route,Router,ActivatedRoute} from '@angular/router';
import {Student} from '../student';
@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent implements OnInit {

student:Student;
  constructor() { }

  ngOnInit(): void {

    this.student=JSON.parse(sessionStorage.getItem("student"))
  

    sessionStorage.removeItem("student")
  }
  

 
}
