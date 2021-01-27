//-----------game 1------------------

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


//------------------------game 3 ------------------------------------------

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
document.getElementById("one-r3").style.pointerEvents = "none";
document.getElementById("unmark2").checked = true; 
document.getElementById("one-r4").setAttribute("src", "/assets/images/w.gif")
document.getElementById("one-r4").style.display = "block";
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
document.getElementById("one-r4").setAttribute("src", "/assets/images/w.gif")
document.getElementById("one-r4").style.display = "block";
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