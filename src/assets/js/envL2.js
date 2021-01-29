//-----------game 1 garde 1 level 2------------------

function family1()
{
document.getElementById("fam1").style.border = "4px solid blue"; 
document.getElementById("fam2").style.pointerEvents = "none";
document.getElementById("fam3").style.pointerEvents = "none";
document.getElementById("mark1").checked = true; 
document.getElementById("fam4").setAttribute("src", "/assets/images/yay_bunny2.gif");
var myAudio = new Audio('/assets/audio/yay.mp3');
document.getElementById("rew1").style.filter = "grayscale(0%)"
myAudio.play();
enableSubmit_env1()

}

function family2()
{
  document.getElementById("fam1").style.border = "4px solid red"; 
  document.getElementById("fam1").style.pointerEvents = "none";
  document.getElementById("fam3").style.pointerEvents = "none";
  document.getElementById("unmark1").checked = true; 
  document.getElementById("fam4").setAttribute("src","/assets/images/w.gif");
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_env1()
}
function family3()
{
  document.getElementById("fam1").style.border = "4px solid red"; 
  document.getElementById("fam2").style.pointerEvents = "none";
  document.getElementById("fam1").style.pointerEvents = "none";
  document.getElementById("unmark1").checked = true; 
 document.getElementById("fam4").setAttribute("src","/assets/images/w.gif");
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_env1()
}

//--------
function family4()
{
  document.getElementById("fam8").style.border = "4px solid red"; 
  document.getElementById("fam8").style.pointerEvents = "none";
  document.getElementById("fam9").style.pointerEvents = "none";
  document.getElementById("unmark2").checked = true; 
  document.getElementById("fam5").setAttribute("src", "/assets/images/w.gif");
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_env1()
}
function family5()
{
document.getElementById("fam8").style.border = "4px solid blue"; 
document.getElementById("fam7").style.pointerEvents = "none";
document.getElementById("fam9").style.pointerEvents = "none";
document.getElementById("mark2").checked = true; 
document.getElementById("fam5").setAttribute("src", "/assets/images/yay_bunny2.gif");
var myAudio = new Audio('/assets/audio/yay.mp3');
document.getElementById("rew2").style.filter = "grayscale(0%)"
myAudio.play();
enableSubmit_env1()

}

function family6()
{
  document.getElementById("fam8").style.border = "4px solid red"; 
  document.getElementById("fam7").style.pointerEvents = "none";
  document.getElementById("fam9").style.pointerEvents = "none";
  document.getElementById("unmark2").checked = true; 
  document.getElementById("fam5").setAttribute("src", "/assets/images/w.gif");
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_env1()
}

//-----

function family7()
{
  document.getElementById("fam15").style.border = "4px solid red"; 
  document.getElementById("fam14").style.pointerEvents = "none";
  document.getElementById("fam15").style.pointerEvents = "none";
  document.getElementById("unmark3").checked = true; 
  document.getElementById("fam6").setAttribute("src", "/assets/images/w.gif");
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_env1()
}

function family8()
{
  document.getElementById("fam15").style.border = "4px solid red"; 
  document.getElementById("fam14").style.pointerEvents = "none";
  document.getElementById("fam16").style.pointerEvents = "none";
  document.getElementById("unmark3").checked = true; 
  document.getElementById("fam6").setAttribute("src", "/assets/images/w.gif");
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_env1()
}

function family9()
{
document.getElementById("fam15").style.border = "4px solid blue"; 
document.getElementById("fam14").style.pointerEvents = "none";
document.getElementById("fam15").style.pointerEvents = "none";
document.getElementById("mark3").checked = true; 
document.getElementById("fam6").setAttribute("src", "/assets/images/yay_bunny2.gif");
var myAudio = new Audio('/assets/audio/yay.mp3');
document.getElementById("rew3").style.filter = "grayscale(0%)"
myAudio.play();
enableSubmit_env1()

}

//----

function family10()
{
document.getElementById("fam19").style.border = "4px solid blue"; 
document.getElementById("fam20").style.pointerEvents = "none";
document.getElementById("fam21").style.pointerEvents = "none";
document.getElementById("mark4").checked = true; 
document.getElementById("fam10").setAttribute("src", "/assets/images/yay_bunny2.gif");
var myAudio = new Audio('/assets/audio/yay.mp3');
document.getElementById("rew4").style.filter = "grayscale(0%)"
myAudio.play();
enableSubmit_env1()

}

function family11()
{
  document.getElementById("fam19").style.border = "4px solid red"; 
  document.getElementById("fam19").style.pointerEvents = "none";
  document.getElementById("fam21").style.pointerEvents = "none";
  document.getElementById("unmark4").checked = true; 
  document.getElementById("fam10").setAttribute("src", "/assets/images/w.gif");
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_env1()
}
function family12()
{
  document.getElementById("fam19").style.border = "4px solid red"; 
  document.getElementById("fam20").style.pointerEvents = "none";
  document.getElementById("fam21").style.pointerEvents = "none";
  document.getElementById("unmark4").checked = true; 
  document.getElementById("fam10").setAttribute("src", "/assets/images/w.gif");
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_env1()
}

function enableSubmit_env1(){
  var chk = document.querySelectorAll('input[type="checkbox"]:checked').length;
  if (chk == 4){
       document.getElementById("submit").style.display="block";
       document.getElementById("arrow1").style.display="block";
        }
  else{
      document.getElementById("submit").style.display="none";
        }
        }

//-----------game 2 garde 1 level 2------------------

function scl1()
{
document.getElementById("scl1").style.border = "4px solid blue"; 
document.getElementById("scl2").style.pointerEvents = "none";
document.getElementById("scl3").style.pointerEvents = "none";
document.getElementById("mark1").checked = true; 
document.getElementById("scl10").setAttribute("src", "/assets/images/yay_bunny2.gif");
var myAudio = new Audio('/assets/audio/yay.mp3');
document.getElementById("rew1").style.filter = "grayscale(0%)"
myAudio.play();
enableSubmit_envscl1();

}

function scl2()
{
  document.getElementById("scl1").style.border = "4px solid red"; 
  document.getElementById("scl1").style.pointerEvents = "none";
  document.getElementById("scl3").style.pointerEvents = "none";
  document.getElementById("unmark1").checked = true; 
  document.getElementById("scl10").setAttribute("src","/assets/images/w.gif");
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_envscl1();
}
function scl3()
{
  document.getElementById("scl1").style.border = "4px solid red"; 
  document.getElementById("scl2").style.pointerEvents = "none";
  document.getElementById("scl1").style.pointerEvents = "none";
  document.getElementById("unmark1").checked = true; 
 document.getElementById("scl10").setAttribute("src","/assets/images/w.gif");
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_envscl1()
}

