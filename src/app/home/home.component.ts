import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  imagePath1 = '/assets/images/college4.jpg';
  imagePath2 = '/assets/images/college8.jpg';
  imagePath3 = '/assets/images/school6.jpg';
  imagePath4 = '/assets/images/college5.jpg';
  constructor() { }

  ngOnInit(): void {
  }

}
