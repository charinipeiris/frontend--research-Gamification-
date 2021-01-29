//---------------game 1 ----------------------------------------------------------
function fin1()
{
document.getElementById("fins1").style.border = "4px solid blue"; 
document.getElementById("fins2").style.pointerEvents = "none";
document.getElementById("fins3").style.pointerEvents = "none";
document.getElementById("mark1").checked = true; 
document.getElementById("fins10").setAttribute("src", "/assets/images/yay_bunny2.gif");
var myAudio = new Audio('/assets/audio/yay.mp3');
document.getElementById("rew1").style.filter = "grayscale(0%)"
myAudio.play();
enableSubmit_envir2()

}

function fin2()
{
  document.getElementById("fins1").style.border = "4px solid red"; 
  document.getElementById("fins1").style.pointerEvents = "none";
  document.getElementById("fins3").style.pointerEvents = "none";
  document.getElementById("unmark1").checked = true; 
  document.getElementById("fins10").setAttribute("src","/assets/images/w.gif");
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_envir2()
}
function fin3()
{
  document.getElementById("fins1").style.border = "4px solid red"; 
  document.getElementById("fins2").style.pointerEvents = "none";
  document.getElementById("fins1").style.pointerEvents = "none";
  document.getElementById("unmark1").checked = true; 
 document.getElementById("fins10").setAttribute("src","/assets/images/w.gif");
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_envir2()
}

//--------
function fin4()
{
  document.getElementById("fins5").style.border = "4px solid red"; 
  document.getElementById("fins5").style.pointerEvents = "none";
  document.getElementById("fins6").style.pointerEvents = "none";
  document.getElementById("unmark2").checked = true; 
  document.getElementById("fins11").setAttribute("src", "/assets/images/w.gif");
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_envir2()
}
function fin5()
{
document.getElementById("fins5").style.border = "4px solid blue"; 
document.getElementById("fins4").style.pointerEvents = "none";
document.getElementById("fins6").style.pointerEvents = "none";
document.getElementById("mark2").checked = true; 
document.getElementById("fins11").setAttribute("src", "/assets/images/yay_bunny2.gif");
var myAudio = new Audio('/assets/audio/yay.mp3');
document.getElementById("rew2").style.filter = "grayscale(0%)"
myAudio.play();
enableSubmit_envir2()

}

function fin6()
{
  document.getElementById("fins5").style.border = "4px solid red"; 
  document.getElementById("fins4").style.pointerEvents = "none";
  document.getElementById("fins6").style.pointerEvents = "none";
  document.getElementById("unmark2").checked = true; 
  document.getElementById("fins11").setAttribute("src", "/assets/images/w.gif");
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_envir2()
}

//-----

function fin7()
{
  document.getElementById("fins9").style.border = "4px solid red"; 
  document.getElementById("fins7").style.pointerEvents = "none";
  document.getElementById("fins8").style.pointerEvents = "none";
  document.getElementById("unmark3").checked = true; 
  document.getElementById("fins12").setAttribute("src", "/assets/images/w.gif");
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_envir2()
}

function fin8()
{
  document.getElementById("fins9").style.border = "4px solid red"; 
  document.getElementById("fins7").style.pointerEvents = "none";
  document.getElementById("fins9").style.pointerEvents = "none";
  document.getElementById("unmark3").checked = true; 
  document.getElementById("fins12").setAttribute("src", "/assets/images/w.gif");
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_envir2()
}

function fin9()
{
document.getElementById("fins9").style.border = "4px solid blue"; 
document.getElementById("fins7").style.pointerEvents = "none";
document.getElementById("fins8").style.pointerEvents = "none";
document.getElementById("mark3").checked = true; 
document.getElementById("fins12").setAttribute("src", "/assets/images/yay_bunny2.gif");
var myAudio = new Audio('/assets/audio/yay.mp3');
document.getElementById("rew3").style.filter = "grayscale(0%)"
myAudio.play();
enableSubmit_envir2()

}

//----


function fin11()
{
  document.getElementById("mem11").style.border = "4px solid blue"; 
  document.getElementById("mem10").style.pointerEvents = "none";
  document.getElementById("mem12").style.pointerEvents = "none";
  document.getElementById("mark4").checked = true; 
  document.getElementById("mem16").setAttribute("src", "/assets/images/yay_bunny2.gif");
  var myAudio = new Audio('/assets/audio/yay.mp3');
  document.getElementById("rew4").style.filter = "grayscale(0%)"
  myAudio.play();
  enableSubmit_env2()
}
function fin12()
{
  document.getElementById("mem11").style.border = "4px solid red"; 
  document.getElementById("mem11").style.pointerEvents = "none";
  document.getElementById("mem10").style.pointerEvents = "none";
  document.getElementById("unmark4").checked = true; 
  document.getElementById("mem16").setAttribute("src", "/assets/images/w.gif");
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_env2()
}

function enableSubmit_envir2(){
  var chk = document.querySelectorAll('input[type="checkbox"]:checked').length;
  if (chk == 3){
       document.getElementById("submit").style.display="block";
       document.getElementById("arrow1").style.display="block";
        }
  else{
      document.getElementById("submit").style.display="none";
        }
        }

///--------------------------game 2----------------------------------------------------------------------

