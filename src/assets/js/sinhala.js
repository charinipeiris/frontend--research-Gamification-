//---------------------Grade 1-------------------------
//------------level 1----------------------------------------
//--------------Grade 1 level 1 -Sentences--------------------------

// function show_sinhalaL1(Page1, Page2) {
//     document.getElementById(Page1).style.display='block';
//     document.getElementById(Page2).style.display='none'; 
//   }
  
  function test1_sinhala()
  {
  document.f1.clip1.src="/assets/images/child_running.PNG";
  document.f1.brown.src="/assets/images/trans.svg";
  document.f1.red.src="/assets/images/child_crying.PNG";
  document.f1.rw1.src="/assets/images/yay_bunny2.gif";
  document.getElementById("crychild").style.pointerEvents = "none";
  document.getElementById("mark1").checked = true; //kid gave right answer 
  var myAudio = new Audio('/assets/audio/yay.mp3');
  myAudio.play();
  enableSubmit_sinhalasentences11()
  
  }
  function test2_sinhala()
  {
  document.f1.clip1.src="/assets/images/child_crying.PNG";
  document.f1.red.src="/assets/images/trans.svg";
  document.f1.brown.src="/assets/images/child_running.PNG";
  document.f1.rw1.src="/assets/images/w.gif";
  document.getElementById("runchild").style.pointerEvents = "none";
  document.getElementById("unmark1").checked = true; //kid gave wrong answer 
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_sinhalasentences11()
  }
  
  function test3_sinhala()
  {
  document.f1.clip2.src="/assets/images/mother-cooking.PNG";
  document.f1.rect.src="/assets/images/trans.svg";
  document.f1.sqr.src="/assets/images/mother-scolding.PNG";
  document.f1.rw2.src="/assets/images/yay_bunny2.gif";
  document.getElementById("blamemother").style.pointerEvents = "none";
  document.getElementById("mark2").checked = true; //kid gave right answer 
  var myAudio = new Audio('/assets/audio/yay.mp3');
  myAudio.play();
  enableSubmit_sinhalasentences11()
  
  }
  function test4_sinhala()
  {
  document.f1.clip2.src="/assets/images/mother-scolding.PNG";
  document.f1.sqr.src="/assets/images/trans.svg";
  document.f1.rect.src="/assets/images/mother-cooking.PNG";
  document.f1.rw2.src="/assets/images/w.gif";
  document.getElementById("cookmother").style.pointerEvents = "none";
  document.getElementById("unmark2").checked = true; //kid gave wrong answer 
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_sinhalasentences11()
  }
  
  function test5_sinhala()
  {
  document.f1.clip3.src="/assets/images/sun.PNG";
  document.f1.leaf1.src="/assets/images/trans.svg";
  document.f1.leaf2.src="/assets/images/moon.PNG";
  document.f1.rw3.src="/assets/images/w.gif";
  document.getElementById("moon").style.pointerEvents = "none";
  document.getElementById("unmark3").checked = true; //kid gave wrong answer 
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_sinhalasentences11()
  }
  function test6_sinhala()
  {
  document.f1.clip3.src="/assets/images/moon.PNG";
  document.f1.leaf2.src="/assets/images/trans.svg";
  document.f1.leaf1.src="/assets/images/sun.PNG";
  document.f1.rw3.src="/assets/images/yay_bunny2.gif";
  document.getElementById("sun").style.pointerEvents = "none";  
  document.getElementById("mark3").checked = true; //kid gave right answer 
  var myAudio = new Audio('/assets/audio/yay.mp3');
 myAudio.play();
  enableSubmit_sinhalasentences11()
  }
  
  function enableSubmit_sinhalasentences11(){
    var chk = document.querySelectorAll('input[type="checkbox"]:checked').length;
    if (chk == 3){
         document.getElementById("submit").style.display="block";
         document.getElementById("arrow1").style.display="block";
          }
    else{
        document.getElementById("submit").style.display="none";
          }
          }


  // $(document).ready(function(){
  //   $(document).on('click',"#question-sinhala",function () {
  //   var audio = document.getElementById("quest_audio");
  //   if (audio.paused) audio.play();
  //   else audio.pause();
  // });
  // });
  
  
//--------------------------------Grade 1 Level 1 - Poems-----------------