//--------
function scl4()
{
  document.getElementById("scl6").style.border = "4px solid red"; 
  document.getElementById("scl5").style.pointerEvents = "none";
  document.getElementById("scl6").style.pointerEvents = "none";
  document.getElementById("unmark2").checked = true; 
  document.getElementById("scl11").setAttribute("src", "/assets/images/w.gif");
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_envscl1()
}

function scl5()
{
  document.getElementById("scl6").style.border = "4px solid red"; 
  document.getElementById("scl4").style.pointerEvents = "none";
  document.getElementById("scl6").style.pointerEvents = "none";
  document.getElementById("unmark2").checked = true; 
  document.getElementById("scl11").setAttribute("src", "/assets/images/w.gif");
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_envscl1();
}

function scl6()
{
document.getElementById("scl6").style.border = "4px solid blue"; 
document.getElementById("scl4").style.pointerEvents = "none";
document.getElementById("scl5").style.pointerEvents = "none";
document.getElementById("mark2").checked = true; 
document.getElementById("scl11").setAttribute("src", "/assets/images/yay_bunny2.gif");
var myAudio = new Audio('/assets/audio/yay.mp3');
document.getElementById("rew2").style.filter = "grayscale(0%)"
myAudio.play();
enableSubmit_envscl1();

}



//-----

function scl7()
{
  document.getElementById("scl9").style.border = "4px solid red"; 
  document.getElementById("scl8").style.pointerEvents = "none";
  document.getElementById("scl9").style.pointerEvents = "none";
  document.getElementById("unmark3").checked = true; 
  document.getElementById("scl12").setAttribute("src", "/assets/images/w.gif");
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_envscl1()
}

function scl8()
{
  document.getElementById("scl9").style.border = "4px solid red"; 
  document.getElementById("scl7").style.pointerEvents = "none";
  document.getElementById("scl9").style.pointerEvents = "none";
  document.getElementById("unmark3").checked = true; 
  document.getElementById("scl12").setAttribute("src", "/assets/images/w.gif");
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_envscl1()
}

function scl9()
{
document.getElementById("scl9").style.border = "4px solid blue"; 
document.getElementById("scl7").style.pointerEvents = "none";
document.getElementById("scl8").style.pointerEvents = "none";
document.getElementById("mark3").checked = true; 
document.getElementById("scl12").setAttribute("src", "/assets/images/yay_bunny2.gif");
var myAudio = new Audio('/assets/audio/yay.mp3');
document.getElementById("rew3").style.filter = "grayscale(0%)"
myAudio.play();
enableSubmit_envscl1()

}

function enableSubmit_envscl1(){
  var chk = document.querySelectorAll('input[type="checkbox"]:checked').length;
  if (chk == 3){
       document.getElementById("submit").style.display="block";
       document.getElementById("arrow1").style.display="block";
        }
  else{
      document.getElementById("submit").style.display="none";
        }
        }



//------------------------game 3 garde 1 level 2------------------------------------------

function enableSubmit_env3_g1l2(){
  var chk = document.querySelectorAll('input[type="checkbox"]:checked').length;
  if (chk == 4){
       document.getElementById("submit").style.display="block";
       document.getElementById("arrow1").style.display="block";
        }
  else{
      document.getElementById("submit").style.display="none";
        }
        }

function animalal2g1_1()
{
document.getElementById("one-r1").style.border = "4px solid red"; 
document.getElementById("one-r2").style.pointerEvents = "none";
document.getElementById("one-r3").style.pointerEvents = "none";
document.getElementById("unmark1").checked = true; 
document.getElementById("one-r4").setAttribute("src", "/assets/images/w.gif")
document.getElementById("one-r4").style.display = "block";
var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_env3_g1l2();
}

function animalal2g1_2()
{
document.getElementById("one-r2").style.border = "4px solid red"; 
document.getElementById("one-r1").style.pointerEvents = "none";
document.getElementById("one-r3").style.pointerEvents = "none";
document.getElementById("unmark1").checked = true; 
document.getElementById("one-r4").setAttribute("src", "/assets/images/w.gif")
document.getElementById("one-r4").style.display = "block";
var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_env3_g1l2();
}

function animalal2g1_3()
{
document.getElementById("one-r3").style.border = "4px solid blue"; 
document.getElementById("one-r1").style.pointerEvents = "none";
document.getElementById("one-r2").style.pointerEvents = "none";
document.getElementById("mark1").checked = true; 
document.getElementById("one-r4").style.display = "block";
document.getElementById("rew1").style.filter = "grayscale(0%)"
document.getElementById("cell-1").style.border = "4px solid #4b53bd";
var myAudio = new Audio('/assets/audio/yay.mp3');
  myAudio.play();
  enableSubmit_env3_g1l2();
}

function animalal2g1_4()
{
document.getElementById("two-r1").style.border = "4px solid red"; 
document.getElementById("two-r2").style.pointerEvents = "none";
document.getElementById("one-r3").style.pointerEvents = "none";
document.getElementById("unmark2").checked = true; 
document.getElementById("one-r4").setAttribute("src", "/assets/images/w.gif")
document.getElementById("one-r4").style.display = "block";
var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_env3_g1l2();
}

function animalal2g1_5()
{
document.getElementById("two-r2").style.border = "4px solid blue"; 
document.getElementById("two-r1").style.pointerEvents = "none";
document.getElementById("two-r3").style.pointerEvents = "none";
document.getElementById("mark2").checked = true; 
document.getElementById("two-r4").style.display = "block";
document.getElementById("rew2").style.filter = "grayscale(0%)"
document.getElementById("cell-2").style.border = "4px solid pink";
var myAudio = new Audio('/assets/audio/yay.mp3');
  myAudio.play();
  enableSubmit_env3_g1l2();
}

function animalal2g1_6()
{
document.getElementById("two-r3").style.border = "4px solid red"; 
document.getElementById("two-r1").style.pointerEvents = "none";
document.getElementById("two-r2").style.pointerEvents = "none";
document.getElementById("unmark2").checked = true; 
document.getElementById("one-r4").setAttribute("src", "/assets/images/w.gif")
document.getElementById("one-r4").style.display = "block";
var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_env3_g1l2();
}

function animalal2g1_7()
{
document.getElementById("three-r1").style.border = "4px solid blue"; 
document.getElementById("three-r2").style.pointerEvents = "none";
document.getElementById("mark3").checked = true; 
document.getElementById("three-r4").style.display = "block";
document.getElementById("cell-3").style.border = "4px solid red";
document.getElementById("rew3").style.filter = "grayscale(0%)"
var myAudio = new Audio('/assets/audio/yay.mp3');
  myAudio.play();
  enableSubmit_env3_g1l2();
}

