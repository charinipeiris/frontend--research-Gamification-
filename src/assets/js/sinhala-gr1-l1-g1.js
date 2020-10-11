function show_shapesL1(Page1, Page2) {
    document.getElementById(Page1).style.display='block';
    document.getElementById(Page2).style.display='none'; 
    

  }

function test1_sentences()
{
document.f1.clip1.src="/assets/images/child-running.PNG";
document.f1.brown.src="/assets/images/trans.svg";
document.f1.red.src="/assets/images/child-crying.PNG";
document.f1.rw1.src="/assets/images/yay_bunny2.gif";
document.getElementById("cry").style.pointerEvents = "none";
document.getElementById("mark1").checked = true; //kid gave right answer 

}
function test2_sentences()
{
document.f1.clip1.src="/assets/images/child-crying.PNG";
document.f1.red.src="/assets/images/trans.svg";
document.f1.brown.src="/assets/images/child-running.PNG";
document.f1.rw1.src="/assets/images/w.gif";
document.getElementById("run").style.pointerEvents = "none";
document.getElementById("unmark1").checked = true; //kid gave wrong answer 
}

function test3_sentences()
{
document.f1.clip2.src="/assets/images/book.png";
document.f1.rect.src="/assets/images/trans.svg";
document.f1.sqr.src="/assets/images/watermelon.png";
document.f1.rw2.src="/assets/images/yay_bunny2.gif";
document.getElementById("watermelon").style.pointerEvents = "none";
document.getElementById("mark2").checked = true; //kid gave right answer 

}
function test4_shapes()
{
document.f1.clip2.src="/assets/images/watermelon.png";
document.f1.sqr.src="/assets/images/trans.svg";
document.f1.rect.src="/assets/images/book.png";
document.f1.rw2.src="/assets/images/w.gif";
document.getElementById("book").style.pointerEvents = "none";
document.getElementById("unmark2").checked = true; //kid gave wrong answer 
}

function test5_shapes()
{
document.f1.clip3.src="/assets/images/bag.png";
document.f1.leaf1.src="/assets/images/trans.svg";
document.f1.leaf2.src="/assets/images/ball_shapes.png";
document.f1.rw3.src="/assets/images/w.gif";
document.getElementById("ball_shapes").style.pointerEvents = "none";
document.getElementById("unmark3").checked = true; //kid gave wrong answer 

}
function test6_shapes()
{
document.f1.clip3.src="/assets/images/ball_shapes.png";
document.f1.leaf2.src="/assets/images/trans.svg";
document.f1.leaf1.src="/assets/images/bag.png";
document.f1.rw3.src="/assets/images/yay_bunny2.gif";
document.getElementById("bag").style.pointerEvents = "none";  
document.getElementById("mark3").checked = true; //kid gave right answer 
}


$(document).ready(function(){
    $(document).on('click',"#question-shapes",function () {
    var audio = document.getElementById("quest_audio");
    if (audio.paused) audio.play();
    else audio.pause();
});
});