// -------------------------------Grade 1 Level 1 - words -----------------------
//q1
function wordgame1()
  {
  document.f1.clip3.src="/assets/images/ga.png";
  document.f1.rw1.src="/assets/images/sbob1.png";
  document.f1.rw21.src="/assets/images/super1.JPG";
  document.getElementById("wo2").style.pointerEvents = "none";
  document.getElementById("mark1").checked = true; //kid gave right answer 
  document.getElementById("wo1").style.border = "4px solid blue";
  var myAudio = new Audio('/assets/audio/yay.mp3');
  myAudio.play();
  enableSubmit_sinhalaWords()
  }

  function wordgame2()
  {
  document.f1.clip3.src="/assets/images/ma.png";
  document.f1.rw1.src="/assets/images/w.gif";
  document.f1.rw21.src="/assets/images/trans.svg";
  document.getElementById("wo1").style.pointerEvents = "none";
  document.getElementById("unmark1").checked = true; //kid gave false answer 
  document.getElementById("wo1").style.border = "4px solid red";
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
 myAudio.play();
  enableSubmit_sinhalaWords()
  }

  function wordgame3()
  {

  document.f1.clip4.src="/assets/images/ii.png";
  document.f1.rw2.src="/assets/images/w.gif";
  document.f1.rw22.src="/assets/images/trans.svg";
  document.getElementById("wo4").style.pointerEvents = "none";
  document.getElementById("unmark2").checked = true; //kid gave false answer 
  document.getElementById("wo4").style.border = "4px solid red";
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
myAudio.play();
  enableSubmit_sinhalaWords()
  
  }

  function wordgame4()
  {
 
  document.f1.clip4.src="/assets/images/sa.png";
  document.f1.rw2.src="/assets/images/sbob1.png";
  document.f1.rw22.src="/assets/images/super2.JPG";
  document.getElementById("wo3").style.pointerEvents = "none";
  document.getElementById("mark2").checked = true; //kid gave true answer 
  document.getElementById("wo4").style.border = "4px solid blue";
  var myAudio = new Audio('/assets/audio/yay.mp3');
  myAudio.play();
  enableSubmit_sinhalaWords()
  }
  //q2

  function wordgame5()
  {

  document.f1.clip7.src="/assets/images/ga.png";
  document.f1.rw3.src="/assets/images/w.gif";
  document.f1.rw23.src="/assets/images/trans.svg";
  document.getElementById("wo6").style.pointerEvents = "none";
  document.getElementById("unmark3").checked = true; //kid gave false answer 
  document.getElementById("wo6").style.border = "4px solid red";
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_sinhalaWords()
  }

  function wordgame6()
  {
  document.f1.clip7.src="/assets/images/ma.png";
  document.f1.rw3.src="/assets/images/sbob1.png";
  document.f1.rw23.src="/assets/images/super3.JPG";
  document.getElementById("wo5").style.pointerEvents = "none";
  document.getElementById("mark3").checked = true; //kid gave true answer 
  document.getElementById("wo6").style.border = "4px solid blue";
  var myAudio = new Audio('/assets/audio/yay.mp3');
  myAudio.play();
  enableSubmit_sinhalaWords()
  }

  function wordgame7()
  {
  document.f1.clip8.src="/assets/images/ii.png";
  document.f1.rw4.src="/assets/images/w.gif";
  document.f1.rw24.src="/assets/images/trans.svg";
  document.getElementById("wo8").style.pointerEvents = "none";
  document.getElementById("unmark4").checked = true; //kid gave false answer 
  document.getElementById("wo8").style.border = "4px solid red";
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_sinhalaWords()
  
  }

  function wordgame8()
  {
  document.f1.clip8.src="/assets/images/la.png";
  document.f1.rw4.src="/assets/images/sbob1.png";
  document.f1.rw24.src="/assets/images/super4.JPG";
  document.getElementById("wo7").style.pointerEvents = "none";
  document.getElementById("mark4").checked = true; //kid gave false answer 
  document.getElementById("wo8").style.border = "4px solid blue";
  var myAudio = new Audio('/assets/audio/yay.mp3');
  myAudio.play();
  enableSubmit_sinhalaWords()
  }

  //q3

  function wordgame9()
  {
  document.f1.clip11.src="/assets/images/ii.png";
  document.f1.w10.src="/assets/images/ma.png";
  document.f1.rw25.src="/assets/images/super5.JPG";
  document.getElementById("wo10").style.pointerEvents = "none";
  document.getElementById("mark5").checked = true; //kid gave right answer 
  document.getElementById("wo9").style.border = "4px solid blue";
  var myAudio = new Audio('/assets/audio/yay.mp3');
  myAudio.play();
  enableSubmit_sinhalaWords()
  }

  function wordgame10()
  {
 
  document.f1.clip11.src="/assets/images/ma.png";
  document.f1.rw5.src="/assets/images/w.gif";
  document.f1.rw25.src="/assets/images/trans.svg";
  document.getElementById("wo9").style.pointerEvents = "none";
  document.getElementById("unmark5").checked = true; //kid gave false answer 
  document.getElementById("wo9").style.border = "4px solid red";
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_sinhalaWords()
  }

  function wordgame11()
  {
  document.f1.clip12.src="/assets/images/ra.png";
  document.f1.rw6.src="/assets/images/sbob1.png";
  document.f1.rw26.src="/assets/images/super6.JPG";
  document.getElementById("wo12").style.pointerEvents = "none";
  document.getElementById("mark6").checked = true; //kid gave right answer 
  document.getElementById("wo11").style.border = "4px solid blue";
  var myAudio = new Audio('/assets/audio/yay.mp3');
  myAudio.play();
  enableSubmit_sinhalaWords()
  }

  function wordgame12()
  {
  document.f1.clip12.src="/assets/images/sa.png";
  document.f1.rw6.src="/assets/images/w.gif";
  document.f1.rw26.src="/assets/images/trans.svg";
  document.getElementById("wo11").style.pointerEvents = "none";
  document.getElementById("unmark6").checked = true; //kid gave false answer 
  document.getElementById("wo11").style.border = "4px solid red";
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_sinhalaWords()
  }



  function enableSubmit_sinhalaWords(){
    var chk = document.querySelectorAll('input[type="checkbox"]:checked').length;
    if (chk == 6){
         document.getElementById("submit").style.display="block";
         document.getElementById("arrow1").style.display="block";
          }
    else{
        document.getElementById("submit").style.display="none";
          }
          }
//-----------------------------------Grade 2---------------------------

