
      function show_moneyL1(Page1, Page2) {
          document.getElementById(Page1).style.display='block';
          document.getElementById(Page2).style.display='none'; 
        }
      
      function test1_money()
      {
      document.f1.clip1.src="/assets/images/5.png";
      document.f1.brown.src="/assets/images/trans.svg";
      document.f1.red.src="/assets/images/10.png";
      document.f1.rw1.src="/assets/images/yay_bunny2.gif";
      document.getElementById("a5").style.pointerEvents = "none";
      document.getElementById("mark1").checked = true; //kid gave right answer 
      
      }
      function test2_money()
      {
      document.f1.clip1.src="/assets/images/10.png";
      document.f1.red.src="/assets/images/trans.svg";
      document.f1.brown.src="/assets/images/5.png";
      document.f1.rw1.src="/assets/images/w.gif";
      document.getElementById("a10").style.pointerEvents = "none";
      document.getElementById("unmark1").checked = true; //kid gave wrong answer 
      }
      
      function test3_money()
      {
      document.f1.clip2.src="/assets/images/2.jpg";
      document.f1.rect.src="/assets/images/trans.svg";
      document.f1.sqr.src="/assets/images/5.png";
      document.f1.rw2.src="/assets/images/yay_bunny2.gif";
      document.getElementById("b2").style.pointerEvents = "none";
      document.getElementById("mark2").checked = true; //kid gave right answer 
      
      }
      function test4_money()
      {
      document.f1.clip2.src="/assets/images/5.png";
      document.f1.sqr.src="/assets/images/trans.svg";
      document.f1.rect.src="/assets/images/2.jpg";
      document.f1.rw2.src="/assets/images/w.gif";
      document.getElementById("b5").style.pointerEvents = "none";
      document.getElementById("unmark2").checked = true; //kid gave wrong answer 
      }
      
      function test5_money()
      {
      document.f1.clip3.src="/assets/images/5.png";
      document.f1.leaf1.src="/assets/images/trans.svg";
      document.f1.leaf2.src="/assets/images/10.png";
      document.f1.rw3.src="/assets/images/w.gif";
      document.getElementById("c5").style.pointerEvents = "none";
      document.getElementById("unmark3").checked = true; //kid gave wrong answer 
      
      }
      function test6_money()
      {
      document.f1.clip3.src="/assets/images/10.png";
      document.f1.leaf2.src="/assets/images/trans.svg";
      document.f1.leaf1.src="/assets/images/5.png";
      document.f1.rw3.src="/assets/images/yay_bunny2.gif";
      document.getElementById("c10").style.pointerEvents = "none";  
      document.getElementById("mark3").checked = true; //kid gave right answer 
      }
      
      
      $(document).ready(function(){
          $(document).on('click',"#question-money",function () {
          var audio = document.getElementById("quest_audio");
          if (audio.paused) audio.play();
          else audio.pause();
      });
      });
      
  