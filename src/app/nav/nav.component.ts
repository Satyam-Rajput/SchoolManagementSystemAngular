import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  appTitle: String = 'School Management System';
  imagePath = '/assets/images/logo1.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
