function show(Page1, Page2, Page3) {
       document.getElementById(Page1).style.display='block';
       document.getElementById(Page2).style.display='none'; 
       document.getElementById(Page3).style.display='none'; 
     }

function play_intro(){
       var myAudio = new Audio('/assets/audio/intro_shapes.m4a');
       myAudio.play();
        }

function play_tri(){
       var myAudio = new Audio('/assets/audio/triangle_audio.m4a');
       myAudio.play();
                 }
function play_sq(){
       var myAudio = new Audio('/assets/audio/square_audio.m4a');
       myAudio.play();
        }
function play_rec(){
       var myAudio = new Audio('/assets/audio/rec_audio.m4a');
       myAudio.play();
         }
function play_c(){
        var myAudio = new Audio('/assets/audio/circle_audio.m4a');
        myAudio.play();
         }

// function popup_image() {
//        //  var image = $(this).attr('src','/assets/images/triangle.png');
//         w2popup.open({
//         title: 'Image',
//          body: '<div class=""><img src="/assets/images/yay_bunny.gif"></img></div>'
//                });
//            }


//Game - Circle
$(document).ready(function(){
       $(document).on('click',"#img2-1",function () {
       var audio = document.getElementById("kids_say_yay");
       if (audio.paused) audio.play();
       else audio.pause();
       $( "#popUp_right" ).show(); 
              setTimeout(function() {
              $( "#popUp_right" ).hide();
                     }, 2000);
});
});

$(document).ready(function(){
       $(document).on('click',"#img3-1",function () {
       var audio = document.getElementById("kids_say_yay");
       if (audio.paused) audio.play();
       else audio.pause();
       $( "#popUp_right" ).show(); 
              setTimeout(function() {
              $( "#popUp_right" ).hide();
                     }, 2000);
});
});

$(document).ready(function(){
       $(document).on('click',"#img4-1",function () {
       $( "#popUp_right" ).show(); 
       var audio = document.getElementById("kids_say_yay");
       if (audio.paused) audio.play();
       else audio.pause();
              setTimeout(function() {
              $( "#popUp_right" ).hide();
                     }, 2000);
});
});

$(document).ready(function(){
       $(document).on('click',"#img5-1",function () {
       $( "#popUp_right" ).show(); 
       var audio = document.getElementById("kids_say_yay");
       if (audio.paused) audio.play();
       else audio.pause();
              setTimeout(function() {
              $( "#popUp_right" ).hide();
                     }, 2000);
});
});

$(document).ready(function(){
       $(document).on('click',"#img6-1",function () {
       $( "#popUp_wrong" ).show(); 
       var audio = document.getElementById("kids_say_ohno");
       if (audio.paused) audio.play();
       else audio.pause();
              setTimeout(function() {
              $( "#popUp_wrong" ).hide();
                     }, 2000);
});
});


$(document).ready(function(){
       $(document).on('click',"#img7-1",function () {
       $( "#popUp_wrong" ).show(); 
       var audio = document.getElementById("kids_say_ohno");
       if (audio.paused) audio.play();
       else audio.pause();
              setTimeout(function() {
              $( "#popUp_wrong" ).hide();
                     }, 2000);
});
});

$(document).ready(function(){
       $(document).on('click',"#img8-1",function () {
       $( "#popUp_wrong" ).show(); 
       var audio = document.getElementById("kids_say_ohno");
       if (audio.paused) audio.play();
       else audio.pause();
              setTimeout(function() {
              $( "#popUp_wrong" ).hide();
                     }, 2000);
});
});

$(document).ready(function(){
       $(document).on('click',"#img9-1",function () {
       $( "#popUp_wrong" ).show(); 
       var audio = document.getElementById("kids_say_ohno");
       if (audio.paused) audio.play();
       else audio.pause();
              setTimeout(function() {
              $( "#popUp_wrong" ).hide();
                     }, 2000);
});
});

$(document).ready(function(){
       $(document).on('click',"#img10-1",function () {
       $( "#popUp_wrong" ).show(); 
       var audio = document.getElementById("kids_say_ohno");
       if (audio.paused) audio.play();
       else audio.pause();
              setTimeout(function() {
              $( "#popUp_wrong" ).hide();
                     }, 2000);
});
});