function animalal2g1_8()
{
document.getElementById("three-r2").style.border = "4px solid red"; 
document.getElementById("three-r1").style.pointerEvents = "none";
document.getElementById("unmark3").checked = true; 
document.getElementById("three-r4").setAttribute("src", "/assets/images/w.gif")
document.getElementById("three-r4").style.display = "block";
var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_count1()
}
function animalal2g1_9()
{
document.getElementById("four-r1").style.border = "4px solid blue"; 
document.getElementById("four-r2").style.pointerEvents = "none";
document.getElementById("four-r3").style.pointerEvents = "none";
document.getElementById("mark4").checked = true; 
document.getElementById("four-r4").style.display = "block";
document.getElementById("cell-4").style.border = "4px solid yellow";
document.getElementById("rew4").style.filter = "grayscale(0%)"
var myAudio = new Audio('/assets/audio/yay.mp3');
  myAudio.play();
  enableSubmit_env3_g1l2();
}

function animalal2g1_10()
{
document.getElementById("four-r2").style.border = "4px solid red"; 
document.getElementById("four-r1").style.pointerEvents = "none";
document.getElementById("four-r3").style.pointerEvents = "none";
document.getElementById("unmark4").checked = true; 
document.getElementById("four-r4").setAttribute("src", "/assets/images/w.gif")
document.getElementById("four-r4").style.display = "block";
var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_env3_g1l2();
}

function animalal2g1_11()
{
document.getElementById("four-r3").style.border = "4px solid red"; 
document.getElementById("four-r1").style.pointerEvents = "none";
document.getElementById("four-r2").style.pointerEvents = "none";
document.getElementById("unmark4").checked = true; 
document.getElementById("four-r4").setAttribute("src", "/assets/images/w.gif")
document.getElementById("four-r4").style.display = "block";
var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_env3_g1l2();
}

//--------------- Grade 1 level 2 - environment "ape aurudu" game 4---------------

function aurudu21()
{
document.getElementById("one-r1").style.border = "4px solid red"; 
document.getElementById("one-r2").style.pointerEvents = "none";
document.getElementById("one-r3").style.pointerEvents = "none";
document.getElementById("unmark1").checked = true; 
document.getElementById("one-r4").setAttribute("src", "/assets/images/w.gif")
document.getElementById("one-r4").style.display = "block";
var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_sinhala()
}

function aurudu22()
{
document.getElementById("one-r2").style.border = "4px solid red"; 
document.getElementById("one-r1").style.pointerEvents = "none";
document.getElementById("one-r3").style.pointerEvents = "none";
document.getElementById("unmark1").checked = true; 
document.getElementById("one-r4").setAttribute("src", "/assets/images/w.gif")
document.getElementById("one-r4").style.display = "block";
var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_sinhala()
}

function aurudu23()
{
document.getElementById("one-r3").style.border = "4px solid blue"; 
document.getElementById("one-r1").style.pointerEvents = "none";
document.getElementById("one-r2").style.pointerEvents = "none";
document.getElementById("mark1").checked = true; 
document.getElementById("one-r4").style.display = "block";
document.getElementById("rew1").style.filter = "grayscale(0%)"
document.getElementById("cell-1").style.border = "4px solid #4b53bd";
var myAudio = new Audio('/assets/audio/yay.mp3');
  myAudio.play();
  enableSubmit_sinhala()
}

function aurudu24()
{
document.getElementById("two-r1").style.border = "4px solid red"; 
document.getElementById("two-r2").style.pointerEvents = "none";
document.getElementById("two-r3").style.pointerEvents = "none";
document.getElementById("unmark2").checked = true; 
document.getElementById("two-r4").setAttribute("src", "/assets/images/w.gif")
document.getElementById("two-r4").style.display = "block";
var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_sinhala()
}

function aurudu25()
{
document.getElementById("two-r2").style.border = "4px solid blue"; 
document.getElementById("two-r1").style.pointerEvents = "none";
document.getElementById("two-r3").style.pointerEvents = "none";
document.getElementById("mark2").checked = true; 
document.getElementById("two-r4").style.display = "block";
document.getElementById("rew2").style.filter = "grayscale(0%)"
document.getElementById("cell-2").style.border = "4px solid pink";
var myAudio = new Audio('/assets/audio/yay.mp3');
  myAudio.play();
  enableSubmit_sinhala()
}

function aurudu26()
{
document.getElementById("two-r3").style.border = "4px solid red"; 
document.getElementById("two-r1").style.pointerEvents = "none";
document.getElementById("two-r2").style.pointerEvents = "none";
document.getElementById("unmark2").checked = true; 
document.getElementById("two-r4").setAttribute("src", "/assets/images/w.gif")
document.getElementById("two-r4").style.display = "block";
var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_sinhala()
}

function aurudu27()
{
document.getElementById("three-r1").style.border = "4px solid red"; 
document.getElementById("three-r2").style.pointerEvents = "none";
document.getElementById("three-r3").style.pointerEvents = "none";
document.getElementById("unmark3").checked = true; 
document.getElementById("three-r4").setAttribute("src", "/assets/images/w.gif")
document.getElementById("three-r4").style.display = "block";
var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_sinhala()
}

function aurudu28()
{
document.getElementById("three-r2").style.border = "4px solid blue"; 
document.getElementById("three-r1").style.pointerEvents = "none";
document.getElementById("three-r3").style.pointerEvents = "none";
document.getElementById("mark3").checked = true; 
document.getElementById("three-r4").style.display = "block";
document.getElementById("cell-3").style.border = "4px solid red";
document.getElementById("rew3").style.filter = "grayscale(0%)"
var myAudio = new Audio('/assets/audio/yay.mp3');
  myAudio.play();
  enableSubmit_sinhala()
}

function aurudu29()
{
document.getElementById("three-r3").style.border = "4px solid red"; 
document.getElementById("three-r1").style.pointerEvents = "none";
document.getElementById("three-r2").style.pointerEvents = "none";
document.getElementById("unmark3").checked = true; 
document.getElementById("three-r4").setAttribute("src", "/assets/images/w.gif")
document.getElementById("three-r4").style.display = "block";
var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_sinhala()
}

