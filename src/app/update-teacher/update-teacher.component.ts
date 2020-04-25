import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import {Router,ActivatedRoute} from '@angular/router';
import { AdminServiceService } from '../admin-service.service';
@Component({
  selector: 'app-update-teacher',
  templateUrl: './update-teacher.component.html',
  styleUrls: ['./update-teacher.component.css']
})
export class UpdateTeacherComponent implements OnInit {

  confirmPassword:string;
  teacherId:number;
  teacher:Employee=new Employee();
  result:any;
  error:string;
  firstName:string;
  lastName:string;
  password:string;
  email:string;
  dateOfBirth:Date;
  phoneNumber:number;
  houseNumber:number;
  pincode:number;
  streetName:string;
  city:string;
  country:string;
  state:string;
  constructor(private router:Router,private route:ActivatedRoute,private service:AdminServiceService ) {
  }

  ngOnInit(): void {
   
   this. teacherId=  JSON.parse(sessionStorage.getItem('id'));//this.route.snapshot.params['id'];
  this.service.getTeacher(this.teacherId).subscribe(data=>{console.log(data);this.result=data},error=>console.log(error));
   
   
   
   
  }


setDetails()
{
 this.teacher.lastName=this.lastName;
  this.teacher.firstName=this.firstName;
  this.teacher.city=this.city;
  this.teacher.country=this.country;
  this.teacher.dateOfBirth=this.dateOfBirth;

  this.teacher.email=this.email;
  this.teacher.houseNumber=this.houseNumber;
  this.teacher.phoneNumber=this.phoneNumber;
  this.teacher.password=this.password;
  this.teacher.pincode=this.pincode;
  this.teacher.state=this.state;
  this.teacher.streetName=this.streetName;

}

  onSubmit()
  {
    if(this.confirmPassword==this.password&&this.password!=null&&this.password!=""
      ){
        this.setDetails()
    this.service.updateTeacher(this.teacherId,this.teacher).subscribe(data=>{console.log(data);this.result=data},error=>console.log(error));

    if(this.result)
    {
      this.error="updated Successfully"
      this.router.navigate(['display-teacher']);
    }
    else
    {this.error="failed To Update! try Again"}
    
  }
  else
  {
    this.error="Pasword doesn't match"
  }
}}
