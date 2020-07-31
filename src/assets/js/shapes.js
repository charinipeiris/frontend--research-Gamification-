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
       $( "#popUp" ).show(); 
              setTimeout(function() {
              $( "#popUp" ).hide();
                     }, 2000);
});
});