function aurudu210()
{
document.getElementById("four-r1").style.border = "4px solid blue"; 
document.getElementById("four-r2").style.pointerEvents = "none";
document.getElementById("four-r3").style.pointerEvents = "none";
document.getElementById("mark4").checked = true; 
document.getElementById("four-r4").style.display = "block";
document.getElementById("cell-4").style.border = "4px solid yellow";
document.getElementById("rew4").style.filter = "grayscale(0%)"
var myAudio = new Audio('/assets/audio/yay.mp3');
  myAudio.play();
  enableSubmit_sinhala()
}

function aurudu211()
{
document.getElementById("four-r2").style.border = "4px solid red"; 
document.getElementById("four-r1").style.pointerEvents = "none";
document.getElementById("four-r3").style.pointerEvents = "none";
document.getElementById("unmark4").checked = true; 
document.getElementById("four-r4").setAttribute("src", "/assets/images/w.gif")
document.getElementById("four-r4").style.display = "block";
var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_sinhala()
}

function aurudu212()
{
document.getElementById("four-r3").style.border = "4px solid red"; 
document.getElementById("four-r1").style.pointerEvents = "none";
document.getElementById("four-r2").style.pointerEvents = "none";
document.getElementById("unmark4").checked = true; 
document.getElementById("four-r4").setAttribute("src", "/assets/images/w.gif")
document.getElementById("four-r4").style.display = "block";
var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_sinhala()
}

        
//--------------- Grade 1 level 2 - environment "apa awata parisaraya"  game 5---------------
function surrounding1()
{
document.getElementById("one-r1").style.border = "4px solid red"; 
document.getElementById("one-r2").style.pointerEvents = "none";
document.getElementById("one-r3").style.pointerEvents = "none";
document.getElementById("unmark1").checked = true; 
document.getElementById("one-r4").setAttribute("src", "/assets/images/w.gif")
document.getElementById("one-r4").style.display = "block";
var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_count1()
}

function surrounding2()
{
document.getElementById("one-r2").style.border = "4px solid red"; 
document.getElementById("one-r1").style.pointerEvents = "none";
document.getElementById("one-r3").style.pointerEvents = "none";
document.getElementById("unmark1").checked = true; 
document.getElementById("one-r4").setAttribute("src", "/assets/images/w.gif")
document.getElementById("one-r4").style.display = "block";
var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_count1()
}

function surrounding3()
{
document.getElementById("one-r3").style.border = "4px solid blue"; 
document.getElementById("one-r1").style.pointerEvents = "none";
document.getElementById("one-r2").style.pointerEvents = "none";
document.getElementById("mark1").checked = true; 
document.getElementById("one-r4").style.display = "block";
document.getElementById("rew1").style.filter = "grayscale(0%)"
document.getElementById("cell-1").style.border = "4px solid #4b53bd";
var myAudio = new Audio('/assets/audio/yay.mp3');
  myAudio.play();
  enableSubmit_count1()
}

function surrounding4()
{
document.getElementById("two-r1").style.border = "4px solid red"; 
document.getElementById("two-r2").style.pointerEvents = "none";
document.getElementById("one-r3").style.pointerEvents = "none";
document.getElementById("unmark2").checked = true; 
document.getElementById("one-r4").setAttribute("src", "/assets/images/w.gif")
document.getElementById("one-r4").style.display = "block";
var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_count1()
}

function surrounding5()
{
document.getElementById("two-r2").style.border = "4px solid blue"; 
document.getElementById("two-r1").style.pointerEvents = "none";
document.getElementById("two-r3").style.pointerEvents = "none";
document.getElementById("mark2").checked = true; 
document.getElementById("two-r4").style.display = "block";
document.getElementById("rew2").style.filter = "grayscale(0%)"
document.getElementById("cell-2").style.border = "4px solid pink";
var myAudio = new Audio('/assets/audio/yay.mp3');
  myAudio.play();
  enableSubmit_count1()
}

function surrounding6()
{
document.getElementById("two-r3").style.border = "4px solid red"; 
document.getElementById("two-r1").style.pointerEvents = "none";
document.getElementById("two-r2").style.pointerEvents = "none";
document.getElementById("unmark2").checked = true; 
document.getElementById("one-r4").setAttribute("src", "/assets/images/w.gif")
document.getElementById("one-r4").style.display = "block";
var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_count1()
}

function surrounding7()
{
document.getElementById("three-r1").style.border = "4px solid blue"; 
document.getElementById("three-r2").style.pointerEvents = "none";
document.getElementById("mark3").checked = true; 
document.getElementById("three-r4").style.display = "block";
document.getElementById("cell-3").style.border = "4px solid red";
document.getElementById("rew3").style.filter = "grayscale(0%)"
var myAudio = new Audio('/assets/audio/yay.mp3');
  myAudio.play();
  enableSubmit_count1()
}

function surrounding8()
{
document.getElementById("three-r2").style.border = "4px solid red"; 
document.getElementById("three-r1").style.pointerEvents = "none";
document.getElementById("unmark3").checked = true; 
document.getElementById("three-r4").setAttribute("src", "/assets/images/w.gif")
document.getElementById("three-r4").style.display = "block";
var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_count1()
}
function surrounding9()
{
document.getElementById("four-r1").style.border = "4px solid blue"; 
document.getElementById("four-r2").style.pointerEvents = "none";
document.getElementById("four-r3").style.pointerEvents = "none";
document.getElementById("mark4").checked = true; 
document.getElementById("four-r4").style.display = "block";
document.getElementById("cell-4").style.border = "4px solid yellow";
document.getElementById("rew4").style.filter = "grayscale(0%)"
var myAudio = new Audio('/assets/audio/yay.mp3');
  myAudio.play();
  enableSubmit_count1()
}

function surrounding10()
{
document.getElementById("four-r2").style.border = "4px solid red"; 
document.getElementById("four-r1").style.pointerEvents = "none";
document.getElementById("four-r3").style.pointerEvents = "none";
document.getElementById("unmark4").checked = true; 
document.getElementById("four-r4").setAttribute("src", "/assets/images/w.gif")
document.getElementById("four-r4").style.display = "block";
var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_count1()
}

function surrounding11()
{
document.getElementById("four-r3").style.border = "4px solid red"; 
document.getElementById("four-r1").style.pointerEvents = "none";
document.getElementById("four-r2").style.pointerEvents = "none";
document.getElementById("unmark4").checked = true; 
document.getElementById("four-r4").setAttribute("src", "/assets/images/w.gif")
document.getElementById("four-r4").style.display = "block";
var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_count1()
}


