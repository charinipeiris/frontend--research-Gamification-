import { Component, OnInit } from '@angular/core';
declare function play_intro(): any;

@Component({
  selector: 'app-shapes1',
  templateUrl: './shapes1.component.html',
  styleUrls: ['./shapes1.component.css']
})
export class Shapes1Component implements OnInit {
  constructor() { }

  ngOnInit(){   
    play_intro();
  }
  }
 
  


