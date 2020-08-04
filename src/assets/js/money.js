function show(shown, hidden) {
    document.getElementById(shown).style.display='block';
    document.getElementById(hidden).style.display='none';
    return false;
}

function play_coin(){ 
    var pic = "assets/images/5.png"
    document.getElementById('coin').src = pic.replace('90x90', '225x225');
    document.getElementById('coin').style.display='block';

    }


//     $(document).ready(function(){
//         $(document).on('click',"#img2",function () {
//         $( "#popUp" ).show(); 
//                setTimeout(function() {
//                $( "#popUp" ).hide();
//                       }, 2000);
//  });
//  });