function surrounding12()
{
document.getElementById("five-r1").style.border = "4px solid red"; 
document.getElementById("five-r2").style.pointerEvents = "none";
document.getElementById("five-r3").style.pointerEvents = "none";
document.getElementById("unmark5").checked = true; 
document.getElementById("five-r4").setAttribute("src", "/assets/images/w.gif")
document.getElementById("five-r4").style.display = "block";
var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_count1()
}
function surrounding13()
{
document.getElementById("five-r2").style.border = "4px solid blue"; 
document.getElementById("five-r1").style.pointerEvents = "none";
document.getElementById("five-r3").style.pointerEvents = "none";
document.getElementById("mark5").checked = true; 
document.getElementById("five-r4").style.display = "block";
document.getElementById("cell-5").style.border = "4px solid #69bbc3";
document.getElementById("rew5").style.filter = "grayscale(0%)"
var myAudio = new Audio('/assets/audio/yay.mp3');
  myAudio.play();
  enableSubmit_count1()
}

function surrounding14()
{
document.getElementById("five-r3").style.border = "4px solid red"; 
document.getElementById("five-r1").style.pointerEvents = "none";
document.getElementById("five-r2").style.pointerEvents = "none";
document.getElementById("unmark5").checked = true; 
document.getElementById("five-r4").setAttribute("src", "/assets/images/w.gif")
document.getElementById("five-r4").style.display = "block";
var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_count1()
}

//--------------- Grade 2 level 2 - environment "aluth aurudu"  game 4---------------
function G2aurudu1()
{
document.getElementById("one-r1").style.border = "4px solid red"; 
document.getElementById("one-r2").style.pointerEvents = "none";
document.getElementById("one-r3").style.pointerEvents = "none";
document.getElementById("unmark1").checked = true; 
document.getElementById("one-r4").setAttribute("src", "/assets/images/w.gif")
document.getElementById("one-r4").style.display = "block";
var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_sinhalaWords()
}

function G2aurudu2()
{
document.getElementById("one-r2").style.border = "4px solid red"; 
document.getElementById("one-r1").style.pointerEvents = "none";
document.getElementById("one-r3").style.pointerEvents = "none";
document.getElementById("unmark1").checked = true; 
document.getElementById("one-r4").setAttribute("src", "/assets/images/w.gif")
document.getElementById("one-r4").style.display = "block";
var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_sinhalaWords()
}

function G2aurudu3()
{
document.getElementById("one-r3").style.border = "4px solid blue"; 
document.getElementById("one-r1").style.pointerEvents = "none";
document.getElementById("one-r2").style.pointerEvents = "none";
document.getElementById("mark1").checked = true; 
document.getElementById("one-r4").style.display = "block";
document.getElementById("rew1").style.filter = "grayscale(0%)"
document.getElementById("cell-1").style.border = "4px solid #4b53bd";
var myAudio = new Audio('/assets/audio/yay.mp3');
  myAudio.play();
  enableSubmit_sinhalaWords()
}

function G2aurudu4()
{
document.getElementById("two-r1").style.border = "4px solid red"; 
document.getElementById("two-r2").style.pointerEvents = "none";
document.getElementById("two-r3").style.pointerEvents = "none";
document.getElementById("unmark2").checked = true; 
document.getElementById("two-r4").setAttribute("src", "/assets/images/w.gif")
document.getElementById("two-r4").style.display = "block";
var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_sinhalaWords()
}

function G2aurudu5()
{
document.getElementById("two-r2").style.border = "4px solid blue"; 
document.getElementById("two-r1").style.pointerEvents = "none";
document.getElementById("two-r3").style.pointerEvents = "none";
document.getElementById("mark2").checked = true; 
document.getElementById("two-r4").style.display = "block";
document.getElementById("rew2").style.filter = "grayscale(0%)"
document.getElementById("cell-2").style.border = "4px solid pink";
var myAudio = new Audio('/assets/audio/yay.mp3');
  myAudio.play();
  enableSubmit_sinhalaWords()
}

function G2aurudu6()
{
document.getElementById("two-r3").style.border = "4px solid red"; 
document.getElementById("two-r1").style.pointerEvents = "none";
document.getElementById("two-r2").style.pointerEvents = "none";
document.getElementById("unmark2").checked = true; 
document.getElementById("two-r4").setAttribute("src", "/assets/images/w.gif")
document.getElementById("two-r4").style.display = "block";
var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_sinhalaWords()
}

function G2aurudu7()
{
document.getElementById("three-r1").style.border = "4px solid red"; 
document.getElementById("three-r2").style.pointerEvents = "none";
document.getElementById("three-r3").style.pointerEvents = "none";
document.getElementById("unmark3").checked = true; 
document.getElementById("three-r4").setAttribute("src", "/assets/images/w.gif")
document.getElementById("three-r4").style.display = "block";
var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_sinhalaWords()
}

function G2aurudu8()
{
document.getElementById("three-r2").style.border = "4px solid blue"; 
document.getElementById("three-r1").style.pointerEvents = "none";
document.getElementById("three-r3").style.pointerEvents = "none";
document.getElementById("mark3").checked = true; 
document.getElementById("three-r4").style.display = "block";
document.getElementById("cell-3").style.border = "4px solid red";
document.getElementById("rew3").style.filter = "grayscale(0%)"
var myAudio = new Audio('/assets/audio/yay.mp3');
  myAudio.play();
  enableSubmit_sinhalaWords()
}

function G2aurudu9()
{
document.getElementById("three-r3").style.border = "4px solid red"; 
document.getElementById("three-r1").style.pointerEvents = "none";
document.getElementById("three-r2").style.pointerEvents = "none";
document.getElementById("unmark3").checked = true; 
document.getElementById("three-r4").setAttribute("src", "/assets/images/w.gif")
document.getElementById("three-r4").style.display = "block";
var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_sinhalaWords()
}


function G2aurudu10()
{
document.getElementById("four-r1").style.border = "4px solid blue"; 
document.getElementById("four-r2").style.pointerEvents = "none";
document.getElementById("four-r3").style.pointerEvents = "none";
document.getElementById("mark4").checked = true; 
document.getElementById("four-r4").style.display = "block";
document.getElementById("cell-4").style.border = "4px solid yellow";
document.getElementById("rew4").style.filter = "grayscale(0%)"
var myAudio = new Audio('/assets/audio/yay.mp3');
  myAudio.play();
  enableSubmit_sinhalaWords()
}

function G2aurudu11()
{
document.getElementById("four-r2").style.border = "4px solid red"; 
document.getElementById("four-r1").style.pointerEvents = "none";
document.getElementById("four-r3").style.pointerEvents = "none";
document.getElementById("unmark4").checked = true; 
document.getElementById("four-r4").setAttribute("src", "/assets/images/w.gif")
document.getElementById("four-r4").style.display = "block";
var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_sinhalaWords()
}

