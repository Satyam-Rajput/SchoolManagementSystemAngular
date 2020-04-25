import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { User } from '../user';
import { AdminServiceService } from '../admin-service.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
message:string;
user1:User;
employeeCount:any;
studentCount:any;

  constructor(private route:ActivatedRoute,private router:Router,private service:AdminServiceService) {
  
   
   
     
  
   }

  ngOnInit(): void {
    
  }

  

}
