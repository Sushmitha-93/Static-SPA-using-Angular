import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day2',
  templateUrl: './day2.component.html',
  styleUrls: ['./day2.component.css']
})
export class Day2Component implements OnInit {

  superHeros = ["Superman", "Batman", "Wonder woman", "Flash"]; // *ngFor

  num: String='0';

  constructor() { }

  ngOnInit() {
  }

}