function G2aurudu12()
{
document.getElementById("four-r3").style.border = "4px solid red"; 
document.getElementById("four-r1").style.pointerEvents = "none";
document.getElementById("four-r2").style.pointerEvents = "none";
document.getElementById("unmark4").checked = true; 
document.getElementById("four-r4").setAttribute("src", "/assets/images/w.gif")
document.getElementById("four-r4").style.display = "block";
var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_sinhalaWords()
}

function G2aurudu13()
{
document.getElementById("five-r1").style.border = "4px solid blue"; 
document.getElementById("five-r2").style.pointerEvents = "none";
document.getElementById("five-r3").style.pointerEvents = "none";
document.getElementById("mark4").checked = true; 
document.getElementById("five-r4").style.display = "block";
document.getElementById("cell-5").style.border = "4px solid yellow";
document.getElementById("rew5").style.filter = "grayscale(0%)"
var myAudio = new Audio('/assets/audio/yay.mp3');
  myAudio.play();
  enableSubmit_sinhalaWords()
}

function G2aurudu14()
{
document.getElementById("five-r2").style.border = "4px solid red"; 
document.getElementById("five-r1").style.pointerEvents = "none";
document.getElementById("five-r3").style.pointerEvents = "none";
document.getElementById("unmark5").checked = true; 
document.getElementById("five-r4").setAttribute("src", "/assets/images/w.gif")
document.getElementById("five-r4").style.display = "block";
var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_sinhalaWords()
}

function G2aurudu15()
{
document.getElementById("five-r3").style.border = "4px solid red"; 
document.getElementById("five-r1").style.pointerEvents = "none";
document.getElementById("five-r2").style.pointerEvents = "none";
document.getElementById("unmark5").checked = true; 
document.getElementById("five-r4").setAttribute("src", "/assets/images/w.gif")
document.getElementById("five-r4").style.display = "block";
var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_sinhalaWords()
}
function G2aurudu13()
{
document.getElementById("five-r1").style.border = "4px solid blue"; 
document.getElementById("five-r2").style.pointerEvents = "none";
document.getElementById("five-r3").style.pointerEvents = "none";
document.getElementById("mark4").checked = true; 
document.getElementById("five-r4").style.display = "block";
document.getElementById("cell-5").style.border = "4px solid yellow";
document.getElementById("rew5").style.filter = "grayscale(0%)"
var myAudio = new Audio('/assets/audio/yay.mp3');
  myAudio.play();
  enableSubmit_sinhalaWords()
}

function G2aurudu14()
{
document.getElementById("five-r2").style.border = "4px solid red"; 
document.getElementById("five-r1").style.pointerEvents = "none";
document.getElementById("five-r3").style.pointerEvents = "none";
document.getElementById("unmark5").checked = true; 
document.getElementById("five-r4").setAttribute("src", "/assets/images/w.gif")
document.getElementById("five-r4").style.display = "block";
var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_sinhalaWords()
}

function G2aurudu15()
{
document.getElementById("five-r3").style.border = "4px solid red"; 
document.getElementById("five-r1").style.pointerEvents = "none";
document.getElementById("five-r2").style.pointerEvents = "none";
document.getElementById("unmark5").checked = true; 
document.getElementById("five-r4").setAttribute("src", "/assets/images/w.gif")
document.getElementById("five-r4").style.display = "block";
var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_sinhalaWords()
}
function G2aurudu13()
{
document.getElementById("five-r1").style.border = "4px solid red"; 
document.getElementById("five-r2").style.pointerEvents = "none";
document.getElementById("five-r3").style.pointerEvents = "none";
document.getElementById("unmark5").checked = true; 
document.getElementById("five-r4").setAttribute("src", "/assets/images/w.gif")
document.getElementById("five-r4").style.display = "block";
var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_sinhalaWords()
}

function G2aurudu14()
{
document.getElementById("five-r2").style.border = "4px solid red"; 
document.getElementById("five-r1").style.pointerEvents = "none";
document.getElementById("five-r3").style.pointerEvents = "none";
document.getElementById("unmark5").checked = true; 
document.getElementById("five-r4").setAttribute("src", "/assets/images/w.gif")
document.getElementById("five-r4").style.display = "block";
var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_sinhalaWords()
}

function G2aurudu15()
{
document.getElementById("five-r3").style.border = "4px solid blue"; 
document.getElementById("five-r1").style.pointerEvents = "none";
document.getElementById("five-r2").style.pointerEvents = "none";
document.getElementById("mark5").checked = true; 
document.getElementById("five-r4").style.display = "block";
document.getElementById("cell-5").style.border = "4px solid #69bbc3";
document.getElementById("rew5").style.filter = "grayscale(0%)"
var myAudio = new Audio('/assets/audio/yay.mp3');
  myAudio.play();
  enableSubmit_sinhalaWords()
}
function G2aurudu16()
{
document.getElementById("six-r1").style.border = "4px solid blue"; 
document.getElementById("six-r2").style.pointerEvents = "none";
document.getElementById("six-r3").style.pointerEvents = "none";
document.getElementById("mark6").checked = true; 
document.getElementById("six-r4").style.display = "block";
document.getElementById("cell-6").style.border = "4px solid #da1d8e";
document.getElementById("rew6").style.filter = "grayscale(0%)"
var myAudio = new Audio('/assets/audio/yay.mp3');
  myAudio.play();
  enableSubmit_sinhalaWords()
}

function G2aurudu17()
{
document.getElementById("six-r2").style.border = "4px solid red"; 
document.getElementById("six-r1").style.pointerEvents = "none";
document.getElementById("six-r3").style.pointerEvents = "none";
document.getElementById("unmark6").checked = true; 
document.getElementById("six-r4").setAttribute("src", "/assets/images/w.gif")
document.getElementById("six-r4").style.display = "block";
var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_sinhalaWords()
}

function G2aurudu18()
{
document.getElementById("six-r3").style.border = "4px solid red"; 
document.getElementById("six-r1").style.pointerEvents = "none";
document.getElementById("six-r2").style.pointerEvents = "none";
document.getElementById("unmark6").checked = true; 
document.getElementById("six-r4").setAttribute("src", "/assets/images/w.gif")
document.getElementById("six-r4").style.display = "block";
var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_sinhalaWords()
}



//==========================================================
//=============grade 2 level 2===================================

//-----------game 01 (family)---------------------


