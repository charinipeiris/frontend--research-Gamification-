import { Component, OnInit } from '@angular/core';
declare function test1(): any;
declare function test2(): any;
declare function test3(): any;
declare function ov(): any;
declare function out(): any;


@Component({
  selector: 'app-countingconcepts1',
  templateUrl: './countingconcepts1.component.html',
  styleUrls: ['./countingconcepts1.component.css']
})
export class Countingconcepts1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    ov()
    out();
    test1();
    test2();
    test3();
  }

}