// -------------------------------Grade 2 Level 1 - words -----------------------
//q1
function wordgames12()
  {
  
  document.f1.clip1.src="/assets/images/ga.JPG";
  
  document.f1.rw12.src="/assets/images/w.gif";
  document.f1.rw312.src="/assets/images/trans.svg";
  document.getElementById("wo212").style.pointerEvents = "none";
  document.getElementById("unmark1").checked = true; //kid gave right answer 
  document.getElementById("wo212").style.border = "4px solid red"; 
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  }

  function wordgames22()
  {
 
  document.f1.clip1.src="/assets/images/aaa.JPG";
 
  document.f1.rw12.src="/assets/images/sbob1.png";
  document.f1.rw312.src="/assets/images/super1.JPG";
  document.getElementById("wo112").style.pointerEvents = "none";
  document.getElementById("mark1").checked = true; //kid gave false answer 
  document.getElementById("wo212").style.border = "4px solid blue";
  var myAudio = new Audio('/assets/audio/yay.mp3');
  myAudio.play(); 
  }

  function wordgames32()
  {
 
  document.f1.clip2.src="/assets/images/mmm.JPG";
  
  document.f1.rw22.src="/assets/images/sbob1.png";
  document.f1.rw322.src="/assets/images/super2.JPG";
  document.getElementById("wo412").style.pointerEvents = "none";
  document.getElementById("mark2").checked = true; //kid gave right answer 
  document.getElementById("wo312").style.border = "4px solid blue";
  var myAudio = new Audio('/assets/audio/yay.mp3');
  myAudio.play(); 
  }

  function wordgames42()
  {
  
  document.f1.clip2.src="/assets/images/sa.JPG";
  document.f1.rw22.src="/assets/images/w.gif";
  document.f1.rw322.src="/assets/images/trans.svg";
  document.getElementById("wo312").style.pointerEvents = "none";
  document.getElementById("unmark2").checked = true; //kid gave false answer 
  document.getElementById("wo312").style.border = "4px solid red"; 
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  }

  function wordgames52()
  {

  document.f1.clip3.src="/assets/images/maa.JPG";
  document.f1.rw32.src="/assets/images/sbob1.png";
  document.f1.rw332.src="/assets/images/super3.JPG";
  document.getElementById("wo612").style.pointerEvents = "none";
  document.getElementById("mark3").checked = true; //kid gave false answer 
  document.getElementById("wo512").style.border = "4px solid blue"; 
  var myAudio = new Audio('/assets/audio/yay.mp3');
  myAudio.play();
  }

  function wordgames62()
  {
  
  document.f1.clip3.src="/assets/images/sa.JPG";
  document.f1.rw32.src="/assets/images/w.gif";
  document.f1.rw332.src="/assets/images/trans.svg";
  document.getElementById("wo512").style.pointerEvents = "none";
  document.getElementById("unmark3").checked = true; //kid gave false answer 
  document.getElementById("wo512").style.border = "4px solid red"; 
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  }
  //q2

  function wordgames72()
  {
  
  document.f1.clip7.src="/assets/images/aaa.JPG";
  document.f1.rw42.src="/assets/images/w.gif";
  document.f1.rw342.src="/assets/images/trans.svg";
  document.getElementById("wo812").style.pointerEvents = "none";
  document.getElementById("unmark1").checked = true; //kid gave right answer 
  document.getElementById("wo812").style.border = "4px solid red"; 
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  }

  function wordgames82()
  {
 
  document.f1.clip7.src="/assets/images/ge.JPG";
  document.f1.rw42.src="/assets/images/sbob1.png";
  document.f1.rw342.src="/assets/images/super4.JPG";
  document.getElementById("wo712").style.pointerEvents = "none";
  document.getElementById("mark1").checked = true; //kid gave false answer 
  document.getElementById("wo812").style.border = "4px solid blue"; 
  var myAudio = new Audio('/assets/audio/yay.mp3');
  myAudio.play();
  }

  function wordgames92()
  {
  
  document.f1.clip8.src="/assets/images/mmm.JPG";
  document.f1.rw52.src="/assets/images/w.gif";
  document.f1.rw352.src="/assets/images/trans.svg";
  document.getElementById("wo1012").style.pointerEvents = "none";
  document.getElementById("mark2").checked = true; //kid gave right answer 
  document.getElementById("wo1012").style.border = "4px solid red"; 
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  }

  function wordgames102()
  {
  
  document.f1.clip8.src="/assets/images/da.JPG";
  document.f1.rw52.src="/assets/images/sbob1.png";
  document.f1.rw352.src="/assets/images/super5.JPG";
  document.getElementById("wo912").style.pointerEvents = "none";
  document.getElementById("unmark2").checked = true; //kid gave false answer 
  document.getElementById("wo1012").style.border = "4px solid blue"; 
  var myAudio = new Audio('/assets/audio/yay.mp3');
  myAudio.play();
  }

  function wordgames112()
  {
  
  document.f1.clip9.src="/assets/images/ra.JPG";
  document.f1.rw62.src="/assets/images/sbob1.png";
  document.f1.rw362.src="/assets/images/super2.JPG";
  document.getElementById("wo1212").style.pointerEvents = "none";
  document.getElementById("mark3").checked = true; //kid gave true answer 
  document.getElementById("wo1112").style.border = "4px solid blue"; 
  var myAudio = new Audio('/assets/audio/yay.mp3');
  myAudio.play();
  }

  function wordgames122()
  {
  
  document.f1.clip9.src="/assets/images/kk.JPG";
  document.f1.rw62.src="/assets/images/w.gif";
  document.f1.rw362.src="/assets/images/trans.svg";
  document.getElementById("wo1112").style.pointerEvents = "none";
  document.getElementById("unmark3").checked = true; //kid gave false answer 
  document.getElementById("wo1112").style.border = "4px solid red"; 
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  }

  //q3

  function wordgames132()
  {
  
  document.f1.clip13.src="/assets/images/aaa.JPG";
  document.f1.rw72.src="/assets/images/sbob1.png";
  document.f1.rw372.src="/assets/images/super1.JPG";
  document.getElementById("wo1412").style.pointerEvents = "none";
  document.getElementById("mark1").checked = true; //kid gave right answer 
  document.getElementById("wo1312").style.border = "4px solid blue"; 
  var myAudio = new Audio('/assets/audio/yay.mp3');
  myAudio.play();
  }

  function wordgames142()
  {
  
  document.f1.clip13.src="/assets/images/ge.JPG";
  document.f1.rw72.src="/assets/images/w.gif";
  document.f1.rw372.src="/assets/images/trans.svg";
  document.getElementById("wo1312").style.pointerEvents = "none";
  document.getElementById("unmark1").checked = true; //kid gave false answer 
  document.getElementById("wo1312").style.border = "4px solid red"; 
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  }

  function wordgames152()
  {
  document.f1.clip14.src="/assets/images/da.JPG";
  document.f1.rw82.src="/assets/images/w.gif";
  document.f1.rw382.src="/assets/images/trans.svg";
  document.getElementById("wo1612").style.pointerEvents = "none";
  document.getElementById("unmark2").checked = true; //kid gave right answer 
  document.getElementById("wo1612").style.border = "4px solid red"; 
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  }

  function wordgames162()
  {

  document.f1.clip14.src="/assets/images/kk.JPG";
  document.f1.rw82.src="/assets/images/sbob1.png";
  document.f1.rw382.src="/assets/images/super4.JPG";
  document.getElementById("wo1512").style.pointerEvents = "none";
  document.getElementById("mark2").checked = true; //kid gave false answer 
  document.getElementById("wo1612").style.border = "4px solid blue"; 
  var myAudio = new Audio('/assets/audio/yay.mp3');
  myAudio.play();
  }

  function wordgames172()
  {
  document.f1.clip15.src="/assets/images/kaaa.JPG";
  document.f1.rw92.src="/assets/images/sbob1.png";
  document.f1.rw392.src="/assets/images/super5.JPG"
  document.getElementById("wo1812").style.pointerEvents = "none";
  document.getElementById("mark3").checked = true; //kid gave false answer 
  document.getElementById("wo1712").style.border = "4px solid blue"; 
  var myAudio = new Audio('/assets/audio/yay.mp3');
  myAudio.play();
  
  }

  function wordgames182()
  {
  document.f1.clip15.src="/assets/images/maa.JPG";
  document.f1.rw92.src="/assets/images/w.gif";
  document.f1.rw392.src="/assets/images/trans.svg";
  document.getElementById("wo1712").style.pointerEvents = "none";
  document.getElementById("unmark3").checked = true; //kid gave false answer 
  document.getElementById("wo1712").style.border = "4px solid red"; 
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  }

    //Audio functions of the Grade 2 Level 1 words game

    function words_play_g2() {
      var audio = document.getElementById("words_play_g2_l1_audio");
      audio.play();
    }

  //------------------------------Grade 2 - Level 1 - Songs 

  function song1()
  {
  document.getElementById("so3").style.border = "4px solid red"; 
  document.getElementById("so2").style.pointerEvents = "none";
  document.getElementById("so3").style.pointerEvents = "none";
  document.getElementById("unmark1").checked = true; 
  document.getElementById("so4").style.display = "block";
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_sinhalapoem3()
  }
  
  function song2()
  {
  document.getElementById("so3").style.border = "4px solid red"; 
  document.getElementById("so3").style.pointerEvents = "none";
  document.getElementById("so1").style.pointerEvents = "none";
  document.getElementById("unmark1").checked = true; 
  document.getElementById("so5").style.display = "block";
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_sinhalapoem3()
  }
  
  function song3()
  {
  document.getElementById("so3").style.border = "4px solid blue"; 
  document.getElementById("so1").style.pointerEvents = "none";
  document.getElementById("so2").style.pointerEvents = "none";
  document.getElementById("mark1").checked = true; 
  document.getElementById("so6").style.display = "block";
  var myAudio = new Audio('/assets/audio/yay.mp3');
  myAudio.play();
  enableSubmit_sinhalapoem3()
  }

  function song4()
  {
  document.getElementById("so8").style.border = "4px solid red"; 
  document.getElementById("so7").style.pointerEvents = "none";
  document.getElementById("so9").style.pointerEvents = "none";
  document.getElementById("unmark2").checked = true; 
  document.getElementById("so10").style.display = "block";
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_sinhalapoem3()
  }
  
  function song5()
  {
  document.getElementById("so8").style.border = "4px solid blue"; 
  document.getElementById("so7").style.pointerEvents = "none";
  document.getElementById("so9").style.pointerEvents = "none";
  document.getElementById("mark2").checked = true; 
  document.getElementById("so11").style.display = "block";
  var myAudio = new Audio('/assets/audio/yay.mp3');
  myAudio.play();
  enableSubmit_sinhalapoem3()
  }

  function song6()
  {
  document.getElementById("so8").style.border = "4px solid red"; 
  document.getElementById("so7").style.pointerEvents = "none";
  document.getElementById("so9").style.pointerEvents = "none";
  document.getElementById("unmark2").checked = true; 
  document.getElementById("so12").style.display = "block";
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_sinhalapoem3()
  }
  
  function enableSubmit_sinhalapoem3(){
    var chk = document.querySelectorAll('input[type="checkbox"]:checked').length;
    console.log(chk);
    if (chk == 2){
         document.getElementById("submit").style.display="block";
         document.getElementById("arrow1").style.display="block";
          }
    else{
        document.getElementById("submit").style.display="none";
          }
          }

  //------------------------------Audio functions of Grade 2 Level 1 - Songs game (poems-l1s-l1-component.html)
  function poems_play_g2_l1() {
    var audio = document.getElementById("poems_play_g2_l1_audio");
    audio.play();
  }

  function poems_play_g2_l1_2() {
    var audio = document.getElementById("poems_play_g2_l1_audio_2");
    audio.play();
  }

  function poems_play_g2_l1_3() {
    var audio = document.getElementById("poems_play_g2_l1_audio_3");
    audio.play();
  }



  //----------------Sentences(word-selection1.component.html) grade 1 level 2
 
  function sinhala_s21()
  {
  document.getElementById("sin2").style.border = "4px solid red"; 
  document.getElementById("sin2").style.pointerEvents = "none";
  document.getElementById("unmark1").checked = true; 
  document.getElementById("sine1").style.display = "block";
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  }
  function sinhala_s22()
  {
  document.getElementById("sin2").style.border = "4px solid blue"; 
  document.getElementById("sin1").style.pointerEvents = "none";
  document.getElementById("mark1").checked = true; 
  document.getElementById("sine2").style.display = "block";
  var myAudio = new Audio('/assets/audio/yay.mp3');
  myAudio.play();
  }
  function sinhala_s23()
  {
    document.getElementById("sin3").style.border = "4px solid blue"; 
    document.getElementById("sin4").style.pointerEvents = "none";
    document.getElementById("mark2").checked = true; 
    document.getElementById("sine4").style.display = "block";
    var myAudio = new Audio('/assets/audio/yay.mp3');
    myAudio.play();
  }
  function sinhala_s24()
  {
    document.getElementById("sin3").style.border = "4px solid red"; 
    document.getElementById("sin3").style.pointerEvents = "none";
    document.getElementById("unmark2").checked = true; 
    document.getElementById("sine3").style.display = "block";
    var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
    myAudio.play();
  }
  function sinhala_s25()
  {
    document.getElementById("sin5").style.border = "4px solid blue"; 
    document.getElementById("sin6").style.pointerEvents = "none";
    document.getElementById("mark3").checked = true; 
    document.getElementById("sine6").style.display = "block";
    var myAudio = new Audio('/assets/audio/yay.mp3');
    myAudio.play();
  }
  function sinhala_s26()
  {
    document.getElementById("sin5").style.border = "4px solid red"; 
    document.getElementById("sin5").style.pointerEvents = "none";
    document.getElementById("unmark3").checked = true; 
    document.getElementById("sine5").style.display = "block";
    var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
    myAudio.play();
  }

  function sinhala_s27()
  {
  document.getElementById("sin8").style.border = "4px solid red"; 
  document.getElementById("sin8").style.pointerEvents = "none";
  document.getElementById("unmark4").checked = true; 
  document.getElementById("sine7").style.display = "block";
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  }
  function sinhala_s28()
  {
  document.getElementById("sin8").style.border = "4px solid blue"; 
  document.getElementById("sin7").style.pointerEvents = "none";
  document.getElementById("mark4").checked = true; 
  document.getElementById("sine8").style.display = "block";
  var myAudio = new Audio('/assets/audio/yay.mp3');
  myAudio.play();
  }
  function sinhala_s29()
  {
    document.getElementById("sin9").style.border = "4px solid blue"; 
    document.getElementById("sin10").style.pointerEvents = "none";
    document.getElementById("mark5").checked = true; 
    document.getElementById("sine10").style.display = "block";
    var myAudio = new Audio('/assets/audio/yay.mp3');
    myAudio.play();
  }
  function sinhala_s30()
  {
    document.getElementById("sin9").style.border = "4px solid red"; 
    document.getElementById("sin9").style.pointerEvents = "none";
    document.getElementById("unmark5").checked = true; 
    document.getElementById("sine9").style.display = "block";
    var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
    myAudio.play();
  }

  function sinhala_s31()
  {
  document.getElementById("sin12").style.border = "4px solid red"; 
  document.getElementById("sin12").style.pointerEvents = "none";
  document.getElementById("unmark6").checked = true; 
  document.getElementById("sine11").style.display = "block";
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  }
  function sinhala_s32()
  {
  document.getElementById("sin12").style.border = "4px solid blue"; 
  document.getElementById("sin11").style.pointerEvents = "none";
  document.getElementById("mark6").checked = true; 
  document.getElementById("sine12").style.display = "block";
  var myAudio = new Audio('/assets/audio/yay.mp3');
  myAudio.play();
  }

  // Audio functions of Sentences game (word-selection1.component.html) grade 1 level 2
  function sentences_l2_play() {
    var audio = document.getElementById("sentences_l2_audio");
    audio.play();
  }

  
  //----------------sentences grade 2 level 1------------------
 
  function sinhala2_s21()
  {
  document.getElementById("sin2").style.border = "4px solid red"; 
  document.getElementById("sin2").style.pointerEvents = "none";
  document.getElementById("unmark1").checked = true; 
  document.getElementById("sine1").style.display = "block";
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  }
  function sinhala2_s22()
  {
  document.getElementById("sin2").style.border = "4px solid blue"; 
  document.getElementById("sin1").style.pointerEvents = "none";
  document.getElementById("mark1").checked = true; 
  document.getElementById("sine2").style.display = "block";
  var myAudio = new Audio('/assets/audio/yay.mp3');
  myAudio.play();
  }
  function sinhala2_s23()
  {
    document.getElementById("sin3").style.border = "4px solid blue"; 
    document.getElementById("sin4").style.pointerEvents = "none";
    document.getElementById("mark2").checked = true; 
    document.getElementById("sine4").style.display = "block";
    var myAudio = new Audio('/assets/audio/yay.mp3');
    myAudio.play();
  }
  function sinhala2s24()
  {
    document.getElementById("sin3").style.border = "4px solid red"; 
    document.getElementById("sin3").style.pointerEvents = "none";
    document.getElementById("unmark2").checked = true; 
    document.getElementById("sine3").style.display = "block";
    var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
    myAudio.play();
  }
  function sinhala2_s25()
  {
    document.getElementById("sin5").style.border = "4px solid blue"; 
    document.getElementById("sin6").style.pointerEvents = "none";
    document.getElementById("mark3").checked = true; 
    document.getElementById("sine6").style.display = "block";
    var myAudio = new Audio('/assets/audio/yay.mp3');
    myAudio.play();
  }
  function sinhala2_s26()
  {
    document.getElementById("sin5").style.border = "4px solid red"; 
    document.getElementById("sin5").style.pointerEvents = "none";
    document.getElementById("unmark3").checked = true; 
    document.getElementById("sine5").style.display = "block";
    var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
    myAudio.play();
  }

  function sinhala2_s27()
  {
  document.getElementById("sin8").style.border = "4px solid red"; 
  document.getElementById("sin8").style.pointerEvents = "none";
  document.getElementById("unmark4").checked = true; 
  document.getElementById("sine7").style.display = "block";
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  }
  function sinhala2_s28()
  {
  document.getElementById("sin8").style.border = "4px solid blue"; 
  document.getElementById("sin7").style.pointerEvents = "none";
  document.getElementById("mark4").checked = true; 
  document.getElementById("sine8").style.display = "block";
  var myAudio = new Audio('/assets/audio/yay.mp3');
  myAudio.play();
  }
  function sinhala2_s29()
  {
    document.getElementById("sin9").style.border = "4px solid blue"; 
    document.getElementById("sin10").style.pointerEvents = "none";
    document.getElementById("mark5").checked = true; 
    document.getElementById("sine10").style.display = "block";
    var myAudio = new Audio('/assets/audio/yay.mp3');
    myAudio.play();
  }
  function sinhala2_s30()
  {
    document.getElementById("sin9").style.border = "4px solid red"; 
    document.getElementById("sin9").style.pointerEvents = "none";
    document.getElementById("unmark5").checked = true; 
    document.getElementById("sine9").style.display = "block";
    var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
    myAudio.play();
  }

  function sinhala2_s31()
  {
  document.getElementById("sin12").style.border = "4px solid red"; 
  document.getElementById("sin12").style.pointerEvents = "none";
  document.getElementById("unmark6").checked = true; 
  document.getElementById("sine11").style.display = "block";
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  }
  function sinhala2_s32()
  {
  document.getElementById("sin12").style.border = "4px solid blue"; 
  document.getElementById("sin11").style.pointerEvents = "none";
  document.getElementById("mark6").checked = true; 
  document.getElementById("sine12").style.display = "block";
  var myAudio = new Audio('/assets/audio/yay.mp3');
  myAudio.play();
  }

  // Grade 2 level 1 Sentences game - Audio Functions

  function sentences_g2_l1_play() {
    var audio = document.getElementById("sentences_g2_l1_audio");
    audio.play();
  }


  //--------------------sentences Grade 2 level 2 ----------------------

  function newsent1()
  {
  document.getElementById("nsen3").style.border = "4px solid red"; 
  document.getElementById("nsen2").style.pointerEvents = "none";
  document.getElementById("nsen3").style.pointerEvents = "none";
  document.getElementById("unmark1").checked = true; 
  document.getElementById("nsen4").style.display = "block";
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_sinhalasentences4()
  }

  function newsent2()
  {
  document.getElementById("nsen3").style.border = "4px solid red"; 
  document.getElementById("nsen1").style.pointerEvents = "none";
  document.getElementById("nsen3").style.pointerEvents = "none";
  document.getElementById("unmark1").checked = true; 
  document.getElementById("nsen5").style.display = "block";
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_sinhalasentences4()
  }
  function newsent3()
  {
  document.getElementById("nsen3").style.border = "4px solid blue"; 
  document.getElementById("nsen2").style.pointerEvents = "none";
  document.getElementById("nsen1").style.pointerEvents = "none";
  document.getElementById("mark1").checked = true; 
  document.getElementById("nsen6").style.display = "block";
  var myAudio = new Audio('/assets/audio/yay.mp3');
  myAudio.play();
  enableSubmit_sinhalasentences4()
  }

  function newsent4()
  {
  document.getElementById("nsen8").style.border = "4px solid red"; 
  document.getElementById("nsen8").style.pointerEvents = "none";
  document.getElementById("nsen9").style.pointerEvents = "none";
  document.getElementById("unmark2").checked = true; 
  document.getElementById("nsen10").style.display = "block";
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_sinhalasentences4()
  }

  
  function newsent5()
  {
  document.getElementById("nsen8").style.border = "4px solid blue"; 
  document.getElementById("nsen7").style.pointerEvents = "none";
  document.getElementById("nsen9").style.pointerEvents = "none";
  document.getElementById("mark2").checked = true; 
  document.getElementById("nsen11").style.display = "block";
  var myAudio = new Audio('/assets/audio/yay.mp3');
  myAudio.play();
  enableSubmit_sinhalasentences4()
  }
  function newsent6()
  {
  document.getElementById("nsen8").style.border = "4px solid red"; 
  document.getElementById("nsen8").style.pointerEvents = "none";
  document.getElementById("nsen7").style.pointerEvents = "none";
  document.getElementById("unmark2").checked = true; 
  document.getElementById("nsen12").style.display = "block";
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_sinhalasentences4()
  }


  function newsent7()
  {
  document.getElementById("nsen13").style.border = "4px solid blue"; 
  document.getElementById("nsen14").style.pointerEvents = "none";
  document.getElementById("nsen15").style.pointerEvents = "none";
  document.getElementById("mark3").checked = true; 
  document.getElementById("nsen16").style.display = "block";
  var myAudio = new Audio('/assets/audio/yay.mp3');
  myAudio.play();
  enableSubmit_sinhalasentences4()
  }

  function newsent8()
  {
  document.getElementById("nsen13").style.border = "4px solid red"; 
  document.getElementById("nsen13").style.pointerEvents = "none";
  document.getElementById("nsen15").style.pointerEvents = "none";
  document.getElementById("unmark3").checked = true; 
  document.getElementById("nsen17").style.display = "block";
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_sinhalasentences4()
  }

  function newsent9()
  {
  document.getElementById("nsen8").style.border = "4px solid red"; 
  document.getElementById("nsen13").style.pointerEvents = "none";
  document.getElementById("nsen14").style.pointerEvents = "none";
  document.getElementById("unmark3").checked = true; 
  document.getElementById("nsen18").style.display = "block";
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_sinhalasentences4()
  }

  function newsent10()
  {
  document.getElementById("nsen21").style.border = "4px solid red"; 
  document.getElementById("nsen20").style.pointerEvents = "none";
  document.getElementById("nsen21").style.pointerEvents = "none";
  document.getElementById("unmark4").checked = true; 
  document.getElementById("nsen22").style.display = "block";
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_sinhalasentences4()
  }

  function newsent11()
  {
  document.getElementById("nsen21").style.border = "4px solid red"; 
  document.getElementById("nsen19").style.pointerEvents = "none";
  document.getElementById("nsen21").style.pointerEvents = "none";
  document.getElementById("unmark4").checked = true; 
  document.getElementById("nsen23").style.display = "block";
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_sinhalasentences4()
  }
  function newsent12()
  {
  document.getElementById("nsen21").style.border = "4px solid blue"; 
  document.getElementById("nsen19").style.pointerEvents = "none";
  document.getElementById("nsen20").style.pointerEvents = "none";
  document.getElementById("mark4").checked = true; 
  document.getElementById("nsen24").style.display = "block";
  var myAudio = new Audio('/assets/audio/yay.mp3');
  myAudio.play();
  enableSubmit_sinhalasentences4()
  }
  function enableSubmit_sinhalasentences4(){
    var chk = document.querySelectorAll('input[type="checkbox"]:checked').length;
    if (chk == 4){
         document.getElementById("submit").style.display="block";
         document.getElementById("arrow1").style.display="block";
          }
    else{
        document.getElementById("submit").style.display="none";
          }
          }
  
  //Grade 2 - Level 2 - Songs

  function song01()
  {
  document.getElementById("so01").style.border = "4px solid blue";
  document.getElementById("so02").style.pointerEvents = "none";
  document.getElementById("so03").style.pointerEvents = "none";
  document.getElementById("so04").style.pointerEvents = "none";
  document.getElementById("so05").style.pointerEvents = "none";
  document.getElementById("mark1").checked = true; 
  document.getElementById("so06").style.display = "block";
  var myAudio = new Audio('/assets/audio/yay.mp3');
  myAudio.play();
  }
  
  function song02()
  {
  document.getElementById("so01").style.pointerEvents = "none";
  document.getElementById("so02").style.pointerEvents = "none";
  document.getElementById("so03").style.pointerEvents = "none";
  document.getElementById("so04").style.pointerEvents = "none";
  document.getElementById("so05").style.pointerEvents = "none";
  document.getElementById("unmark1").checked = true; 
  document.getElementById("so07").style.display = "block";
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  }
  
  function song03()
  {
  document.getElementById("so01").style.pointerEvents = "none";
  document.getElementById("so02").style.pointerEvents = "none";
  document.getElementById("so03").style.pointerEvents = "none";
  document.getElementById("so04").style.pointerEvents = "none";
  document.getElementById("so05").style.pointerEvents = "none";
  document.getElementById("unmark1").checked = true; 
  document.getElementById("so08").style.display = "block";
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  }

  function song04()
  {
  document.getElementById("so01").style.pointerEvents = "none";
  document.getElementById("so02").style.pointerEvents = "none";
  document.getElementById("so03").style.pointerEvents = "none";
  document.getElementById("so04").style.pointerEvents = "none";
  document.getElementById("so05").style.pointerEvents = "none";
  document.getElementById("unmark1").checked = true; 
  document.getElementById("so09").style.display = "block";
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  }
  
  function song05()
  {
  document.getElementById("so01").style.pointerEvents = "none";
  document.getElementById("so02").style.pointerEvents = "none";
  document.getElementById("so03").style.pointerEvents = "none";
  document.getElementById("so04").style.pointerEvents = "none";
  document.getElementById("so05").style.border = "4px solid blue";
  document.getElementById("mark1").checked = true; 
  document.getElementById("so010").style.display = "block";
  var myAudio = new Audio('/assets/audio/yay.mp3');
  myAudio.play();
}

