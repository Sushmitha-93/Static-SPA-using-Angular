import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day2',
  templateUrl: './day2.component.html',
  styleUrls: ['./day2.component.css']
})
export class Day2Component implements OnInit {

  superHeros = ["Superman", "Batman", "Wonder woman", "Flash"]; // *ngFor

  myColor: String = 'pink'; //[ngStyle] mapping property to a variable

  num: String = '0'; // *ngSwitch

  oddOrEven: String = 'Odd or Even?'; //[ngStyle]
  oddOrEvenColor: String = 'pink';

  cities: any[] = [
    { 'city': 'Delhi', 'country': 'India' },
    { 'city': 'New York', 'country': 'USA' },
    { 'city': 'Sydney', 'country': 'Australia' },
    { 'city': 'Bengaluru', 'country': 'India' },
    { 'city': 'London', 'country': 'UK' },
    { 'city': 'Canberra', 'country': 'Australia' },
    { 'city': 'San-Fransico', 'country': 'USA' }
  ];

  getCityColor(city: any) {
    switch (city) {
      case 'India': return 'turquoise';
      case 'USA': return 'red';
      case 'Australia': return 'yellow';
      case 'UK': return 'blue';
    }
  }

  oddOrEvenFun(num: number) {
    if (num % 2 == 0) {
      this.oddOrEven = 'Even!';
      this.oddOrEvenColor = 'aqua'
    }
    else {
      this.oddOrEven = 'Odd!';
      this.oddOrEvenColor = 'greenyellow';
    }
  }



  constructor() { }

  ngOnInit() {
  }

}
