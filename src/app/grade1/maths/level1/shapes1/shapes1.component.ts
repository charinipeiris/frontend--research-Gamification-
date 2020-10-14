import { makeBindingParser } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { faMarsStroke } from '@fortawesome/free-solid-svg-icons';
import * as $ from "jquery";
import {GamesService} from "../../../../services/games.service";

@Component({
  selector: 'app-shapes1',
  templateUrl: './shapes1.component.html',
  styleUrls: ['./shapes1.component.css']
})
export class Shapes1Component implements OnInit {
   totalmarks: any;
  constructor(private gamesService: GamesService) { 
    
  }


  ngOnInit(){   
   
  
  
}


markstot(){
// document.getElementById("reset").click;
var time = document.getElementById("display").innerHTML;
console.log(time);
document.getElementById("time-back").style.visibility = "hidden";

var total = 0;

let element1 = <HTMLInputElement> document.getElementById("mark1");  
let element2 = <HTMLInputElement> document.getElementById("mark2");  
let element3 = <HTMLInputElement> document.getElementById("mark3");  

let element4 = <HTMLInputElement> document.getElementById("unmark1");  
let element5 = <HTMLInputElement> document.getElementById("unmark2");  
let element6 = <HTMLInputElement> document.getElementById("unmark3");  

if  (element1.checked ){
  total = total + 1;
 }

if (element2.checked)
    total = total + 1;

if (element3.checked)
    total = total + 1;



console.log(total);

// let username = localStorage.getItem('uname');
// this.gamesService.submitGame({    
//   completed_games : [
//   {
//   game_id : "s02",
//   marks : total,
//   time_spent : time
//   }
// ]},username).subscribe(res=>{console.log("success")}, err=>{console.log("error")});




var chk = document.querySelectorAll('input[type="checkbox"]:checked').length;
if (chk==3){
 
  if (total == 3){
var modal = document.getElementById("myModal");
var subbtn = document.getElementById("submit");
modal.style.display = "block";
subbtn.style.display = "none";
setTimeout(function(){
  document.getElementById('coin1').style.visibility = "visible";
  },1000);

setTimeout(function(){
  document.getElementById('coin2').style.visibility = "visible";
  },1500);

setTimeout(function(){
    document.getElementById('coin3').style.visibility = "visible";
    },2000);

document.getElementById("perf-time").innerHTML = time;
}
else if (total == 2){
var modal = document.getElementById("myModal");
modal.style.display = "block";
setTimeout(function(){
  document.getElementById('coin1').style.visibility = "visible";
  },1000);

setTimeout(function(){
  document.getElementById('coin2').style.visibility = "visible";
  },1500);

  setTimeout(function(){
    document.getElementById('coin3').style.visibility = "visible";
    },1900);
  document.getElementById('coin3').style.opacity ="0.3";
  document.getElementById("perf-time").innerHTML = time;
}

else if(total == 1){
var modal = document.getElementById("myModal");
modal.style.display = "block";
  setTimeout(function(){
    document.getElementById('coin1').style.visibility = "visible";
    },1000);
  
    setTimeout(function(){
    document.getElementById('coin2').style.visibility = "visible";
      },1500);
      document.getElementById('coin2').style.opacity ="0.3";

    setTimeout(function(){
      document.getElementById('coin3').style.visibility = "visible";
        },1900);
      document.getElementById('coin3').style.opacity ="0.3";
      document.getElementById("perf-time").innerHTML = time;
    
  
}
else if(total == 0){
  var modal = document.getElementById("myModal");
  modal.style.display = "block";
    setTimeout(function(){
      document.getElementById('sad_coin').style.visibility = "visible";
      },1000);

      document.getElementById("perf-time").innerHTML = time;
  }

}
else {
  document.getElementById('alert').style.visibility = "visible";
  document.getElementById('alert').style.zIndex = "5";
}






}





}