//--------------------------------Grade 2 Level 2 - Poems 

function sirimath1()
  {
  document.getElementById("sin01").style.border = "4px solid blue"; 
  document.getElementById("sin02").style.pointerEvents = "none";
  document.getElementById("mark01").checked = true; 
  document.getElementById("sine02").style.display = "block";
  var myAudio = new Audio('/assets/audio/yay.mp3');
  myAudio.play();
  }
  function sirimath2()
  {
  document.getElementById("sin01").style.border = "4px solid red"; 
  document.getElementById("sin01").style.pointerEvents = "none";
  document.getElementById("unmark01").checked = true; 
  document.getElementById("sine01").style.display = "block";
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  }
  function sirimath3()
  {
    document.getElementById("sin04").style.border = "4px solid red"; 
    document.getElementById("sin04").style.pointerEvents = "none";
    document.getElementById("unmark02").checked = true; 
    document.getElementById("sine03").style.display = "block";
    var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
    myAudio.play();
  }
  function sirimath4()
  {
    document.getElementById("sin04").style.border = "4px solid blue"; 
    document.getElementById("sin03").style.pointerEvents = "none";
    document.getElementById("mark02").checked = true; 
    document.getElementById("sine04").style.display = "block";
    var myAudio = new Audio('/assets/audio/yay.mp3');
  myAudio.play();
  }
  function sirimath5()
  {
    document.getElementById("sin06").style.border = "4px solid red"; 
    document.getElementById("sin06").style.pointerEvents = "none";
    document.getElementById("unmark03").checked = true; 
    document.getElementById("sine05").style.display = "block";
    var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
    myAudio.play();
  }
  function sirimath6()
  {
    document.getElementById("sin06").style.border = "4px solid blue"; 
    document.getElementById("sin05").style.pointerEvents = "none";
    document.getElementById("mark03").checked = true; 
    document.getElementById("sine06").style.display = "block";
    var myAudio = new Audio('/assets/audio/yay.mp3');
    myAudio.play();
  }

  function sirimath7()
  {
  document.getElementById("sin08").style.border = "4px solid red"; 
  document.getElementById("sin08").style.pointerEvents = "none";
  document.getElementById("unmark04").checked = true; 
  document.getElementById("sine07").style.display = "block";
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  }
  function sirimath8()
  {
  document.getElementById("sin08").style.border = "4px solid blue"; 
  document.getElementById("sin07").style.pointerEvents = "none";
  document.getElementById("mark04").checked = true; 
  document.getElementById("sine08").style.display = "block";
  var myAudio = new Audio('/assets/audio/yay.mp3');
  myAudio.play();
  }
  function sirimath9()
  {
    document.getElementById("sin09").style.border = "4px solid blue"; 
    document.getElementById("sin010").style.pointerEvents = "none";
    document.getElementById("mark05").checked = true; 
    document.getElementById("sine010").style.display = "block";
    var myAudio = new Audio('/assets/audio/yay.mp3');
  myAudio.play();
  }
  function sirimath10()
  {
    document.getElementById("sin09").style.border = "4px solid red"; 
    document.getElementById("sin09").style.pointerEvents = "none";
    document.getElementById("unmark05").checked = true; 
    document.getElementById("sine09").style.display = "block";
    var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
    myAudio.play();
  }

  function sirimath11()
  {
  document.getElementById("sin012").style.border = "4px solid red"; 
  document.getElementById("sin012").style.pointerEvents = "none";
  document.getElementById("unmark06").checked = true; 
  document.getElementById("sine011").style.display = "block";
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  }
  function sirimath12()
  {
  document.getElementById("sin012").style.border = "4px solid blue"; 
  document.getElementById("sin011").style.pointerEvents = "none";
  document.getElementById("mark06").checked = true; 
  document.getElementById("sine012").style.display = "block";
  var myAudio = new Audio('/assets/audio/yay.mp3');
  myAudio.play();
  }

  // Grade 2 Level 2 Poems audio function
  function poems_play_g2_l2() {
    var audio = document.getElementById("poems_play_g2_l2_audio");
    audio.play();
  }