function meme1()
{
document.getElementById("mem1").style.border = "4px solid blue"; 
document.getElementById("mem2").style.pointerEvents = "none";
document.getElementById("mem3").style.pointerEvents = "none";
document.getElementById("mark1").checked = true; 
document.getElementById("mem13").setAttribute("src", "/assets/images/yay_bunny2.gif");
var myAudio = new Audio('/assets/audio/yay.mp3');
document.getElementById("rew1").style.filter = "grayscale(0%)"
myAudio.play();
enableSubmit_env2()

}

function meme2()
{
  document.getElementById("mem1").style.border = "4px solid red"; 
  document.getElementById("mem1").style.pointerEvents = "none";
  document.getElementById("mem3").style.pointerEvents = "none";
  document.getElementById("unmark1").checked = true; 
  document.getElementById("mem13").setAttribute("src","/assets/images/w.gif");
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_env2()
}
function meme3()
{
  document.getElementById("mem1").style.border = "4px solid red"; 
  document.getElementById("mem2").style.pointerEvents = "none";
  document.getElementById("mem1").style.pointerEvents = "none";
  document.getElementById("unmark1").checked = true; 
 document.getElementById("mem13").setAttribute("src","/assets/images/w.gif");
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_env2()
}

//--------
function meme4()
{
  document.getElementById("mem6").style.border = "4px solid red"; 
  document.getElementById("mem5").style.pointerEvents = "none";
  document.getElementById("mem6").style.pointerEvents = "none";
  document.getElementById("unmark2").checked = true; 
  document.getElementById("amem14").setAttribute("src", "/assets/images/w.gif");
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_env2()
}
function meme6()
{
document.getElementById("mem6").style.border = "4px solid blue"; 
document.getElementById("mem4").style.pointerEvents = "none";
document.getElementById("mem5").style.pointerEvents = "none";
document.getElementById("mark2").checked = true; 
document.getElementById("mem14").setAttribute("src", "/assets/images/yay_bunny2.gif");
var myAudio = new Audio('/assets/audio/yay.mp3');
document.getElementById("rew2").style.filter = "grayscale(0%)"
myAudio.play();
enableSubmit_env2()

}

function meme5()
{
  document.getElementById("mem6").style.border = "4px solid red"; 
  document.getElementById("mem4").style.pointerEvents = "none";
  document.getElementById("mem6").style.pointerEvents = "none";
  document.getElementById("unmark2").checked = true; 
  document.getElementById("mem14").setAttribute("src", "/assets/images/w.gif");
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_env2()
}

//-----

function meme7()
{
  document.getElementById("mem9").style.border = "4px solid red"; 
  document.getElementById("mem8").style.pointerEvents = "none";
  document.getElementById("mem9").style.pointerEvents = "none";
  document.getElementById("unmark3").checked = true; 
  document.getElementById("mem15").setAttribute("src", "/assets/images/w.gif");
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_env2()
}

function meme8()
{
  document.getElementById("mem9").style.border = "4px solid red"; 
  document.getElementById("mem7").style.pointerEvents = "none";
  document.getElementById("mem9").style.pointerEvents = "none";
  document.getElementById("unmark3").checked = true; 
  document.getElementById("mem15").setAttribute("src", "/assets/images/w.gif");
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_env2()
}

function meme9()
{
document.getElementById("mem9").style.border = "4px solid blue"; 
document.getElementById("mem8").style.pointerEvents = "none";
document.getElementById("mem7").style.pointerEvents = "none";
document.getElementById("mark3").checked = true; 
document.getElementById("mem15").setAttribute("src", "/assets/images/yay_bunny2.gif");
var myAudio = new Audio('/assets/audio/yay.mp3');
document.getElementById("rew3").style.filter = "grayscale(0%)"
myAudio.play();
enableSubmit_env2()

}

//----

function meme10()
{
document.getElementById("mem11").style.border = "4px solid red"; 
document.getElementById("mem11").style.pointerEvents = "none";
document.getElementById("mem12").style.pointerEvents = "none";
document.getElementById("unmark4").checked = true; 
document.getElementById("mem16").setAttribute("src", "/assets/images/w.gif");
var myAudio = new Audio('/assets/audio/wrong-answer.mp3');

myAudio.play();
enableSubmit_env2()

}

function meme11()
{
  document.getElementById("mem11").style.border = "4px solid blue"; 
  document.getElementById("mem10").style.pointerEvents = "none";
  document.getElementById("mem12").style.pointerEvents = "none";
  document.getElementById("mark4").checked = true; 
  document.getElementById("mem16").setAttribute("src", "/assets/images/yay_bunny2.gif");
  var myAudio = new Audio('/assets/audio/yay.mp3');
  document.getElementById("rew4").style.filter = "grayscale(0%)"
  myAudio.play();
  enableSubmit_env2()
}
function meme12()
{
  document.getElementById("mem11").style.border = "4px solid red"; 
  document.getElementById("mem11").style.pointerEvents = "none";
  document.getElementById("mem10").style.pointerEvents = "none";
  document.getElementById("unmark4").checked = true; 
  document.getElementById("mem16").setAttribute("src", "/assets/images/w.gif");
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_env2()
}

function enableSubmit_env2(){
  var chk = document.querySelectorAll('input[type="checkbox"]:checked').length;
  if (chk == 4){
       document.getElementById("submit").style.display="block";
       document.getElementById("arrow1").style.display="block";
        }
  else{
      document.getElementById("submit").style.display="none";
        }
        }


