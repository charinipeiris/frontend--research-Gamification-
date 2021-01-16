import { Component, OnInit, ViewChild } from '@angular/core';
import { GamesService } from "../../../../services/games.service";
import { EmotiondetectorComponent } from '../../../../emotiondetector/emotiondetector.component';



@Component({
  selector: 'app-words1',
  templateUrl: './words1.component.html',
  styleUrls: ['./words1.component.css']
})
export class Words1Component implements OnInit {
  totalmarks: any;
  @ViewChild(EmotiondetectorComponent) child: EmotiondetectorComponent;
  constructor(private gamesService: GamesService){}

  ngOnInit(): void {
  }
  markstot_words2_g1() {
    // document.getElementById("reset").click;
    var time = document.getElementById("display").innerHTML;
    // console.log(time);
    document.getElementById("time-back").style.visibility = "hidden";
    var clicksarray = document.getElementById("clickarray").innerHTML ;
    // console.log(clicksarray);


    var total = 0;
    var final_total=0;

    let element1 = <HTMLInputElement>document.getElementById("mark1");
    let element2 = <HTMLInputElement>document.getElementById("mark2");
    let element3 = <HTMLInputElement>document.getElementById("mark3");
    let element4 = <HTMLInputElement>document.getElementById("mark4");
    let element5 = <HTMLInputElement>document.getElementById("mark5");
    let element6 = <HTMLInputElement>document.getElementById("mark6");
    let element7 = <HTMLInputElement>document.getElementById("mark7");
    let element8 = <HTMLInputElement>document.getElementById("mark8");
    let element9 = <HTMLInputElement>document.getElementById("mark9");
    if (element1.checked) {
      total = total + 1;
    }

    if (element2.checked)
      total = total + 1;

    if (element3.checked)
      total = total + 1;

    if (element4.checked)
      total = total + 1;

    if (element5.checked)
      total = total + 1;

    if (element6.checked)
      total = total + 1;

      if (element7.checked)
      total = total + 1;

      if (element8.checked)
      total = total + 1;

      if (element9.checked)
      total = total + 1;
    // console.log(total);

    if (total==9 || total==8 || total == 7){
      final_total=3;
    }
    if (total==6 || total==5 || total == 4){
      final_total=2;
    }
    if (total==3 || total==2 || total == 1){
      final_total=1;
    }
    if (total==0){
      final_total=0;
    }
// console.log(final_total);
    // let username = localStorage.getItem('uname');
    // this.gamesService.submitGame({    
    //   completed_games : [
    //   {
    //   game_id : "S22",
    //   marks : final_total,
    //   time_spent : time,
    //   emotions: this.child.emotions,
    //   max_idle_time :  clicksarray
    //   }
    // ]},username).subscribe(res=>{console.log("success")}, err=>{console.log("error")});




    var chk = document.querySelectorAll('input[type="checkbox"]:checked').length;
    var modal = document.getElementById("myModal");
    var subbtn = document.getElementById("submit");
    if (chk == 9) {


      if (total == 9){
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
                },1800);
          
                    document.getElementById("perf-time").innerHTML = time;
        } 

      if (total == 8){
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
                },1800);
          
                    document.getElementById("perf-time").innerHTML = time;
        } 
  if (total == 7){
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
                },1800);
          
                    document.getElementById("perf-time").innerHTML = time;
        } 
        if (total == 6){
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
                    },1800);
                  document.getElementById('coin3').style.opacity ="0.3";
                   document.getElementById("perf-time").innerHTML = time;
          }  
          
          if (total == 5){
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
                      },1800);
                    document.getElementById('coin3').style.opacity ="0.3";
                     document.getElementById("perf-time").innerHTML = time;
            } 
  if (total == 4){
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
              },1800);
            document.getElementById('coin3').style.opacity ="0.3";
             document.getElementById("perf-time").innerHTML = time;
    }
    if (total == 3){
      modal.style.display = "block";
      subbtn.style.display = "none";
      setTimeout(function(){
        document.getElementById('coin1').style.visibility = "visible";
        },1000);
      
      setTimeout(function(){
        document.getElementById('coin2').style.visibility = "visible";
        },1500);
        document.getElementById('coin2').style.opacity ="0.3";
      
      setTimeout(function(){
            document.getElementById('coin3').style.visibility = "visible";
              },1800);
            document.getElementById('coin3').style.opacity ="0.3";
      
        // document.getElementById('coin6').style.opacity ="0.3";
        document.getElementById("perf-time").innerHTML = time;
      
      }
    
    if (total == 2){
      modal.style.display = "block";
      subbtn.style.display = "none";
      setTimeout(function(){
        document.getElementById('coin1').style.visibility = "visible";
        },1000);
      
      setTimeout(function(){
        document.getElementById('coin2').style.visibility = "visible";
        },1500);
        document.getElementById('coin2').style.opacity ="0.3";
      
      setTimeout(function(){
            document.getElementById('coin3').style.visibility = "visible";
              },1800);
            document.getElementById('coin3').style.opacity ="0.3";
      
        // document.getElementById('coin6').style.opacity ="0.3";
        document.getElementById("perf-time").innerHTML = time;
      
      }
  if (total == 1){
modal.style.display = "block";
subbtn.style.display = "none";
setTimeout(function(){
  document.getElementById('coin1').style.visibility = "visible";
  },1000);

setTimeout(function(){
  document.getElementById('coin2').style.visibility = "visible";
  },1500);
  document.getElementById('coin2').style.opacity ="0.3";

    document.getElementById("perf-time").innerHTML = time;
setTimeout(function(){
      document.getElementById('coin3').style.visibility = "visible";
        },1800);
      document.getElementById('coin3').style.opacity ="0.3";

  // document.getElementById('coin6').style.opacity ="0.3";
  document.getElementById("perf-time").innerHTML = time;

}


else if(total == 0){
  modal.style.display = "block";
  setTimeout(function(){
    document.getElementById('coin1').style.visibility = "visible";
    },1000);
    document.getElementById('coin1').style.opacity ="0.3";
  
  setTimeout(function(){
    document.getElementById('coin2').style.visibility = "visible";
      },1500);
      document.getElementById('coin2').style.opacity ="0.3";
        document.getElementById("perf-time").innerHTML = time;

  setTimeout(function(){
          document.getElementById('coin3').style.visibility = "visible";
            },1800);
          document.getElementById('coin3').style.opacity ="0.3";
  
           document.getElementById("perf-time").innerHTML = time;
          

  }

}
else {

}


this.child.endgame(); 
}


}
