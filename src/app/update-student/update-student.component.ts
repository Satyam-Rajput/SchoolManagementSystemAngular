import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import { AdminServiceService } from '../admin-service.service';
import {Student} from '../student';
@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

  studentId:number;
  student:Student=new Student();
error:string;
output:string;
  confirmPassword:string;
  result:any;
  firstName:string;
  lastName:string;
  password:string;
  email:string;
  dateOfBirth:Date;
  phoneNumber:number;
  houseNumber:number;
  pincode:number;
  streetName:string;
  fatherName:string;
  studentClass:string;
  city:string;
  country:string;
  state:string;
  constructor(private router:Router,private route:ActivatedRoute,private service:AdminServiceService ) {


  
   }



  ngOnInit(): void {
    
    this.studentId=this.route.snapshot.params['id'];
    this.service.getStudent(this.studentId).subscribe(data=>{this.result=data;console.log(data)},error=>console.log(error));

 

  }


setDetails()
{
    

 this.student.city=this.city;
 this.student.country=this.country;
 this.student.dateOfBirth=this.dateOfBirth;
 
 this.student.email=this.email;
 this.student.fatherName=this.fatherName;
 this.student.firstName=this.firstName;
 this.student.houseNumber=this.houseNumber;
 
 this.student.lastName=this.lastName;
 this.student.password=this.password;
 this.student.phoneNumber=this.phoneNumber;
 this.student.pincode=this.pincode;
 this.student.state=this.state;
 this.student.streetName=this.streetName;
 this.student.studentClass=this.studentClass;




}
  onSubmit()
  {
    if(this.confirmPassword==this.password&&this.password!=null&&this.password!=""){
     this.setDetails();
      this.service.updateStudent(this.studentId,this.student).subscribe(data=>{console.log(data); this.result=data},error=>console.log(error));
    
    if(this.result)

    {
      this.output="Succcessfully Updated";
      this.router.navigate(['display-student']);
      
    }
    else
    {this.output="failed to Update ! try Again";}
    
    
  }

else
  {
    this.error="Pasword doesn't match"
  }
  }
}
