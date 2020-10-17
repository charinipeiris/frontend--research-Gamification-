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
  totalmarks: any;
  constructor() { 
  }
  ngOnInit(){   
}


markstotc1(){

  var total1 = 0;

  
let element1 = <HTMLInputElement> document.getElementById("mark1");  
let element2 = <HTMLInputElement> document.getElementById("mark2");  
let element3 = <HTMLInputElement> document.getElementById("mark3");  
let element4 = <HTMLInputElement> document.getElementById("mark4"); 
let element5 = <HTMLInputElement> document.getElementById("mark5"); 

let element6 = <HTMLInputElement> document.getElementById("unmark1");  
let element7 = <HTMLInputElement> document.getElementById("unmark2");  
let element8 = <HTMLInputElement> document.getElementById("unmark3"); 
let element9 = <HTMLInputElement> document.getElementById("unmark4");  
let element10 = <HTMLInputElement> document.getElementById("unmark5"); 
  
if (element1.checked ){
  total1 = total1 + 1;
 }
else if ((!element1.checked) && (!element6.checked)){
  // document.getElementById('alert1').style.visibility = "visible";
}

if (element2.checked)
    total1 = total1 + 1;

else if  ((!element2.checked) && (!element7.checked)){
  // document.getElementById('alert2').style.visibility = "visible";

}
if (element3.checked)
    total1 = total1 + 1;

else if  ((!element3.checked) && (!element8.checked)){
  // document.getElementById('alert3').style.visibility = "visible";
}

if (element4.checked)
    total1 = total1 + 1;

else if  ((!element3.checked) && (!element9.checked)){
  // document.getElementById('alert3').style.visibility = "visible";
}

if (element5.checked)
    total1 = total1 + 1;

else if  ((!element5.checked) && (!element10.checked)){
  // document.getElementById('alert3').style.visibility = "visible";
}

console.log(total1);
var chk = document.querySelectorAll('input[type="checkbox"]:checked').length;
if (chk==5){
  if (total1 == 5){
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

    setTimeout(function(){
          document.getElementById('coin4').style.visibility = "visible";
          },2000);

    setTimeout(function(){
            document.getElementById('coin5').style.visibility = "visible";
            },2200);
    
    }


  else if (total1 == 4){
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
    
    setTimeout(function(){
          document.getElementById('coin4').style.visibility = "visible";
          },2000);

    setTimeout(function(){
            document.getElementById('coin5').style.visibility = "visible";
            },2200);
    document.getElementById('coin5').style.opacity ="0.3";
    }
    

  if (total1 == 3){
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

setTimeout(function(){
    document.getElementById('coin4').style.visibility = "visible";
          },2000);
    document.getElementById('coin5').style.opacity ="0.3";
setTimeout(function(){
    document.getElementById('coin5').style.visibility = "visible";
            },2200);
    document.getElementById('coin5').style.opacity ="0.3";

}
else if (total1 == 2){
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
  setTimeout(function(){
    document.getElementById('coin4').style.visibility = "visible";
          },2000);
    document.getElementById('coin5').style.opacity ="0.3";
setTimeout(function(){
    document.getElementById('coin5').style.visibility = "visible";
            },2200);
    document.getElementById('coin5').style.opacity ="0.3";
}

else if(total1 == 1){
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
      setTimeout(function(){
        document.getElementById('coin4').style.visibility = "visible";
              },2000);
        document.getElementById('coin5').style.opacity ="0.3";
    setTimeout(function(){
        document.getElementById('coin5').style.visibility = "visible";
                },2200);
        document.getElementById('coin5').style.opacity ="0.3";
    
  
}
else if(total1 == 0){
  var modal = document.getElementById("myModal");
  modal.style.display = "block";
    setTimeout(function(){
      document.getElementById('sad_coin').style.visibility = "visible";
      },1000);
  }

}
else {
  document.getElementById('alert').style.visibility = "visible";
}

}
  
  }



