import { Component, OnInit } from '@angular/core';
declare function showImage(): any;
declare function testWrong(): any;
declare function  testRight(): any;
declare function showImage2(): any;
@Component({
  selector: 'app-money1',
  templateUrl: './money1.component.html',
  styleUrls: ['./money1.component.css']
})
export class Money1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    showImage()
    showImage2()
    // testWrong() 
    // testRight()
   
    
  }

}
