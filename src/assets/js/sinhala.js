//---------------------Grade 1-------------------------
//------------level 1----------------------------------------
//--------------Grade 1 level 1 -Sentences--------------------------

function show_sinhalaL1(Page1, Page2) {
    document.getElementById(Page1).style.display='block';
    document.getElementById(Page2).style.display='none'; 
  }
  
  function test1_sinhala()
  {
  document.f1.clip1.src="/assets/images/child_running.PNG";
  document.f1.brown.src="/assets/images/trans.svg";
  document.f1.red.src="/assets/images/child_crying.PNG";
  document.f1.rw1.src="/assets/images/yay_bunny2.gif";
  document.getElementById("crychild").style.pointerEvents = "none";
  document.getElementById("mark1").checked = true; //kid gave right answer 
  enableSubmit();
  
  }
  function test2_sinhala()
  {
  document.f1.clip1.src="/assets/images/child_crying.PNG";
  document.f1.red.src="/assets/images/trans.svg";
  document.f1.brown.src="/assets/images/child_running.PNG";
  document.f1.rw1.src="/assets/images/w.gif";
  document.getElementById("runchild").style.pointerEvents = "none";
  document.getElementById("unmark1").checked = true; //kid gave wrong answer 
  enableSubmit();
  }
  
  function test3_sinhala()
  {
  document.f1.clip2.src="/assets/images/mother-cooking.PNG";
  document.f1.rect.src="/assets/images/trans.svg";
  document.f1.sqr.src="/assets/images/mother-scolding.PNG";
  document.f1.rw2.src="/assets/images/yay_bunny2.gif";
  document.getElementById("blamemother").style.pointerEvents = "none";
  document.getElementById("mark2").checked = true; //kid gave right answer 
  enableSubmit();
  
  }
  function test4_sinhala()
  {
  document.f1.clip2.src="/assets/images/mother-scolding.PNG";
  document.f1.sqr.src="/assets/images/trans.svg";
  document.f1.rect.src="/assets/images/mother-cooking.PNG";
  document.f1.rw2.src="/assets/images/w.gif";
  document.getElementById("cookmother").style.pointerEvents = "none";
  document.getElementById("unmark2").checked = true; //kid gave wrong answer 
  enableSubmit();
  }
  
  function test5_sinhala()
  {
  document.f1.clip3.src="/assets/images/sun.PNG";
  document.f1.leaf1.src="/assets/images/trans.svg";
  document.f1.leaf2.src="/assets/images/moon.PNG";
  document.f1.rw3.src="/assets/images/w.gif";
  document.getElementById("moon").style.pointerEvents = "none";
  document.getElementById("unmark3").checked = true; //kid gave wrong answer 
  enableSubmit();
  }
  function test6_sinhala()
  {
  document.f1.clip3.src="/assets/images/moon.PNG";
  document.f1.leaf2.src="/assets/images/trans.svg";
  document.f1.leaf1.src="/assets/images/sun.PNG";
  document.f1.rw3.src="/assets/images/yay_bunny2.gif";
  document.getElementById("sun").style.pointerEvents = "none";  
  document.getElementById("mark3").checked = true; //kid gave right answer 
  enableSubmit();
  }
  
  
  $(document).ready(function(){
    $(document).on('click',"#question-sinhala",function () {
    var audio = document.getElementById("quest_audio");
    if (audio.paused) audio.play();
    else audio.pause();
  });
  });
  
  
//--------------------------------Grade 1 Level 1 - Poems-----------------

