function show_shapesL1(Page1, Page2) {
    document.getElementById(Page1).style.display='block';
    document.getElementById(Page2).style.display='none'; 
  }

function test1_shapes()
{
document.f1.clip1.src="/assets/images/pizza.png";
document.f1.brown.src="/assets/images/trans.svg";
document.f1.red.src="/assets/images/clock.png";
document.f1.rw1.src="/assets/images/correct_shapes.png";
document.getElementById("clock").style.pointerEvents = "none";

}
function test2_shapes()
{
document.f1.clip1.src="/assets/images/clock.png";
document.f1.red.src="/assets/images/trans.svg";
document.f1.brown.src="/assets/images/pizza.png";
document.f1.rw1.src="/assets/images/try_again_shapes.png";
document.getElementById("pizza").style.pointerEvents = "none";
}

function test3_shapes()
{
document.f1.clip2.src="/assets/images/book.png";
document.f1.rect.src="/assets/images/trans.svg";
document.f1.sqr.src="/assets/images/watermelon.png";
document.f1.rw2.src="/assets/images/correct_shapes.png";
document.getElementById("watermelon").style.pointerEvents = "none";

}
function test4_shapes()
{
document.f1.clip2.src="/assets/images/watermelon.png";
document.f1.sqr.src="/assets/images/trans.svg";
document.f1.rect.src="/assets/images/book.png";
document.f1.rw2.src="/assets/images/try_again_shapes.png";
document.getElementById("book").style.pointerEvents = "none";
}

function test5_shapes()
{
document.f1.clip3.src="/assets/images/bag.png";
document.f1.leaf1.src="/assets/images/trans.svg";
document.f1.leaf2.src="/assets/images/ball_shapes.png";
document.f1.rw3.src="/assets/images/try_again_shapes.png";
document.getElementById("ball_shapes").style.pointerEvents = "none";

}
function test6_shapes()
{
document.f1.clip3.src="/assets/images/ball_shapes.png";
document.f1.leaf2.src="/assets/images/trans.svg";
document.f1.leaf1.src="/assets/images/bag.png";
document.f1.rw3.src="/assets/images/correct_shapes.png";
document.getElementById("bag").style.pointerEvents = "none";
}


$(document).ready(function(){
    $(document).on('click',"#question-shapes",function () {
    var audio = document.getElementById("quest_audio");
    if (audio.paused) audio.play();
    else audio.pause();
});
});

// $(document).ready(function(){
//     $(document).on('click',"#myBtn",function () {
//     var modal = document.getElementById("myModal");
//     modal.style.display = "block";

// });
// });

// $(document).ready(function(){
//     $(document).on('click',"#myBtn",function () {
//     var modal = document.getElementById("myModal");
//     modal.style.display = "block";

// });
// });

// $(document).ready(function(){
//     $(document).on('click',"#close1",function () {
//     var span = document.getElementsByClassName("close")[0];
//     var modal = document.getElementById("myModal");
//     modal.style.display = "none";

// });
// });



// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }