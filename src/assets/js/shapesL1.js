function show_shapesL1(Page1, Page2) {
    document.getElementById(Page1).style.display='block';
    document.getElementById(Page2).style.display='none'; 
  }

function test1_shapes()
{
document.f1.clip1.src="/assets/images/pizza.png";
document.f1.brown.src="/assets/images/blank.jpeg";
document.f1.red.src="/assets/images/clock.png";
document.f1.rw1.src="/assets/images/correct_shapes.png";

}
function test2_shapes()
{
document.f1.clip1.src="/assets/images/clock.png";
document.f1.red.src="/assets/images/blank.jpeg";
document.f1.brown.src="/assets/images/pizza.png";
document.f1.rw1.src="/assets/images/try_again_shapes.png";
}

function test3_shapes()
{
document.f1.clip2.src="/assets/images/book.png";
document.f1.rect.src="/assets/images/blank.jpeg";
document.f1.sqr.src="/assets/images/watermelon.png";
document.f1.rw2.src="/assets/images/correct_shapes.png";

}
function test4_shapes()
{
document.f1.clip2.src="/assets/images/watermelon.png";
document.f1.sqr.src="/assets/images/blank.jpeg";
document.f1.rect.src="/assets/images/book.png";
document.f1.rw2.src="/assets/images/try_again_shapes.png";
}

function test5_shapes()
{
document.f1.clip3.src="/assets/images/ball_shapes.png";
document.f1.leaf1.src="/assets/images/blank.jpeg";
document.f1.leaf2.src="/assets/images/bag.png";
document.f1.rw3.src="/assets/images/correct_shapes.png";

}
function test6_shapes()
{
document.f1.clip3.src="/assets/images/bag.png";
document.f1.leaf2.src="/assets/images/blank.jpeg";
document.f1.leaf1.src="/assets/images/ball_shapes.png";
document.f1.rw3.src="/assets/images/try_again_shapes.png";
}

// function test7()
// {
// document.f1.clip4.src="./images/blueinbrown.png";
// document.f1.blueinbrown.src="./images/blank.gif";
// document.f1.browninblue.src="./images/browninblue.png";
// document.f1.rw4.src="./images/r.png";

// }
// function test8()
// {
// document.f1.clip4.src="./images/browninblue.png";
// document.f1.browninblue.src="./images/blank.gif";
// document.f1.blueinbrown.src="./images/blueinbrown.png";
// document.f1.rw4.src="./images/w.png";
// }

// function test9()
// {
// document.f1.clip5.src="./images/romba.png";
// document.f1.romba.src="./images/blank.gif";
// document.f1.trang.src="./images/trang.png";
// document.f1.rw5.src="./images/r.png";

// }
// function test10()
// {
// document.f1.clip5.src="./images/trang.png";
// document.f1.trang.src="./images/blank.gif";
// document.f1.romba.src="./images/romba.png";
// document.f1.rw5.src="./images/w.png";
// }

$(document).ready(function(){
    $(document).on('click',"#question-shapes",function () {
    var audio = document.getElementById("quest_audio");
    if (audio.paused) audio.play();
    else audio.pause();
});
});