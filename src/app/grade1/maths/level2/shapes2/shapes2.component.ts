import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shapes2',
  templateUrl: './shapes2.component.html',
  styleUrls: ['./shapes2.component.css']
})
export class Shapes2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }



markstot(){
  var total = parseInt(document.getElementById("marksArea").innerHTML)

 
    if (total == 8){

  var modal = document.getElementById("myModal");
  var subbtn = document.getElementById("final_button");
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
        },2200);
  
  
  }
  else if (total == 7){
    var modal = document.getElementById("myModal");
    var subbtn = document.getElementById("final_button");
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
          },2200);
  }
  
  else if(total == 6){
  var modal = document.getElementById("myModal");
  modal.style.display = "block";
    setTimeout(function(){
      document.getElementById('coin1').style.visibility = "visible";
      },1000);
    
      setTimeout(function(){
        document.getElementById('coin2').style.visibility = "visible";
        },1000);
      
     setTimeout(function(){
          document.getElementById('coin3').style.visibility = "visible";
          },1000);

     setTimeout(function(){
         document.getElementById('coin4').style.visibility = "visible";
            },1000);
     document.getElementById('coin4').style.opacity ="0.3";
      
    
  }
  else if(total == 5){
    var modal = document.getElementById("myModal");
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
      setTimeout(function(){
        document.getElementById('coin1').style.visibility = "visible";
        },1000);
      
        setTimeout(function(){
          document.getElementById('coin2').style.visibility = "visible";
          },1000);
        
       setTimeout(function(){
            document.getElementById('coin3').style.visibility = "visible";
            },1000);
  
       setTimeout(function(){
           document.getElementById('coin4').style.visibility = "visible";
              },1000);
       document.getElementById('coin4').style.opacity ="0.3";
    }
  
    else if (total==4) {
      var modal = document.getElementById("myModal");
      modal.style.display = "block";
        setTimeout(function(){
          document.getElementById('coin1').style.visibility = "visible";
          },1000);
        
          setTimeout(function(){
            document.getElementById('coin2').style.visibility = "visible";
            },1000);
          
         setTimeout(function(){
              document.getElementById('coin3').style.visibility = "visible";
              },1000);
        document.getElementById('coin3').style.opacity ="0.3";
    
         setTimeout(function(){
             document.getElementById('coin4').style.visibility = "visible";
                },1000);
         document.getElementById('coin4').style.opacity ="0.3";
    }
  
    else if (total == 3){
      var modal = document.getElementById("myModal");
      modal.style.display = "block";
        setTimeout(function(){
          document.getElementById('coin1').style.visibility = "visible";
          },1000);
        
          setTimeout(function(){
            document.getElementById('coin2').style.visibility = "visible";
            },1000);
          
         setTimeout(function(){
              document.getElementById('coin3').style.visibility = "visible";
              },1000);
        document.getElementById('coin3').style.opacity ="0.3";
    
         setTimeout(function(){
             document.getElementById('coin4').style.visibility = "visible";
                },1000);
         document.getElementById('coin4').style.opacity ="0.3";
    }

    else if (total == 2){
      var modal = document.getElementById("myModal");
      modal.style.display = "block";
        setTimeout(function(){
          document.getElementById('coin1').style.visibility = "visible";
          },1000);
        
          setTimeout(function(){
            document.getElementById('coin2').style.visibility = "visible";
            },1000);
            document.getElementById('coin2').style.opacity ="0.3";
          
         setTimeout(function(){
              document.getElementById('coin3').style.visibility = "visible";
              },1000);
        document.getElementById('coin3').style.opacity ="0.3";
    
         setTimeout(function(){
             document.getElementById('coin4').style.visibility = "visible";
                },1000);
         document.getElementById('coin4').style.opacity ="0.3";
    }
   
    else if (total ==1){
      var modal = document.getElementById("myModal");
      modal.style.display = "block";
        setTimeout(function(){
          document.getElementById('coin1').style.visibility = "visible";
          },1000);
        
          setTimeout(function(){
            document.getElementById('coin2').style.visibility = "visible";
            },1000);
            document.getElementById('coin2').style.opacity ="0.3";
          
         setTimeout(function(){
              document.getElementById('coin3').style.visibility = "visible";
              },1000);
        document.getElementById('coin3').style.opacity ="0.3";
    
         setTimeout(function(){
             document.getElementById('coin4').style.visibility = "visible";
                },1000);
         document.getElementById('coin4').style.opacity ="0.3";
      
    }
    else if(total == 0){
      var modal = document.getElementById("myModal");
      modal.style.display = "block";
        setTimeout(function(){
          document.getElementById('sad_coin').style.visibility = "visible";
          },1000);
    }
    else{
      
    }
  
  
  }
  
}
