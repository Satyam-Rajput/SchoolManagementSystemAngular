import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { User } from '../user';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
message:string;
user1:User;

  constructor(private route:ActivatedRoute,private router:Router) {
  
   this.user1=JSON.parse(sessionStorage.getItem("admin"));
   
     
  
   }

  ngOnInit(): void {
 
  }

}
