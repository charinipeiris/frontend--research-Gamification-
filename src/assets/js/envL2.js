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