//-----------game 3-----------------------------------------------------------------------------------------------------------


function animal1()
{
document.getElementById("anim1").style.border = "4px solid blue"; 
document.getElementById("anim2").style.pointerEvents = "none";
document.getElementById("anim3").style.pointerEvents = "none";
document.getElementById("mark1").checked = true; 
document.getElementById("anim4").setAttribute("src", "/assets/images/yay_bunny2.gif");
var myAudio = new Audio('/assets/audio/yay.mp3');
document.getElementById("rew1").style.filter = "grayscale(0%)"
myAudio.play();
enableSubmit_env3()

}

function animal2()
{
  document.getElementById("anim1").style.border = "4px solid red"; 
  document.getElementById("anim1").style.pointerEvents = "none";
  document.getElementById("anim3").style.pointerEvents = "none";
  document.getElementById("unmark1").checked = true; 
  document.getElementById("anim4").setAttribute("src","/assets/images/w.gif");
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_env3()
}
function animal3()
{
  document.getElementById("anim1").style.border = "4px solid red"; 
  document.getElementById("anim2").style.pointerEvents = "none";
  document.getElementById("anim1").style.pointerEvents = "none";
  document.getElementById("unmark1").checked = true; 
 document.getElementById("anim4").setAttribute("src","/assets/images/w.gif");
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_env3()
}

//--------
function animal4()
{
  document.getElementById("anim8").style.border = "4px solid red"; 
  document.getElementById("anim9").style.pointerEvents = "none";
  document.getElementById("anim8").style.pointerEvents = "none";
  document.getElementById("unmark2").checked = true; 
  document.getElementById("anim5").setAttribute("src", "/assets/images/w.gif");
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_env3()
}
function animal5()
{
document.getElementById("anim8").style.border = "4px solid blue"; 
document.getElementById("anim7").style.pointerEvents = "none";
document.getElementById("anim9").style.pointerEvents = "none";
document.getElementById("mark2").checked = true; 
document.getElementById("anim5").setAttribute("src", "/assets/images/yay_bunny2.gif");
var myAudio = new Audio('/assets/audio/yay.mp3');
document.getElementById("rew2").style.filter = "grayscale(0%)"
myAudio.play();
enableSubmit_env3()

}

function animal6()
{
  document.getElementById("anim8").style.border = "4px solid red"; 
  document.getElementById("anim7").style.pointerEvents = "none";
  document.getElementById("anim9").style.pointerEvents = "none";
  document.getElementById("unmark2").checked = true; 
  document.getElementById("anim5").setAttribute("src", "/assets/images/w.gif");
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_env3()
}

//-----

function animal7()
{
  document.getElementById("anim15").style.border = "4px solid red"; 
  document.getElementById("anim14").style.pointerEvents = "none";
  document.getElementById("anim15").style.pointerEvents = "none";
  document.getElementById("unmark3").checked = true; 
  document.getElementById("anim6").setAttribute("src", "/assets/images/w.gif");
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_env3()
}

function animal8()
{
  document.getElementById("anim15").style.border = "4px solid red"; 
  document.getElementById("anim14").style.pointerEvents = "none";
  document.getElementById("anim13").style.pointerEvents = "none";
  document.getElementById("unmark3").checked = true; 
  document.getElementById("anim6").setAttribute("src", "/assets/images/w.gif");
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_env3()
}

function animal9()
{
document.getElementById("anim15").style.border = "4px solid blue"; 
document.getElementById("anim14").style.pointerEvents = "none";
document.getElementById("anim13").style.pointerEvents = "none";
document.getElementById("mark3").checked = true; 
document.getElementById("anim6").setAttribute("src", "/assets/images/yay_bunny2.gif");
var myAudio = new Audio('/assets/audio/yay.mp3');
document.getElementById("rew3").style.filter = "grayscale(0%)"
myAudio.play();
enableSubmit_env3()

}

//----

function animal10()
{
document.getElementById("anim19").style.border = "4px solid blue"; 
document.getElementById("anim20").style.pointerEvents = "none";
document.getElementById("anim21").style.pointerEvents = "none";
document.getElementById("mark4").checked = true; 
document.getElementById("anim10").setAttribute("src", "/assets/images/yay_bunny2.gif");
var myAudio = new Audio('/assets/audio/yay.mp3');
document.getElementById("rew4").style.filter = "grayscale(0%)"
myAudio.play();
enableSubmit_env3()

}

function animal11()
{
  document.getElementById("anim19").style.border = "4px solid red"; 
  document.getElementById("anim19").style.pointerEvents = "none";
  document.getElementById("anim21").style.pointerEvents = "none";
  document.getElementById("unmark4").checked = true; 
  document.getElementById("anim10").setAttribute("src", "/assets/images/w.gif");
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_env3()
}
function animal12()
{
  document.getElementById("anim19").style.border = "4px solid red"; 
  document.getElementById("anim20").style.pointerEvents = "none";
  document.getElementById("anim19").style.pointerEvents = "none";
  document.getElementById("unmark4").checked = true; 
  document.getElementById("anim10").setAttribute("src", "/assets/images/w.gif");
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_env3()
}

function enableSubmit_env3(){
  var chk = document.querySelectorAll('input[type="checkbox"]:checked').length;
  if (chk == 4){
       document.getElementById("submit").style.display="block";
       document.getElementById("arrow1").style.display="block";
        }
  else{
      document.getElementById("submit").style.display="none";
        }
        }