// -------------------------------Grade 1 Level 1 - words -----------------------
//q1
function wordgame1()
  {
  document.f1.clip1.src="/assets/images/ga.png";
  document.f1.clip3.src="/assets/images/ga.png";
  document.f1.w1.src="/assets/images/trans.svg";
  document.f1.w2.src="/assets/images/ma.png";
  document.f1.rw1.src="/assets/images/sbob1.png";
  document.f1.rw21.src="/assets/images/super1.JPG";
  document.getElementById("wo2").style.pointerEvents = "none";
  document.getElementById("mark1").checked = true; //kid gave right answer 
  
  }

  function wordgame2()
  {
  document.f1.clip1.src="/assets/images/ma.png";
  document.f1.clip3.src="/assets/images/ma.png";
  document.f1.w2.src="/assets/images/trans.svg";
  document.f1.w1.src="/assets/images/ga.png";
  document.f1.rw1.src="/assets/images/w.gif";
  document.f1.rw21.src="/assets/images/trans.svg";
  document.getElementById("wo1").style.pointerEvents = "none";
  document.getElementById("unmark1").checked = true; //kid gave false answer 
  
  }

  function wordgame3()
  {
  document.f1.clip2.src="/assets/images/ii.png";
  document.f1.clip4.src="/assets/images/ii.png";
  document.f1.w3.src="/assets/images/trans.svg";
  document.f1.w4.src="/assets/images/sa.png";
  document.f1.rw2.src="/assets/images/w.gif";
  document.f1.rw22.src="/assets/images/trans.svg";
  document.getElementById("wo4").style.pointerEvents = "none";
  document.getElementById("unmark2").checked = true; //kid gave right answer 
  
  }

  function wordgame4()
  {
  document.f1.clip2.src="/assets/images/sa.png";
  document.f1.clip4.src="/assets/images/sa.png";
  document.f1.w4.src="/assets/images/trans.svg";
  document.f1.w3.src="/assets/images/ii.png";
  document.f1.rw2.src="/assets/images/sbob1.png";
  document.f1.rw22.src="/assets/images/super2.JPG";
  document.getElementById("wo3").style.pointerEvents = "none";
  document.getElementById("mark2").checked = true; //kid gave false answer 
  
  }
  //q2

  function wordgame5()
  {
  document.f1.clip5.src="/assets/images/ga.png";
  document.f1.clip7.src="/assets/images/ga.png";
  document.f1.w6.src="/assets/images/ma.png";
  document.f1.w5.src="/assets/images/trans.svg";
  document.f1.rw3.src="/assets/images/w.gif";
  document.f1.rw23.src="/assets/images/trans.svg";
  document.getElementById("wo6").style.pointerEvents = "none";
  document.getElementById("unmark3").checked = true; //kid gave right answer 
  
  }

  function wordgame6()
  {
  document.f1.clip5.src="/assets/images/ma.png";
  document.f1.clip7.src="/assets/images/ma.png";
  document.f1.w5.src="/assets/images/ga.png";
  document.f1.w6.src="/assets/images/trans.svg";
  document.f1.rw3.src="/assets/images/sbob1.png";
  document.f1.rw23.src="/assets/images/super3.JPG";
  document.getElementById("wo5").style.pointerEvents = "none";
  document.getElementById("mark3").checked = true; //kid gave false answer 
  
  }

  function wordgame7()
  {
  document.f1.clip6.src="/assets/images/ii.png";
  document.f1.clip8.src="/assets/images/ii.png";
  document.f1.w8.src="/assets/images/trans.svg";
  document.f1.w7.src="/assets/images/la.png";
  document.f1.rw4.src="/assets/images/w.gif";
  document.f1.rw24.src="/assets/images/trans.svg";
  document.getElementById("wo8").style.pointerEvents = "none";
  document.getElementById("unmark4").checked = true; //kid gave right answer 
  
  }

  function wordgame8()
  {
  document.f1.clip6.src="/assets/images/la.png";
  document.f1.clip8.src="/assets/images/la.png";
  document.f1.w8.src="/assets/images/trans.svg";
  document.f1.w7.src="/assets/images/ii.png";
  document.f1.rw4.src="/assets/images/sbob1.png";
  document.f1.rw24.src="/assets/images/super4.JPG";
  document.getElementById("wo7").style.pointerEvents = "none";
  document.getElementById("mark4").checked = true; //kid gave false answer 
  
  }

  //q3

  function wordgame9()
  {
  document.f1.clip9.src="/assets/images/ii.png";
  document.f1.clip11.src="/assets/images/ii.png";
  document.f1.w10.src="/assets/images/ma.png";
  document.f1.w9.src="/assets/images/trans.svg";
  document.f1.rw5.src="/assets/images/sbob1.png";
  document.f1.rw25.src="/assets/images/super5.JPG";
  document.getElementById("wo10").style.pointerEvents = "none";
  document.getElementById("mark5").checked = true; //kid gave right answer 
  
  }

  function wordgame10()
  {
  document.f1.clip9.src="/assets/images/ma.png";
  document.f1.clip11.src="/assets/images/ma.png";
  document.f1.w9.src="/assets/images/ii.png";
  document.f1.w10.src="/assets/images/trans.svg";
  document.f1.rw5.src="/assets/images/w.gif";
  document.f1.rw25.src="/assets/images/trans.svg";
  document.getElementById("wo9").style.pointerEvents = "none";
  document.getElementById("unmark5").checked = true; //kid gave false answer 
  
  }

  function wordgame11()
  {
  document.f1.clip10.src="/assets/images/ra.png";
  document.f1.clip12.src="/assets/images/ra.png";
  document.f1.w11.src="/assets/images/trans.svg";
  document.f1.w12.src="/assets/images/sa.png";
  document.f1.rw6.src="/assets/images/sbob1.png";
  document.f1.rw26.src="/assets/images/super6.JPG";
  document.getElementById("wo12").style.pointerEvents = "none";
  document.getElementById("mark6").checked = true; //kid gave right answer 
  
  }

  function wordgame12()
  {
  document.f1.clip10.src="/assets/images/sa.png";
  document.f1.clip12.src="/assets/images/sa.png";
  document.f1.w12.src="/assets/images/trans.svg";
  document.f1.w11.src="/assets/images/ra.png";
  document.f1.rw6.src="/assets/images/w.gif";
  document.f1.rw26.src="/assets/images/trans.svg";
  document.getElementById("wo11").style.pointerEvents = "none";
  document.getElementById("unmark6").checked = true; //kid gave false answer 
  
  }
//-----------------------------------Grade 2---------------------------