//Game - Triangle
$(document).ready(function(){
       $(document).on('click',"#img2-2",function () {
       var audio = document.getElementById("kids_say_ohno");
       if (audio.paused) audio.play();
       else audio.pause();
       $( "#popUp_wrong1" ).show(); 
              setTimeout(function() {
              $( "#popUp_wrong1" ).hide();
                     }, 2000);
});
});

$(document).ready(function(){
       $(document).on('click',"#img3-2",function () {
       var audio = document.getElementById("kids_say_ohno");
       if (audio.paused) audio.play();
       else audio.pause();
       $( "#popUp_wrong1" ).show(); 
              setTimeout(function() {
              $( "#popUp_wrong1" ).hide();
                     }, 2000);
});
});

$(document).ready(function(){
       $(document).on('click',"#img4-2",function () {
       $( "#popUp_wrong1" ).show(); 
       var audio = document.getElementById("kids_say_ohno");
       if (audio.paused) audio.play();
       else audio.pause();
              setTimeout(function() {
              $( "#popUp_wrong1" ).hide();
                     }, 2000);
});
});

$(document).ready(function(){
       $(document).on('click',"#img5-2",function () {
       $( "#popUp_wrong1" ).show(); 
       var audio = document.getElementById("kids_say_ohno");
       if (audio.paused) audio.play();
       else audio.pause();
              setTimeout(function() {
              $( "#popUp_wrong1" ).hide();
                     }, 2000);
});
});

$(document).ready(function(){
       $(document).on('click',"#img6-2",function () {
       $( "#popUp_right1" ).show(); 
       var audio = document.getElementById("kids_say_yay");
       if (audio.paused) audio.play();
       else audio.pause();
              setTimeout(function() {
              $( "#popUp_right1" ).hide();
                     }, 2000);
});
});


$(document).ready(function(){
       $(document).on('click',"#img7-2",function () {
       $( "#popUp_right1" ).show(); 
       var audio = document.getElementById("kids_say_yay");
       if (audio.paused) audio.play();
       else audio.pause();
              setTimeout(function() {
              $( "#popUp_right1" ).hide();
                     }, 2000);
});
});

$(document).ready(function(){
       $(document).on('click',"#img8-2",function () {
       $( "#popUp_wrong1" ).show(); 
       var audio = document.getElementById("kids_say_ohno");
       if (audio.paused) audio.play();
       else audio.pause();
              setTimeout(function() {
              $( "#popUp_wrong1" ).hide();
                     }, 2000);
});
});

$(document).ready(function(){
       $(document).on('click',"#img9-2",function () {
       $( "#popUp_wrong1" ).show(); 
       var audio = document.getElementById("kids_say_ohno");
       if (audio.paused) audio.play();
       else audio.pause();
              setTimeout(function() {
              $( "#popUp_wrong1" ).hide();
                     }, 2000);
});
});

$(document).ready(function(){
       $(document).on('click',"#img10-2",function () {
       $( "#popUp_wrong1" ).show(); 
       var audio = document.getElementById("kids_say_ohno");
       if (audio.paused) audio.play();
       else audio.pause();
              setTimeout(function() {
              $( "#popUp_wrong1" ).hide();
                     }, 2000);
});
});

$(document).ready(function(){
       $(document).on('click',"#question-circle",function () {
       var audio = document.getElementById("quest_audio1");
       if (audio.paused) audio.play();
       else audio.pause();
   });
});

$(document).ready(function(){
       $(document).on('click',"#question-triangle",function () {
       var audio = document.getElementById("quest_audio2");
       if (audio.paused) audio.play();
       else audio.pause();
   });
});



//  $(document).ready(function(){
//        var box = document.getElementById('Page2');
//        var hari = isInViewport(box);
//        if (hari == true){
//               play_content1();
//        }
// });
              


//   $(document).ready(function(){
//        var box = document.getElementById('Page3');
//        var hari = isInViewport(box);
//        if (hari == true){
//               play_content2();
//        }  else{
//               play_content1();
//        }
//   });

  function isInViewport(element) {
       var rect = element.getBoundingClientRect();
       return (
           rect.top >= 0 &&
           rect.left >= 0 &&
           rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
           rect.right <= (window.innerWidth || document.documentElement.clientWidth)
       );
   }