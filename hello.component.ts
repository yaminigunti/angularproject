import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent  {

  userName:string;

  constructor() { 
    this.userName="Yamini";
  }
  greet =()=>{
    alert(`Hello! ${this.userName}! Goodmorning`);
  }
  
}