//---------------game 4------------------------------------------


//--------------- Grade 1 level 1 - environment "ape aurudu" ---------------

function aurudu1()
{
document.getElementById("one-r1").style.border = "4px solid red"; 
document.getElementById("one-r2").style.pointerEvents = "none";
document.getElementById("one-r3").style.pointerEvents = "none";
document.getElementById("unmark1").checked = true; 
document.getElementById("one-r4").setAttribute("src", "/assets/images/w.gif")
document.getElementById("one-r4").style.display = "block";
var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_sinhalaword4()
}

function aurudu2()
{
document.getElementById("one-r2").style.border = "4px solid red"; 
document.getElementById("one-r1").style.pointerEvents = "none";
document.getElementById("one-r3").style.pointerEvents = "none";
document.getElementById("unmark1").checked = true; 
document.getElementById("one-r4").setAttribute("src", "/assets/images/w.gif")
document.getElementById("one-r4").style.display = "block";
var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_sinhalaword4()
}

function aurudu3()
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
  enableSubmit_sinhalaword4()
}

function aurudu4()
{
document.getElementById("two-r1").style.border = "4px solid red"; 
document.getElementById("two-r2").style.pointerEvents = "none";
document.getElementById("two-r3").style.pointerEvents = "none";
document.getElementById("unmark2").checked = true; 
document.getElementById("two-r4").setAttribute("src", "/assets/images/w.gif")
document.getElementById("two-r4").style.display = "block";
var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_sinhalaword4()
}
function aurudu5()
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
  enableSubmit_sinhalaword4()
}

function aurudu6()
{
document.getElementById("two-r3").style.border = "4px solid red"; 
document.getElementById("two-r1").style.pointerEvents = "none";
document.getElementById("two-r2").style.pointerEvents = "none";
document.getElementById("unmark2").checked = true; 
document.getElementById("two-r4").setAttribute("src", "/assets/images/w.gif")
document.getElementById("two-r4").style.display = "block";
var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_sinhalaword4()
}

function aurudu7()
{
document.getElementById("three-r1").style.border = "4px solid red"; 
document.getElementById("three-r2").style.pointerEvents = "none";
document.getElementById("three-r3").style.pointerEvents = "none";
document.getElementById("unmark3").checked = true; 
document.getElementById("three-r4").setAttribute("src", "/assets/images/w.gif")
document.getElementById("three-r4").style.display = "block";
var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_sinhalaword4()
}
function aurudu8()
{
document.getElementById("three-r2").style.border = "4px solid blue"; 
document.getElementById("three-r1").style.pointerEvents = "none";
document.getElementById("three-r3").style.pointerEvents = "none";
document.getElementById("mark3").checked = true; 
document.getElementById("three-r4").style.display = "block";
document.getElementById("rew3").style.filter = "grayscale(0%)"
document.getElementById("cell-3").style.border = "4px solid red";
var myAudio = new Audio('/assets/audio/yay.mp3');
  myAudio.play();
  enableSubmit_sinhalaword4()
}

function aurudu9()
{
document.getElementById("three-r3").style.border = "4px solid red"; 
document.getElementById("three-r1").style.pointerEvents = "none";
document.getElementById("three-r2").style.pointerEvents = "none";
document.getElementById("unmark3").checked = true; 
document.getElementById("three-r4").setAttribute("src", "/assets/images/w.gif")
document.getElementById("three-r4").style.display = "block";
var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_sinhalaword4()
}



//--------------- Grade 1 level 1 - environment "ape aurudu" ---------------

function aurudu1()
{
document.getElementById("one-r1").style.border = "4px solid red"; 
document.getElementById("one-r2").style.pointerEvents = "none";
document.getElementById("one-r3").style.pointerEvents = "none";
document.getElementById("unmark1").checked = true; 
document.getElementById("one-r4").setAttribute("src", "/assets/images/w.gif")
document.getElementById("one-r4").style.display = "block";
var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_sinhalaword4()
}

function aurudu2()
{
document.getElementById("one-r2").style.border = "4px solid red"; 
document.getElementById("one-r1").style.pointerEvents = "none";
document.getElementById("one-r3").style.pointerEvents = "none";
document.getElementById("unmark1").checked = true; 
document.getElementById("one-r4").setAttribute("src", "/assets/images/w.gif")
document.getElementById("one-r4").style.display = "block";
var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_sinhalaword4()
}

function aurudu3()
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
  enableSubmit_sinhalaword4()
}

function aurudu4()
{
document.getElementById("two-r1").style.border = "4px solid red"; 
document.getElementById("two-r2").style.pointerEvents = "none";
document.getElementById("two-r3").style.pointerEvents = "none";
document.getElementById("unmark2").checked = true; 
document.getElementById("two-r4").setAttribute("src", "/assets/images/w.gif")
document.getElementById("two-r4").style.display = "block";
var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_sinhalaword4()
}
function aurudu5()
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
  enableSubmit_sinhalaword4()
}

function aurudu6()
{
document.getElementById("two-r3").style.border = "4px solid red"; 
document.getElementById("two-r1").style.pointerEvents = "none";
document.getElementById("two-r2").style.pointerEvents = "none";
document.getElementById("unmark2").checked = true; 
document.getElementById("two-r4").setAttribute("src", "/assets/images/w.gif")
document.getElementById("two-r4").style.display = "block";
var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_sinhalaword4()
}