function families1()
{
document.getElementById("fam1").style.border = "4px solid blue"; 
document.getElementById("fam2").style.pointerEvents = "none";
document.getElementById("fam3").style.pointerEvents = "none";
document.getElementById("mark1").checked = true; 
document.getElementById("fam4").setAttribute("src", "/assets/images/yay_bunny2.gif");
var myAudio = new Audio('/assets/audio/yay.mp3');
document.getElementById("rew1").style.filter = "grayscale(0%)";
document.getElementById("cell-1").style.border = "4px solid #4b53bd";
myAudio.play();
enableSubmit_familyg2l2();

}

function families2()
{
  document.getElementById("fam1").style.border = "4px solid red"; 
  document.getElementById("fam1").style.pointerEvents = "none";
  document.getElementById("fam3").style.pointerEvents = "none";
  document.getElementById("unmark1").checked = true; 
  document.getElementById("fam4").setAttribute("src","/assets/images/w.gif");
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_familyg2l2();
}
function families3()
{
  document.getElementById("fam1").style.border = "4px solid red"; 
  document.getElementById("fam2").style.pointerEvents = "none";
  document.getElementById("fam1").style.pointerEvents = "none";
  document.getElementById("unmark1").checked = true; 
 document.getElementById("fam4").setAttribute("src","/assets/images/w.gif");
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_familyg2l2();
}

//--------2--------
function families4()
{
  document.getElementById("fam8").style.border = "4px solid red"; 
  document.getElementById("fam8").style.pointerEvents = "none";
  document.getElementById("fam9").style.pointerEvents = "none";
  document.getElementById("unmark2").checked = true; 
  document.getElementById("fam5").setAttribute("src", "/assets/images/w.gif");
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_familyg2l2();
}
function families5()
{
document.getElementById("fam8").style.border = "4px solid blue"; 
document.getElementById("fam7").style.pointerEvents = "none";
document.getElementById("fam9").style.pointerEvents = "none";
document.getElementById("mark2").checked = true; 
document.getElementById("fam5").setAttribute("src", "/assets/images/yay_bunny2.gif");
var myAudio = new Audio('/assets/audio/yay.mp3');
document.getElementById("rew2").style.filter = "grayscale(0%)";
document.getElementById("cell-2").style.border = "4px solid pink";
myAudio.play();
enableSubmit_familyg2l2();

}

function families6()
{
  document.getElementById("fam8").style.border = "4px solid red"; 
  document.getElementById("fam7").style.pointerEvents = "none";
  document.getElementById("fam9").style.pointerEvents = "none";
  document.getElementById("unmark2").checked = true; 
  document.getElementById("fam5").setAttribute("src", "/assets/images/w.gif");
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_familyg2l2();
}

//-----3-----

function families7()
{
  document.getElementById("fam15").style.border = "4px solid red"; 
  document.getElementById("fam14").style.pointerEvents = "none";
  document.getElementById("fam15").style.pointerEvents = "none";
  document.getElementById("unmark3").checked = true; 
  document.getElementById("fam6").setAttribute("src", "/assets/images/w.gif");
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_familyg2l2();
}

function families8()
{
  document.getElementById("fam15").style.border = "4px solid red"; 
  document.getElementById("fam14").style.pointerEvents = "none";
  document.getElementById("fam16").style.pointerEvents = "none";
  document.getElementById("unmark3").checked = true; 
  document.getElementById("fam6").setAttribute("src", "/assets/images/w.gif");
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_familyg2l2();
}

function families9()
{
document.getElementById("fam15").style.border = "4px solid blue"; 
document.getElementById("fam14").style.pointerEvents = "none";
document.getElementById("fam15").style.pointerEvents = "none";
document.getElementById("mark3").checked = true; 
document.getElementById("fam6").setAttribute("src", "/assets/images/yay_bunny2.gif");
var myAudio = new Audio('/assets/audio/yay.mp3');
document.getElementById("rew3").style.filter = "grayscale(0%)";
document.getElementById("cell-3").style.border = "4px solid red";
myAudio.play();
enableSubmit_familyg2l2();

}

//----4

function families10()
{
document.getElementById("fam19").style.border = "4px solid blue"; 
document.getElementById("fam20").style.pointerEvents = "none";
document.getElementById("fam21").style.pointerEvents = "none";
document.getElementById("mark4").checked = true; 
document.getElementById("fam10").setAttribute("src", "/assets/images/yay_bunny2.gif");
var myAudio = new Audio('/assets/audio/yay.mp3');
document.getElementById("rew4").style.filter = "grayscale(0%)";
document.getElementById("cell-4").style.border = "4px solid yellow";
myAudio.play();
enableSubmit_familyg2l2();

}

function families11()
{
  document.getElementById("fam19").style.border = "4px solid red"; 
  document.getElementById("fam19").style.pointerEvents = "none";
  document.getElementById("fam21").style.pointerEvents = "none";
  document.getElementById("unmark4").checked = true; 
  document.getElementById("fam10").setAttribute("src", "/assets/images/w.gif");
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_familyg2l2();
}
function families12()
{
  document.getElementById("fam19").style.border = "4px solid red"; 
  document.getElementById("fam20").style.pointerEvents = "none";
  document.getElementById("fam21").style.pointerEvents = "none";
  document.getElementById("unmark4").checked = true; 
  document.getElementById("fam10").setAttribute("src", "/assets/images/w.gif");
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_familyg2l2();
}


//----5-----

function families13()
{
  document.getElementById("fam24").style.border = "4px solid red"; 
  document.getElementById("fam23").style.pointerEvents = "none";
  document.getElementById("fam24").style.pointerEvents = "none";
  document.getElementById("unmark5").checked = true; 
  document.getElementById("fam25").setAttribute("src", "/assets/images/w.gif");
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_familyg2l2();
}

function families14()
{
  document.getElementById("fam24").style.border = "4px solid red"; 
  document.getElementById("fam22").style.pointerEvents = "none";
  document.getElementById("fam24").style.pointerEvents = "none";
  document.getElementById("unmark5").checked = true; 
  document.getElementById("fam25").setAttribute("src", "/assets/images/w.gif");
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_familyg2l2();
}

function families15()
{
document.getElementById("fam24").style.border = "4px solid blue"; 
document.getElementById("fam23").style.pointerEvents = "none";
document.getElementById("fam22").style.pointerEvents = "none";
document.getElementById("mark5").checked = true; 
document.getElementById("fam25").setAttribute("src", "/assets/images/yay_bunny2.gif");
var myAudio = new Audio('/assets/audio/yay.mp3');
document.getElementById("rew5").style.filter = "grayscale(0%)";
document.getElementById("cell-5").style.border = "4px solid #69bbc3";
myAudio.play();
enableSubmit_familyg2l2();

}

//-------6-----

