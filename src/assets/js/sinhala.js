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
  document.f1.clip3.src="/assets/images/ga.png";
  document.f1.rw1.src="/assets/images/sbob1.png";
  document.f1.rw21.src="/assets/images/super1.JPG";
  document.getElementById("wo2").style.pointerEvents = "none";
  document.getElementById("mark1").checked = true; //kid gave right answer 
  document.getElementById("wo1").style.border = "4px solid blue";
  }

  function wordgame2()
  {
  document.f1.clip3.src="/assets/images/ma.png";
  document.f1.rw1.src="/assets/images/w.gif";
  document.f1.rw21.src="/assets/images/trans.svg";
  document.getElementById("wo1").style.pointerEvents = "none";
  document.getElementById("unmark1").checked = true; //kid gave false answer 
  document.getElementById("wo1").style.border = "4px solid red";
  }

  function wordgame3()
  {

  document.f1.clip4.src="/assets/images/ii.png";
  document.f1.rw2.src="/assets/images/w.gif";
  document.f1.rw22.src="/assets/images/trans.svg";
  document.getElementById("wo4").style.pointerEvents = "none";
  document.getElementById("unmark2").checked = true; //kid gave false answer 
  document.getElementById("wo4").style.border = "4px solid red";
  
  }

  function wordgame4()
  {
 
  document.f1.clip4.src="/assets/images/sa.png";
  document.f1.rw2.src="/assets/images/sbob1.png";
  document.f1.rw22.src="/assets/images/super2.JPG";
  document.getElementById("wo3").style.pointerEvents = "none";
  document.getElementById("mark2").checked = true; //kid gave true answer 
  document.getElementById("wo4").style.border = "4px solid blue";
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
  }

  function wordgame6()
  {
  document.f1.clip7.src="/assets/images/ma.png";
  document.f1.rw3.src="/assets/images/sbob1.png";
  document.f1.rw23.src="/assets/images/super3.JPG";
  document.getElementById("wo5").style.pointerEvents = "none";
  document.getElementById("mark3").checked = true; //kid gave true answer 
  document.getElementById("wo6").style.border = "4px solid blue";
  }

  function wordgame7()
  {
  document.f1.clip8.src="/assets/images/ii.png";
  document.f1.rw4.src="/assets/images/w.gif";
  document.f1.rw24.src="/assets/images/trans.svg";
  document.getElementById("wo8").style.pointerEvents = "none";
  document.getElementById("unmark4").checked = true; //kid gave false answer 
  document.getElementById("wo8").style.border = "4px solid red";
  
  }

  function wordgame8()
  {
  document.f1.clip8.src="/assets/images/la.png";
  document.f1.rw4.src="/assets/images/sbob1.png";
  document.f1.rw24.src="/assets/images/super4.JPG";
  document.getElementById("wo7").style.pointerEvents = "none";
  document.getElementById("mark4").checked = true; //kid gave false answer 
  document.getElementById("wo8").style.border = "4px solid blue";
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
  }

  function wordgame10()
  {
 
  document.f1.clip11.src="/assets/images/ma.png";
  document.f1.rw5.src="/assets/images/w.gif";
  document.f1.rw25.src="/assets/images/trans.svg";
  document.getElementById("wo9").style.pointerEvents = "none";
  document.getElementById("unmark5").checked = true; //kid gave false answer 
  document.getElementById("wo9").style.border = "4px solid red";
  }

  function wordgame11()
  {
  document.f1.clip12.src="/assets/images/ra.png";
  document.f1.rw6.src="/assets/images/sbob1.png";
  document.f1.rw26.src="/assets/images/super6.JPG";
  document.getElementById("wo12").style.pointerEvents = "none";
  document.getElementById("mark6").checked = true; //kid gave right answer 
  document.getElementById("wo11").style.border = "4px solid blue";
  }

  function wordgame12()
  {
  document.f1.clip12.src="/assets/images/sa.png";
  document.f1.rw6.src="/assets/images/w.gif";
  document.f1.rw26.src="/assets/images/trans.svg";
  document.getElementById("wo11").style.pointerEvents = "none";
  document.getElementById("unmark6").checked = true; //kid gave false answer 
  document.getElementById("wo11").style.border = "4px solid red";
  
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
  }

  function wordgames22()
  {
 
  document.f1.clip1.src="/assets/images/aaa.JPG";
 
  document.f1.rw12.src="/assets/images/sbob1.png";
  document.f1.rw312.src="/assets/images/super1.JPG";
  document.getElementById("wo112").style.pointerEvents = "none";
  document.getElementById("mark1").checked = true; //kid gave false answer 
  document.getElementById("wo212").style.border = "4px solid blue"; 
  }

  function wordgames32()
  {
 
  document.f1.clip2.src="/assets/images/mmm.JPG";
  
  document.f1.rw22.src="/assets/images/sbob1.png";
  document.f1.rw322.src="/assets/images/super2.JPG";
  document.getElementById("wo412").style.pointerEvents = "none";
  document.getElementById("mark2").checked = true; //kid gave right answer 
  document.getElementById("wo312").style.border = "4px solid blue"; 
  }

  function wordgames42()
  {
  
  document.f1.clip2.src="/assets/images/sa.JPG";
  document.f1.rw22.src="/assets/images/w.gif";
  document.f1.rw322.src="/assets/images/trans.svg";
  document.getElementById("wo312").style.pointerEvents = "none";
  document.getElementById("unmark2").checked = true; //kid gave false answer 
  document.getElementById("wo312").style.border = "4px solid red"; 
  }

  function wordgames52()
  {

  document.f1.clip3.src="/assets/images/maa.JPG";
  document.f1.rw32.src="/assets/images/sbob1.png";
  document.f1.rw332.src="/assets/images/super3.JPG";
  document.getElementById("wo612").style.pointerEvents = "none";
  document.getElementById("mark3").checked = true; //kid gave false answer 
  document.getElementById("wo512").style.border = "4px solid blue"; 
  }

  function wordgames62()
  {
  
  document.f1.clip3.src="/assets/images/sa.JPG";
  document.f1.rw32.src="/assets/images/w.gif";
  document.f1.rw332.src="/assets/images/trans.svg";
  document.getElementById("wo512").style.pointerEvents = "none";
  document.getElementById("unmark3").checked = true; //kid gave false answer 
  document.getElementById("wo512").style.border = "4px solid red"; 
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
  }

  function wordgames82()
  {
 
  document.f1.clip7.src="/assets/images/ge.JPG";
  document.f1.rw42.src="/assets/images/sbob1.png";
  document.f1.rw342.src="/assets/images/super4.JPG";
  document.getElementById("wo712").style.pointerEvents = "none";
  document.getElementById("mark1").checked = true; //kid gave false answer 
  document.getElementById("wo812").style.border = "4px solid blue"; 
  }

  function wordgames92()
  {
  
  document.f1.clip8.src="/assets/images/mmm.JPG";
  document.f1.rw52.src="/assets/images/w.gif";
  document.f1.rw352.src="/assets/images/trans.svg";
  document.getElementById("wo1012").style.pointerEvents = "none";
  document.getElementById("mark2").checked = true; //kid gave right answer 
  document.getElementById("wo1012").style.border = "4px solid red"; 
  }

  function wordgames102()
  {
  
  document.f1.clip8.src="/assets/images/da.JPG";
  document.f1.rw52.src="/assets/images/sbob1.png";
  document.f1.rw352.src="/assets/images/super5.JPG";
  document.getElementById("wo912").style.pointerEvents = "none";
  document.getElementById("unmark2").checked = true; //kid gave false answer 
  document.getElementById("wo1012").style.border = "4px solid blue"; 
  }

  function wordgames112()
  {
  
  document.f1.clip9.src="/assets/images/ra.JPG";
  document.f1.rw62.src="/assets/images/sbob1.png";
  document.f1.rw362.src="/assets/images/super2.JPG";
  document.getElementById("wo1212").style.pointerEvents = "none";
  document.getElementById("mark3").checked = true; //kid gave true answer 
  document.getElementById("wo1112").style.border = "4px solid blue"; 
  }

  function wordgames122()
  {
  
  document.f1.clip9.src="/assets/images/kk.JPG";
  document.f1.rw62.src="/assets/images/w.gif";
  document.f1.rw362.src="/assets/images/trans.svg";
  document.getElementById("wo1112").style.pointerEvents = "none";
  document.getElementById("unmark3").checked = true; //kid gave false answer 
  document.getElementById("wo1112").style.border = "4px solid red"; 
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
  }

  function wordgames142()
  {
  
  document.f1.clip13.src="/assets/images/ge.JPG";
  document.f1.rw72.src="/assets/images/w.gif";
  document.f1.rw372.src="/assets/images/trans.svg";
  document.getElementById("wo1312").style.pointerEvents = "none";
  document.getElementById("unmark1").checked = true; //kid gave false answer 
  document.getElementById("wo1312").style.border = "4px solid red"; 
  }

  function wordgames152()
  {
  document.f1.clip14.src="/assets/images/da.JPG";
  document.f1.rw82.src="/assets/images/w.gif";
  document.f1.rw382.src="/assets/images/trans.svg";
  document.getElementById("wo1612").style.pointerEvents = "none";
  document.getElementById("unmark2").checked = true; //kid gave right answer 
  document.getElementById("wo1612").style.border = "4px solid red"; 
  }

  function wordgames162()
  {

  document.f1.clip14.src="/assets/images/kk.JPG";
  document.f1.rw82.src="/assets/images/sbob1.png";
  document.f1.rw382.src="/assets/images/super4.JPG";
  document.getElementById("wo1512").style.pointerEvents = "none";
  document.getElementById("mark2").checked = true; //kid gave false answer 
  document.getElementById("wo1612").style.border = "4px solid blue"; 
  }

  function wordgames172()
  {
  document.f1.clip15.src="/assets/images/kaaa.JPG";
  document.f1.rw92.src="/assets/images/sbob1.png";
  document.f1.rw392.src="/assets/images/super5.JPG"
  document.getElementById("wo1812").style.pointerEvents = "none";
  document.getElementById("mark3").checked = true; //kid gave false answer 
  document.getElementById("wo1712").style.border = "4px solid blue"; 
  }

  function wordgames182()
  {
  document.f1.clip15.src="/assets/images/maa.JPG";
  document.f1.rw92.src="/assets/images/w.gif";
  document.f1.rw392.src="/assets/images/trans.svg";
  document.getElementById("wo1712").style.pointerEvents = "none";
  document.getElementById("unmark3").checked = true; //kid gave false answer 
  document.getElementById("wo1712").style.border = "4px solid red"; 
  }

  //Grade 2 - Level 1 - Songs

  //-----------------poems (Grade 1 level 1)-------------------------------

  function song1()
  {
  document.getElementById("so3").style.border = "4px solid red"; 
  document.getElementById("so2").style.pointerEvents = "none";
  document.getElementById("so3").style.pointerEvents = "none";
  document.getElementById("unmark1").checked = true; 
  document.getElementById("so4").style.display = "block";
  }
  
  function song2()
  {
  document.getElementById("so3").style.border = "4px solid red"; 
  document.getElementById("so3").style.pointerEvents = "none";
  document.getElementById("so1").style.pointerEvents = "none";
  document.getElementById("unmark1").checked = true; 
  document.getElementById("so5").style.display = "block";
  }
  
  function song3()
  {
  document.getElementById("so3").style.border = "4px solid blue"; 
  document.getElementById("so1").style.pointerEvents = "none";
  document.getElementById("so2").style.pointerEvents = "none";
  document.getElementById("mark1").checked = true; 
  document.getElementById("so6").style.display = "block";
  }

  function song4()
  {
  document.getElementById("so8").style.border = "4px solid red"; 
  document.getElementById("so7").style.pointerEvents = "none";
  document.getElementById("so9").style.pointerEvents = "none";
  document.getElementById("unmark1").checked = true; 
  document.getElementById("so10").style.display = "block";
  }
  
  function song5()
  {
  document.getElementById("so8").style.border = "4px solid blue"; 
  document.getElementById("so7").style.pointerEvents = "none";
  document.getElementById("so9").style.pointerEvents = "none";
  document.getElementById("unmark1").checked = true; 
  document.getElementById("so11").style.display = "block";
  }

  function song6()
  {
  document.getElementById("so8").style.border = "4px solid red"; 
  document.getElementById("so7").style.pointerEvents = "none";
  document.getElementById("so9").style.pointerEvents = "none";
  document.getElementById("mark1").checked = true; 
  document.getElementById("so12").style.display = "block";
  }
  

  //----------------sentences grade 1 level 1
 
  function sinhala_s21()
  {
  document.getElementById("sin2").style.border = "4px solid red"; 
  document.getElementById("sin2").style.pointerEvents = "none";
  document.getElementById("unmark1").checked = true; 
  document.getElementById("sine1").style.display = "block";
  }
  function sinhala_s22()
  {
  document.getElementById("sin2").style.border = "4px solid blue"; 
  document.getElementById("sin1").style.pointerEvents = "none";
  document.getElementById("mark1").checked = true; 
  document.getElementById("sine2").style.display = "block";
  }
  function sinhala_s23()
  {
    document.getElementById("sin3").style.border = "4px solid blue"; 
    document.getElementById("sin4").style.pointerEvents = "none";
    document.getElementById("mark2").checked = true; 
    document.getElementById("sine4").style.display = "block";
  }
  function sinhala_s24()
  {
    document.getElementById("sin3").style.border = "4px solid red"; 
    document.getElementById("sin3").style.pointerEvents = "none";
    document.getElementById("unmark2").checked = true; 
    document.getElementById("sine3").style.display = "block";
  }
  function sinhala_s25()
  {
    document.getElementById("sin5").style.border = "4px solid blue"; 
    document.getElementById("sin6").style.pointerEvents = "none";
    document.getElementById("mark3").checked = true; 
    document.getElementById("sine6").style.display = "block";
  }
  function sinhala_s26()
  {
    document.getElementById("sin5").style.border = "4px solid red"; 
    document.getElementById("sin5").style.pointerEvents = "none";
    document.getElementById("unmark3").checked = true; 
    document.getElementById("sine5").style.display = "block";
  }

  function sinhala_s27()
  {
  document.getElementById("sin8").style.border = "4px solid red"; 
  document.getElementById("sin8").style.pointerEvents = "none";
  document.getElementById("unmark4").checked = true; 
  document.getElementById("sine7").style.display = "block";
  }
  function sinhala_s28()
  {
  document.getElementById("sin8").style.border = "4px solid blue"; 
  document.getElementById("sin7").style.pointerEvents = "none";
  document.getElementById("mark4").checked = true; 
  document.getElementById("sine8").style.display = "block";
  }
  function sinhala_s29()
  {
    document.getElementById("sin9").style.border = "4px solid blue"; 
    document.getElementById("sin10").style.pointerEvents = "none";
    document.getElementById("mark5").checked = true; 
    document.getElementById("sine10").style.display = "block";
  }
  function sinhala_s30()
  {
    document.getElementById("sin9").style.border = "4px solid red"; 
    document.getElementById("sin9").style.pointerEvents = "none";
    document.getElementById("unmark5").checked = true; 
    document.getElementById("sine9").style.display = "block";
  }

  function sinhala_s31()
  {
  document.getElementById("sin12").style.border = "4px solid red"; 
  document.getElementById("sin12").style.pointerEvents = "none";
  document.getElementById("unmark6").checked = true; 
  document.getElementById("sine11").style.display = "block";
  }
  function sinhala_s32()
  {
  document.getElementById("sin12").style.border = "4px solid blue"; 
  document.getElementById("sin11").style.pointerEvents = "none";
  document.getElementById("mark6").checked = true; 
  document.getElementById("sine12").style.display = "block";
  }

  