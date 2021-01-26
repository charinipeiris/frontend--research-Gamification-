import { Component, OnInit, ViewChild } from '@angular/core';
import { GamesService } from "../../../../services/games.service";
import { EmotiondetectorComponent } from '../../../../emotiondetector/emotiondetector.component';


@Component({
  selector: 'app-env-grade1-level-game5',
  templateUrl: './env-grade1-level-game5.component.html',
  styleUrls: ['./env-grade1-level-game5.component.css']
})
export class EnvGrade1LevelGame5Component implements OnInit {

  totalmarks: any;
  @ViewChild(EmotiondetectorComponent) child: EmotiondetectorComponent;
  constructor(private gamesService: GamesService){}

  ngOnInit(): void {
  }

  markstot_g1l1game5() {
    // document.getElementById("reset").click;
    var time = document.getElementById("display").innerHTML;
    // console.log(time);
    document.getElementById("time-back").style.visibility = "hidden";
    var clicksarray = document.getElementById("clickarray").innerHTML ;
    // console.log(clicksarray);


    var total = 0;

    let element1 = <HTMLInputElement>document.getElementById("mark1");
    let element2 = <HTMLInputElement>document.getElementById("mark2");
    let element3 = <HTMLInputElement>document.getElementById("mark3");
    let element4 = <HTMLInputElement>document.getElementById("mark4");
    let element5 = <HTMLInputElement>document.getElementById("mark5");

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

    // console.log(total);

    // let username = localStorage.getItem('uname');
    // this.gamesService.submitGame({    
    //   completed_games : [
    //   {
    //   game_id : "E15",
    //   marks : total,
    //   time_spent : time,
    //   emotions: this.child.emotions,
    //   max_idle_time :  clicksarray
    //   }
    // ]},username).subscribe(res=>{console.log("success")}, err=>{console.log("error")});




    var chk = document.querySelectorAll('input[type="checkbox"]:checked').length;
    var modal = document.getElementById("myModal");
    var subbtn = document.getElementById("submit");
    if (chk == 5) {

     
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
        },1900);
    
    setTimeout(function(){
          document.getElementById('coin4').style.visibility = "visible";
          },2000);

   setTimeout(function(){
        document.getElementById('coin5').style.visibility = "visible";
        },2400);

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
          },1900);
      
      setTimeout(function(){
            document.getElementById('coin4').style.visibility = "visible";
            },2000);
  
     setTimeout(function(){
          document.getElementById('coin5').style.visibility = "visible";
          },2400);
          document.getElementById('coin5').style.opacity ="0.3";
  
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
        
        setTimeout(function(){
            document.getElementById('coin3').style.visibility = "visible";
            },1900);
        
        setTimeout(function(){
              document.getElementById('coin4').style.visibility = "visible";
              },2000);
              document.getElementById('coin4').style.opacity ="0.3";
    
       setTimeout(function(){
            document.getElementById('coin5').style.visibility = "visible";
            },2400);
            document.getElementById('coin5').style.opacity ="0.3";
    
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
          
          setTimeout(function(){
              document.getElementById('coin3').style.visibility = "visible";
              },1900);
              document.getElementById('coin3').style.opacity ="0.3";
          
          setTimeout(function(){
                document.getElementById('coin4').style.visibility = "visible";
                },2000);
                document.getElementById('coin4').style.opacity ="0.3";
      
         setTimeout(function(){
              document.getElementById('coin5').style.visibility = "visible";
              },2400);
              document.getElementById('coin5').style.opacity ="0.3";
      
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
            
            setTimeout(function(){
                document.getElementById('coin3').style.visibility = "visible";
                },1900);
                document.getElementById('coin3').style.opacity ="0.3";
            
            setTimeout(function(){
                  document.getElementById('coin4').style.visibility = "visible";
                  },2000);
                  document.getElementById('coin4').style.opacity ="0.3";
        
           setTimeout(function(){
                document.getElementById('coin5').style.visibility = "visible";
                },2400);
                document.getElementById('coin5').style.opacity ="0.3";
        
                  document.getElementById("perf-time").innerHTML = time;
            }  
    
            if (total == 0){
              modal.style.display = "block";
              subbtn.style.display = "none";
              setTimeout(function(){
                document.getElementById('coin1').style.visibility = "visible";
                },1000);
                document.getElementById('coin1').style.opacity ="0.3";
              
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
                    document.getElementById('coin4').style.opacity ="0.3";
          
             setTimeout(function(){
                  document.getElementById('coin5').style.visibility = "visible";
                  },2400);
                  document.getElementById('coin5').style.opacity ="0.3";
          
                    document.getElementById("perf-time").innerHTML = time;
              }  

}
else {

}


this.child.endgame(); 
}

}