function aurudu7()
{
document.getElementById("three-r1").style.border = "4px solid red"; 
document.getElementById("three-r2").style.pointerEvents = "none";
document.getElementById("three-r3").style.pointerEvents = "none";
document.getElementById("unmark3").checked = true; 
document.getElementById("three-r4").setAttribute("src", "/assets/images/w.gif")
document.getElementById("three-r4").style.display = "block";
var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_sinhalaword4()
}
function aurudu8()
{
document.getElementById("three-r2").style.border = "4px solid blue"; 
document.getElementById("three-r1").style.pointerEvents = "none";
document.getElementById("three-r3").style.pointerEvents = "none";
document.getElementById("mark3").checked = true; 
document.getElementById("three-r4").style.display = "block";
document.getElementById("rew3").style.filter = "grayscale(0%)"
document.getElementById("cell-3").style.border = "4px solid red";
var myAudio = new Audio('/assets/audio/yay.mp3');
  myAudio.play();
  enableSubmit_sinhalaword4()
}

function aurudu9()
{
document.getElementById("three-r3").style.border = "4px solid red"; 
document.getElementById("three-r1").style.pointerEvents = "none";
document.getElementById("three-r2").style.pointerEvents = "none";
document.getElementById("unmark3").checked = true; 
document.getElementById("three-r4").setAttribute("src", "/assets/images/w.gif")
document.getElementById("three-r4").style.display = "block";
var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_sinhalaword4()
}

//------------------game 5 ----------------------------------------------------------------------------------------------------

//---------------1----
function surrounding21()
{
  document.getElementById("xx3").style.border = "4px solid red"; 
  document.getElementById("xx2").style.pointerEvents = "none";
  document.getElementById("xx3").style.pointerEvents = "none";
  document.getElementById("unmark1").checked = true; 
  document.getElementById("xx4").setAttribute("src", "/assets/images/w.gif");
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_g1env5();
}
function surrounding22()
{
  document.getElementById("xx3").style.border = "4px solid red"; 
  document.getElementById("xx1").style.pointerEvents = "none";
  document.getElementById("xx3").style.pointerEvents = "none";
  document.getElementById("unmark1").checked = true; 
  document.getElementById("xx4").setAttribute("src", "/assets/images/w.gif");
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_g1env5();
}
function surrounding23()
{
  document.getElementById("xx3").style.border = "4px solid blue"; 
  document.getElementById("xx1").style.pointerEvents = "none";
  document.getElementById("xx2").style.pointerEvents = "none";
  document.getElementById("mark1").checked = true; 
  document.getElementById("xx4").setAttribute("src", "/assets/images/yay_bunny2.gif");
  var myAudio = new Audio('/assets/audio/yay.mp3');
  document.getElementById("rew1").style.filter = "grayscale(0%)";
  myAudio.play();
  enableSubmit_g1env5();
}

//------------------2-------------

function surrounding24()
{
  document.getElementById("xx7").style.border = "4px solid red"; 
  document.getElementById("xx6").style.pointerEvents = "none";
  document.getElementById("xx7").style.pointerEvents = "none";
  document.getElementById("unmark2").checked = true; 
  document.getElementById("xx8").setAttribute("src", "/assets/images/w.gif");
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_g1env5();
}
function surrounding25()
{
  document.getElementById("xx7").style.border = "4px solid red"; 
  document.getElementById("xx5").style.pointerEvents = "none";
  document.getElementById("xx7").style.pointerEvents = "none";
  document.getElementById("unmark2").checked = true; 
  document.getElementById("xx8").setAttribute("src", "/assets/images/w.gif");
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_g1env5();
}
function surrounding26()
{
  document.getElementById("xx7").style.border = "4px solid blue"; 
  document.getElementById("xx5").style.pointerEvents = "none";
  document.getElementById("xx6").style.pointerEvents = "none";
  document.getElementById("mark2").checked = true; 
  document.getElementById("xx8").setAttribute("src", "/assets/images/yay_bunny2.gif");
  var myAudio = new Audio('/assets/audio/yay.mp3');
  document.getElementById("rew2").style.filter = "grayscale(0%)"
  myAudio.play();
  enableSubmit_g1env5();
}


//------------3----------------

function surrounding27()
{
  document.getElementById("xx9").style.border = "4px solid blue"; 
  document.getElementById("xx10").style.pointerEvents = "none";
  document.getElementById("xx11").style.pointerEvents = "none";
  document.getElementById("mark3").checked = true; 
  document.getElementById("xx12").setAttribute("src", "/assets/images/yay_bunny2.gif");
  var myAudio = new Audio('/assets/audio/yay.mp3');
  document.getElementById("rew3").style.filter = "grayscale(0%)";
  myAudio.play();
  enableSubmit_g1env5();
}
function surrounding28()
{
  document.getElementById("xx9").style.border = "4px solid red"; 
  document.getElementById("xx9").style.pointerEvents = "none";
  document.getElementById("xx11").style.pointerEvents = "none";
  document.getElementById("unmark3").checked = true; 
  document.getElementById("xx12").setAttribute("src", "/assets/images/w.gif");
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_g1env5();
}
function surrounding29()
{
  document.getElementById("xx9").style.border = "4px solid red"; 
  document.getElementById("xx9").style.pointerEvents = "none";
  document.getElementById("xx10").style.pointerEvents = "none";
  document.getElementById("unmark3").checked = true; 
  document.getElementById("xx12").setAttribute("src", "/assets/images/w.gif");
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_g1env5();
}