function families16()
{
  document.getElementById("fam27").style.border = "4px solid red"; 
  document.getElementById("fam27").style.pointerEvents = "none";
  document.getElementById("fam28").style.pointerEvents = "none";
  document.getElementById("unmark6").checked = true; 
  document.getElementById("fam29").setAttribute("src", "/assets/images/w.gif");
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_env1_g2l2family();
}


function families17()
{
document.getElementById("fam27").style.border = "4px solid blue"; 
document.getElementById("fam26").style.pointerEvents = "none";
document.getElementById("fam28").style.pointerEvents = "none";
document.getElementById("mark6").checked = true; 
document.getElementById("fam29").setAttribute("src", "/assets/images/yay_bunny2.gif");
var myAudio = new Audio('/assets/audio/yay.mp3');
document.getElementById("rew6").style.filter = "grayscale(0%)";
document.getElementById("cell-6").style.border = "4px solid #da1d8e";
myAudio.play();
enableSubmit_familyg2l2()

}

function families18()
{
  document.getElementById("fam27").style.border = "4px solid red"; 
  document.getElementById("fam27").style.pointerEvents = "none";
  document.getElementById("fam26").style.pointerEvents = "none";
  document.getElementById("unmark6").checked = true; 
  document.getElementById("fam29").setAttribute("src", "/assets/images/w.gif");
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_familyg2l2();
}

function  enableSubmit_familyg2l2(){
  var chk = document.querySelectorAll('input[type="checkbox"]:checked').length;
  if (chk == 6){
       document.getElementById("submit").style.display="block";
       document.getElementById("arrow1").style.display="block";
        }
  else{
      document.getElementById("submit").style.display="none";
        }
        }
      

 //--------------------Audio functions for Grade 1 level 2 ----------------------
 //--------------------Game 1-----------------------------------------------------
 function env_g1_l2_g1_play_2() {
  var audio = document.getElementById("env_g1_l2_g1_play_2");
  audio.play();
}

function env_g1_l2_g1_play_3() {
  var audio = document.getElementById("env_g1_l2_g1_play_3");
  audio.play();
}

function env_g1_l2_g1_play_4() {
  var audio = document.getElementById("env_g1_l2_g1_play_4");
  audio.play();
}

function env_g1_l2_g1_play_5() {
  var audio = document.getElementById("env_g1_l2_g1_play_5");
  audio.play();
}

 //--------------------Game 3-----------------------------------------------------
 function env_g1_l2_g3_play_2() {
  var audio = document.getElementById("env_g1_l2_g3_play_2");
  audio.play();
}

function env_g1_l2_g3_play_3() {
  var audio = document.getElementById("env_g1_l2_g3_play_3");
  audio.play();
}

function env_g1_l2_g3_play_4() {
  var audio = document.getElementById("env_g1_l2_g3_play_4");
  audio.play();
}

function env_g1_l2_g3_play_5() {
  var audio = document.getElementById("env_g1_l2_g3_play_5");
  audio.play();
}


 //--------------------Game 4-----------------------------------------------------
 function env_g1_l2_g4_play_2() {
  var audio = document.getElementById("env_g1_l2_g4_play_2");
  audio.play();
}

function env_g1_l2_g4_play_3() {
  var audio = document.getElementById("env_g1_l2_g4_play_3");
  audio.play();
}

function env_g1_l2_g4_play_4() {
  var audio = document.getElementById("env_g1_l2_g4_play_4");
  audio.play();
}

function env_g1_l2_g4_play_5() {
  var audio = document.getElementById("env_g1_l2_g4_play_5");
  audio.play();
}

//--------------------Game 5-----------------------------------------------------
function env_g1_l2_g5_play_2() {
  var audio = document.getElementById("env_g1_l2_g5_play_2");
  audio.play();
}

function env_g1_l2_g5_play_3() {
  var audio = document.getElementById("env_g1_l2_g5_play_3");
  audio.play();
}

function env_g1_l2_g5_play_4() {
  var audio = document.getElementById("env_g1_l2_g5_play_4");
  audio.play();
}

function env_g1_l2_g5_play_5() {
  var audio = document.getElementById("env_g1_l2_g5_play_5");
  audio.play();
}

function env_g1_l2_g5_play_6() {
  var audio = document.getElementById("env_g1_l2_g5_play_6");
  audio.play();
}

//--------------------Game 3 - Animals - Audio-----------------------------------------------------
//--------------------Q5) Cats
function parrot() {
  var audio = document.getElementById("parrot");
  audio.play();
}

//--------------------Q6) Dogs
function dogs_bark() {
  var audio = document.getElementById("dogs_bark");
  audio.play();
}

//--------------------Audio functions for Grade 2 level 2 ----------------------
 //--------------------Game 1-----------------------------------------------------
 function env_g2_l2_g1_play_2() {
  var audio = document.getElementById("env_g2_l2_g1_play_2");
  audio.play();
}

function env_g2_l2_g1_play_6() {
  var audio = document.getElementById("env_g2_l2_g1_play_6");
  audio.play();
}

function env_g2_l2_g1_play_7() {
  var audio = document.getElementById("env_g2_l2_g1_play_7");
  audio.play();
}

 //--------------------Game 2-----------------------------------------------------
 function env_g2_l2_g2_play_2() {
  var audio = document.getElementById("env_g2_l2_g2_play_2");
  audio.play();
}

function env_g2_l2_g2_play_3() {
  var audio = document.getElementById("env_g2_l2_g2_play_3");
  audio.play();
}

function env_g2_l2_g2_play_4() {
  var audio = document.getElementById("env_g2_l2_g2_play_4");
  audio.play();
}

 //--------------------Game 3-----------------------------------------------------
 function env_g2_l2_g3_play_6() {
  var audio = document.getElementById("env_g2_l2_g3_play_6");
  audio.play();
}

function env_g2_l2_g3_play_7() {
  var audio = document.getElementById("env_g2_l2_g3_play_7");
  audio.play();
}

//--------------------Game 4-----------------------------------------------------
function env_g2_l2_g4_play_6() {
  var audio = document.getElementById("env_g2_l2_g4_play_6");
  audio.play();
}

function env_g2_l2_g4_play_7() {
  var audio = document.getElementById("env_g2_l2_g4_play_7");
  audio.play();
}

//--------------------Game 5-----------------------------------------------------
function env_g2_l2_g5_play_4() {
  var audio = document.getElementById("env_g2_l2_g5_play_4");
  audio.play();
}

function env_g2_l2_g5_play_5() {
  var audio = document.getElementById("env_g2_l2_g5_play_5");
  audio.play();
}

function env_g2_l2_g5_play_6() {
  var audio = document.getElementById("env_g2_l2_g5_play_6");
  audio.play();
}