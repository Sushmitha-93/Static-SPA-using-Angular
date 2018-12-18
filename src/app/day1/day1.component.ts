import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day1',
  templateUrl: './day1.component.html',
  styleUrls: ['./day1.component.css']
})
export class Day1Component implements OnInit {

  today: Date = new Date(); //interpollation
  helloImg: String = "/assets/Hello!!!.png"; // property binding
  eventBindingCode: String = "sayHello(){alert('Hello there!!')}"; //event binding
  myText: String = 'Enter Text'; //2-way binding

  counter: number = 0;

  //event binding function
  sayHello() {
    alert("Hello there!")
  }

  //counter functions
  increment() {
    this.counter++;
  }
  decrement() {
    this.counter--;
  }



  constructor() { }

  ngOnInit() {
  }

}
