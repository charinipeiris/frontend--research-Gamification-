function show(shown, hidden) {
       document.getElementById(shown).style.display='block';
       document.getElementById(hidden).style.display='none';
       return false;
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
$(document).ready(function(){
       $(document).on('click',"#img2",function () {
       var audio = document.getElementById("kids_say_yay");
       if (audio.paused) audio.play();
       else audio.pause();
       $( "#popUp_wrong" ).show(); 
              setTimeout(function() {
              $( "#popUp_wrong" ).hide();
                     }, 2000);
});
});

$(document).ready(function(){
       $(document).on('click',"#img3",function () {
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
       $(document).on('click',"#img4",function () {
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
       $(document).on('click',"#img5",function () {
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
       $(document).on('click',"#question",function () {
       var audio = document.getElementById("quest_audio");
       if (audio.paused) audio.play();
       else audio.pause();
   });
});