import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-demo',
  templateUrl: './pipes-demo.component.html',
  styleUrls: ['./pipes-demo.component.css']
})
export class PipesDemoComponent {


  strData : String;
  numData : number;
  date :Date;

  constructor() {
  this.strData="Hello! welcome to the world of SPA";
  this.numData=Math.PI;
  this.date=new Date();


   }

  
}