//--------------4--------


function surrounding31()
{
  document.getElementById("xx13").style.border = "4px solid red"; 
  document.getElementById("xx13").style.pointerEvents = "none";
  document.getElementById("xx15").style.pointerEvents = "none";
  document.getElementById("unmark4").checked = true; 
  document.getElementById("xx16").setAttribute("src", "/assets/images/w.gif");
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_g1env5();
}

function surrounding30()
{
  document.getElementById("xx13").style.border = "4px solid blue"; 
  document.getElementById("xx14").style.pointerEvents = "none";
  document.getElementById("xx15").style.pointerEvents = "none";
  document.getElementById("mark4").checked = true; 
  document.getElementById("xx16").setAttribute("src", "/assets/images/yay_bunny2.gif");
  var myAudio = new Audio('/assets/audio/yay.mp3');
  document.getElementById("rew4").style.filter = "grayscale(0%)";
  myAudio.play();
  enableSubmit_g1env5();
}
function surrounding32()
{
  document.getElementById("xx13").style.border = "4px solid red"; 
  document.getElementById("xx13").style.pointerEvents = "none";
  document.getElementById("xx14").style.pointerEvents = "none";
  document.getElementById("unmark4").checked = true; 
  document.getElementById("xx16").setAttribute("src", "/assets/images/w.gif");
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_g1env5();
}


//-----------------------5--------------------------------

function surrounding33()
{
  document.getElementById("xx18").style.border = "4px solid red"; 
  document.getElementById("xx18").style.pointerEvents = "none";
  document.getElementById("xx19").style.pointerEvents = "none";
  document.getElementById("unmark5").checked = true; 
  document.getElementById("xx20").setAttribute("src", "/assets/images/w.gif");
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_g1env5();
}

function surrounding34()
{
  document.getElementById("xx18").style.border = "4px solid blue"; 
  document.getElementById("xx17").style.pointerEvents = "none";
  document.getElementById("xx19").style.pointerEvents = "none";
  document.getElementById("mark5").checked = true; 
  document.getElementById("xx20").setAttribute("src", "/assets/images/yay_bunny2.gif");
  document.getElementById("rew5").style.filter = "grayscale(0%)";
  var myAudio = new Audio('/assets/audio/yay.mp3');
  myAudio.play();
  enableSubmit_g1env5();
}
function surrounding35()
{
  document.getElementById("xx18").style.border = "4px solid red"; 
  document.getElementById("xx18").style.pointerEvents = "none";
  document.getElementById("xx17").style.pointerEvents = "none";
  document.getElementById("unmark5").checked = true; 
  document.getElementById("xx20").setAttribute("src", "/assets/images/w.gif");
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_g1env5();
}


function enableSubmit_g1env5(){
  var chk = document.querySelectorAll('input[type="checkbox"]:checked').length;
  if (chk == 5){
       document.getElementById("submit").style.display="block";
       document.getElementById("arrow1").style.display="block";
        }
  else{
      document.getElementById("submit").style.display="none";
        }
        }


   //==========================grade 2 level 1========================================   
   //===============game 2 food grade 2 level 1 ================================

   
function foodie1()
{
document.getElementById("mem1").style.border = "4px solid blue"; 
document.getElementById("mem2").style.pointerEvents = "none";
document.getElementById("mem3").style.pointerEvents = "none";
document.getElementById("mark1").checked = true; 
document.getElementById("mem13").setAttribute("src", "/assets/images/yay_bunny2.gif");
var myAudio = new Audio('/assets/audio/yay.mp3');
document.getElementById("rew1").style.filter = "grayscale(0%)"
myAudio.play();
enableSubmit_food2env2();
}

function foodie2()
{
  document.getElementById("mem1").style.border = "4px solid red"; 
  document.getElementById("mem1").style.pointerEvents = "none";
  document.getElementById("mem3").style.pointerEvents = "none";
  document.getElementById("unmark1").checked = true; 
  document.getElementById("mem13").setAttribute("src","/assets/images/w.gif");
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_food2env2();
}
function foodie3()
{
  document.getElementById("mem1").style.border = "4px solid red"; 
  document.getElementById("mem2").style.pointerEvents = "none";
  document.getElementById("mem1").style.pointerEvents = "none";
  document.getElementById("unmark1").checked = true; 
 document.getElementById("mem13").setAttribute("src","/assets/images/w.gif");
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_food2env2();
}

//--------2

function foodie4()
{
  document.getElementById("mem6").style.border = "4px solid red"; 
  document.getElementById("mem5").style.pointerEvents = "none";
  document.getElementById("mem6").style.pointerEvents = "none";
  document.getElementById("unmark2").checked = true; 
  document.getElementById("mem14").setAttribute("src", "/assets/images/w.gif");
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_food2env2();
}
function foodie6()
{
document.getElementById("mem6").style.border = "4px solid blue"; 
document.getElementById("mem4").style.pointerEvents = "none";
document.getElementById("mem5").style.pointerEvents = "none";
document.getElementById("mark2").checked = true; 
document.getElementById("mem14").setAttribute("src", "/assets/images/yay_bunny2.gif");
var myAudio = new Audio('/assets/audio/yay.mp3');
document.getElementById("rew2").style.filter = "grayscale(0%)"
myAudio.play();
enableSubmit_food2env2();

}

