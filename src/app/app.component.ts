import { Component } from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'school';

appTitle: String = 'School Management System';
  imagePath = '/assets/images/logo1.jpg';
  constructor(private router:Router) { }

  ngOnInit(): void {
  
  }

}
