import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-view-teacher',
  templateUrl: './view-teacher.component.html',
  styleUrls: ['./view-teacher.component.css']
})
export class ViewTeacherComponent implements OnInit {
teacher:Employee;
  constructor() { }

  ngOnInit(): void {
    
    this.teacher=JSON.parse(sessionStorage.getItem("teacher"))
  
    sessionStorage.removeItem("teacher")
  }

  
}