function foodie5()
{
  document.getElementById("mem6").style.border = "4px solid red"; 
  document.getElementById("mem4").style.pointerEvents = "none";
  document.getElementById("mem6").style.pointerEvents = "none";
  document.getElementById("unmark2").checked = true; 
  document.getElementById("mem14").setAttribute("src", "/assets/images/w.gif");
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_food2env2();
}

//-----3

function foodie7()
{
  document.getElementById("mem9").style.border = "4px solid red"; 
  document.getElementById("mem8").style.pointerEvents = "none";
  document.getElementById("mem9").style.pointerEvents = "none";
  document.getElementById("unmark3").checked = true; 
  document.getElementById("mem15").setAttribute("src", "/assets/images/w.gif");
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_food2env2();
}

function foodie8()
{
  document.getElementById("mem9").style.border = "4px solid red"; 
  document.getElementById("mem7").style.pointerEvents = "none";
  document.getElementById("mem9").style.pointerEvents = "none";
  document.getElementById("unmark3").checked = true; 
  document.getElementById("mem15").setAttribute("src", "/assets/images/w.gif");
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_food2env2();
}

function foodie9()
{
document.getElementById("mem9").style.border = "4px solid blue"; 
document.getElementById("mem8").style.pointerEvents = "none";
document.getElementById("mem7").style.pointerEvents = "none";
document.getElementById("mark3").checked = true; 
document.getElementById("mem15").setAttribute("src", "/assets/images/yay_bunny2.gif");
var myAudio = new Audio('/assets/audio/yay.mp3');
document.getElementById("rew3").style.filter = "grayscale(0%)"
myAudio.play();
enableSubmit_food2env2();

}

//----4

function foodie10()
{
document.getElementById("mem11").style.border = "4px solid red"; 
document.getElementById("mem11").style.pointerEvents = "none";
document.getElementById("mem12").style.pointerEvents = "none";
document.getElementById("unmark4").checked = true; 
document.getElementById("mem16").setAttribute("src", "/assets/images/w.gif");
var myAudio = new Audio('/assets/audio/wrong-answer.mp3');

myAudio.play();
enableSubmit_food2env2();

}

function foodie11()
{
  document.getElementById("mem11").style.border = "4px solid blue"; 
  document.getElementById("mem10").style.pointerEvents = "none";
  document.getElementById("mem12").style.pointerEvents = "none";
  document.getElementById("mark4").checked = true; 
  document.getElementById("mem16").setAttribute("src", "/assets/images/yay_bunny2.gif");
  var myAudio = new Audio('/assets/audio/yay.mp3');
  document.getElementById("rew4").style.filter = "grayscale(0%)"
  myAudio.play();
  enableSubmit_food2env2();
}
function foodie12()
{
  document.getElementById("mem11").style.border = "4px solid red"; 
  document.getElementById("mem11").style.pointerEvents = "none";
  document.getElementById("mem10").style.pointerEvents = "none";
  document.getElementById("unmark4").checked = true; 
  document.getElementById("mem16").setAttribute("src", "/assets/images/w.gif");
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_food2env2();
}
//----5

function foodie13()
{
document.getElementById("mem17").style.border = "4px solid blue"; 
document.getElementById("mem18").style.pointerEvents = "none";
document.getElementById("mem19").style.pointerEvents = "none";
document.getElementById("mark5").checked = true; 
document.getElementById("mem20").setAttribute("src", "/assets/images/yay_bunny2.gif");
var myAudio = new Audio('/assets/audio/yay.mp3');
document.getElementById("rew1").style.filter = "grayscale(0%)"
myAudio.play();
enableSubmit_food2env2();

}

function foodie14()
{
  document.getElementById("mem17").style.border = "4px solid red"; 
  document.getElementById("mem17").style.pointerEvents = "none";
  document.getElementById("mem19").style.pointerEvents = "none";
  document.getElementById("unmark5").checked = true; 
  document.getElementById("mem20").setAttribute("src","/assets/images/w.gif");
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_food2env2();
}
function foodie15()
{
  document.getElementById("mem17").style.border = "4px solid red"; 
  document.getElementById("mem17").style.pointerEvents = "none";
  document.getElementById("mem18").style.pointerEvents = "none";
  document.getElementById("unmark1").checked = true; 
 document.getElementById("mem20").setAttribute("src","/assets/images/w.gif");
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_food2env2();
}


//----6

function foodie16()
{
  document.getElementById("mem22").style.border = "4px solid red"; 
  document.getElementById("mem22").style.pointerEvents = "none";
  document.getElementById("mem23").style.pointerEvents = "none";
  document.getElementById("unmark6").checked = true; 
  document.getElementById("mem24").setAttribute("src", "/assets/images/w.gif");
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_food2env2();
}
function foodie17()
{
document.getElementById("mem22").style.border = "4px solid blue"; 
document.getElementById("mem21").style.pointerEvents = "none";
document.getElementById("mem23").style.pointerEvents = "none";
document.getElementById("mark6").checked = true; 
document.getElementById("mem24").setAttribute("src", "/assets/images/yay_bunny2.gif");
var myAudio = new Audio('/assets/audio/yay.mp3');
document.getElementById("rew2").style.filter = "grayscale(0%)"
myAudio.play();
enableSubmit_food2env2();

}