// -------------------------------Grade 2 Level 2 - stories - Koholla Baba -----------------------

function koholla1()
  {
  document.getElementById("koh2").style.border = "4px solid red"; 
  document.getElementById("koh3").style.pointerEvents = "none";
  document.getElementById("koh2").style.pointerEvents = "none";
  document.getElementById("unmark1").checked = true; 
  document.getElementById("koh01").style.display = "block";
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_sinhalastory4()
  }
  
  function koholla2()
  {
  document.getElementById("koh2").style.border = "4px solid blue"; 
  document.getElementById("koh1").style.pointerEvents = "none";
  document.getElementById("koh3").style.pointerEvents = "none";
  document.getElementById("mark1").checked = true; 
  document.getElementById("koh02").style.display = "block";
  var myAudio = new Audio('/assets/audio/yay.mp3');
  myAudio.play();
  enableSubmit_sinhalastory4()
  }
  
  function koholla3()
  {
  document.getElementById("koh2").style.border = "4px solid red"; 
  document.getElementById("koh1").style.pointerEvents = "none";
  document.getElementById("koh2").style.pointerEvents = "none";
  document.getElementById("unmark1").checked = true; 
  document.getElementById("koh03").style.display = "block";
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_sinhalastory4()
  }

  function koholla4()
  {
  document.getElementById("koh5").style.border = "4px solid red"; 
  document.getElementById("koh6").style.pointerEvents = "none";
  document.getElementById("koh5").style.pointerEvents = "none";
  document.getElementById("unmark2").checked = true; 
  document.getElementById("koh04").style.display = "block";
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_sinhalastory4()
  }
  
  function koholla5()
  {
  document.getElementById("koh5").style.border = "4px solid blue"; 
  document.getElementById("koh4").style.pointerEvents = "none";
  document.getElementById("koh6").style.pointerEvents = "none";
  document.getElementById("mark2").checked = true; 
  document.getElementById("koh05").style.display = "block";
  var myAudio = new Audio('/assets/audio/yay.mp3');
  myAudio.play();
  enableSubmit_sinhalastory4()
  }

  function koholla6()
  {
  document.getElementById("koh5").style.border = "4px solid red"; 
  document.getElementById("koh4").style.pointerEvents = "none";
  document.getElementById("koh5").style.pointerEvents = "none";
  document.getElementById("unmark2").checked = true; 
  document.getElementById("koh06").style.display = "block";
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_sinhalastory4()
  }

  function enableSubmit_sinhalastory4(){
    var chk = document.querySelectorAll('input[type="checkbox"]:checked').length;
    console.log(chk);
    if (chk == 2){
         document.getElementById("submit").style.display="block";
         document.getElementById("arrow1").style.display="block";
          }
    else{
        document.getElementById("submit").style.display="none";
          }
          }

  //------------------------grade 2 level 2 wachana thoramu----------------------

  function new_work1()
  {
  document.getElementById("ax2").style.border = "4px solid red"; 
  document.getElementById("ax2").style.pointerEvents = "none";
  document.getElementById("ax3").style.pointerEvents = "none";
  document.getElementById("unmark1").checked = true; 
  document.getElementById("axe1").style.display = "block";
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_sinhalaword4()
  }
  function new_work2()
  {
  document.getElementById("ax2").style.border = "4px solid blue"; 
  document.getElementById("ax1").style.pointerEvents = "none";
  document.getElementById("ax3").style.pointerEvents = "none";
  document.getElementById("mark1").checked = true; 
  document.getElementById("axe2").style.display = "block";
  var myAudio = new Audio('/assets/audio/yay.mp3');
  myAudio.play();
  enableSubmit_sinhalaword4()
  }

  function new_work3()
  {
  document.getElementById("ax2").style.border = "4px solid red"; 
  document.getElementById("ax2").style.pointerEvents = "none";
  document.getElementById("ax1").style.pointerEvents = "none";
  document.getElementById("unmark1").checked = true; 
  document.getElementById("axe3").style.display = "block";
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_sinhalaword4()
  }

  function new_work4()
  {
  document.getElementById("ax4").style.border = "4px solid blue"; 
  document.getElementById("ax5").style.pointerEvents = "none";
  document.getElementById("ax6").style.pointerEvents = "none";
  document.getElementById("mark2").checked = true; 
  document.getElementById("axe4").style.display = "block";
  var myAudio = new Audio('/assets/audio/yay.mp3');
  myAudio.play();
  enableSubmit_sinhalaword4()
  }
  function new_work5()
  {
  document.getElementById("ax4").style.border = "4px solid red"; 
  document.getElementById("ax4").style.pointerEvents = "none";
  document.getElementById("ax6").style.pointerEvents = "none";
  document.getElementById("unmark2").checked = true; 
  document.getElementById("axe5").style.display = "block";
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_sinhalaword4()
  }
  function new_work6()
  {
  document.getElementById("ax4").style.border = "4px solid red"; 
  document.getElementById("ax4").style.pointerEvents = "none";
  document.getElementById("ax5").style.pointerEvents = "none";
  document.getElementById("unmark2").checked = true; 
  document.getElementById("axe6").style.display = "block";
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_sinhalaword4()
  }
  function new_work7()
  {
  document.getElementById("ax9").style.border = "4px solid red"; 
  document.getElementById("ax8").style.pointerEvents = "none";
  document.getElementById("ax9").style.pointerEvents = "none";
  document.getElementById("unmark3").checked = true; 
  document.getElementById("axe7").style.display = "block";
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_sinhalaword4()
  }
  function new_work8()
  {
  document.getElementById("ax9").style.border = "4px solid red"; 
  document.getElementById("ax7").style.pointerEvents = "none";
  document.getElementById("ax9").style.pointerEvents = "none";
  document.getElementById("unmark3").checked = true; 
  document.getElementById("axe8").style.display = "block";
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_sinhalaword4()
  }
  function new_work9()
  {
  document.getElementById("ax9").style.border = "4px solid blue"; 
  document.getElementById("ax7").style.pointerEvents = "none";
  document.getElementById("ax8").style.pointerEvents = "none";
  document.getElementById("mark3").checked = true; 
  document.getElementById("axe9").style.display = "block";
  var myAudio = new Audio('/assets/audio/yay.mp3');
  myAudio.play();
  enableSubmit_sinhalaword4()
  }

  function enableSubmit_sinhalaword4(){
    var chk = document.querySelectorAll('input[type="checkbox"]:checked').length;
    console.log(chk);
    if (chk == 3){
         document.getElementById("submit").style.display="block";
         document.getElementById("arrow1").style.display="block";
          }
    else{
        document.getElementById("submit").style.display="none";
          }
          }