function foodie18()
{
  document.getElementById("mem22").style.border = "4px solid red"; 
  document.getElementById("mem21").style.pointerEvents = "none";
  document.getElementById("mem22").style.pointerEvents = "none";
  document.getElementById("unmark6").checked = true; 
  document.getElementById("mem24").setAttribute("src", "/assets/images/w.gif");
  var myAudio = new Audio('/assets/audio/wrong-answer.mp3');
  myAudio.play();
  enableSubmit_food2env2();
}

function enableSubmit_food2env2(){
  var chk = document.querySelectorAll('input[type="checkbox"]:checked').length;
  if (chk == 6){
       document.getElementById("submit").style.display="block";
       document.getElementById("arrow1").style.display="block";
        }
  else{
      document.getElementById("submit").style.display="none";
        }
        }
 //--------------------Audio functions for Grade 1 level 1 ----------------------
 //--------------------Game 1-----------------------------------------------------
 function env_g1_l1_g1_play_1() {
  var audio = document.getElementById("env_g1_l1_g1_play_1");
  audio.play();
}

function env_g1_l1_g1_play_2() {
  var audio = document.getElementById("env_g1_l1_g1_play_2");
  audio.play();
}

function env_g1_l1_g1_play_3() {
  var audio = document.getElementById("env_g1_l1_g1_play_3");
  audio.play();
}

function env_g1_l1_g1_play_4() {
  var audio = document.getElementById("env_g1_l1_g1_play_4");
  audio.play();
}


 //--------------------Game 2-----------------------------------------------------

 function env_g1_l1_g2_play_2() {
  var audio = document.getElementById("env_g1_l1_g2_play_2");
  audio.play();
}

function env_g1_l1_g2_play_3() {
  var audio = document.getElementById("env_g1_l1_g2_play_3");
  audio.play();
}

function env_g1_l1_g2_play_4() {
  var audio = document.getElementById("env_g1_l1_g2_play_4");
  audio.play();
}

function env_g1_l1_g2_play_5() {
  var audio = document.getElementById("env_g1_l1_g2_play_5");
  audio.play();
}


 //--------------------Game 3-----------------------------------------------------

 function env_g1_l1_g3_play_2() {
  var audio = document.getElementById("env_g1_l1_g3_play_2");
  audio.play();
}

function env_g1_l1_g3_play_3() {
  var audio = document.getElementById("env_g1_l1_g3_play_3");
  audio.play();
}

function env_g1_l1_g3_play_4() {
  var audio = document.getElementById("env_g1_l1_g3_play_4");
  audio.play();
}

function env_g1_l1_g3_play_5() {
  var audio = document.getElementById("env_g1_l1_g3_play_5");
  audio.play();
}

 //--------------------Game 4-----------------------------------------------------

 function env_g1_l1_g4_play_2() {
  var audio = document.getElementById("env_g1_l1_g4_play_2");
  audio.play();
}

function env_g1_l1_g4_play_3() {
  var audio = document.getElementById("env_g1_l1_g4_play_3");
  audio.play();
}

function env_g1_l1_g4_play_4() {
  var audio = document.getElementById("env_g1_l1_g4_play_4");
  audio.play();
}


//--------------------Game 5-----------------------------------------------------

function env_g1_l1_g5_play_2() {
  var audio = document.getElementById("env_g1_l1_g5_play_2");
  audio.play();
}

function env_g1_l1_g5_play_3() {
  var audio = document.getElementById("env_g1_l1_g5_play_3");
  audio.play();
}

function env_g1_l1_g5_play_4() {
  var audio = document.getElementById("env_g1_l1_g5_play_4");
  audio.play();
}

function env_g1_l1_g5_play_5() {
  var audio = document.getElementById("env_g1_l1_g5_play_5");
  audio.play();
}

function env_g1_l1_g5_play_6() {
  var audio = document.getElementById("env_g1_l1_g5_play_6");
  audio.play();
}

 //--------------------Audio functions for Grade 2 level 1 ----------------------
 //--------------------Game 2-----------------------------------------------------
 function env_g2_l1_g2_play_2() {
  var audio = document.getElementById("env_g2_l1_g2_play_2");
  audio.play();
}
 function env_g2_l1_g2_play_6() {
  var audio = document.getElementById("env_g2_l1_g2_play_6");
  audio.play();
}
function env_g2_l1_g2_play_7() {
  var audio = document.getElementById("env_g2_l1_g2_play_7");
  audio.play();
}

 //--------------------Game 3-----------------------------------------------------
 function env_g2_l1_g3_play_2() {
  var audio = document.getElementById("env_g2_l1_g3_play_2");
  audio.play();
}

 //--------------------Game 5-----------------------------------------------------
 function env_g2_l1_g5_play_2() {
  var audio = document.getElementById("env_g2_l1_g5_play_2");
  audio.play();
}

function env_g2_l1_g5_play_3() {
  var audio = document.getElementById("env_g2_l1_g5_play_3");
  audio.play();
}

function env_g2_l1_g5_play_4() {
  var audio = document.getElementById("env_g2_l1_g5_play_4");
  audio.play();
}

function env_g2_l1_g5_play_7() {
  var audio = document.getElementById("env_g2_l1_g5_play_7");
  audio.play();
}
