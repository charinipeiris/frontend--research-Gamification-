   //fucntion to laod next and previous pages
   function showpages_length(page){
    var p1 = document.getElementById(page).getAttribute("id");

    if (p1=="page1-length"){
        document.getElementById("page1-length").style.display='block';
        document.getElementById("page2-length").style.display='none'; 
        document.getElementById("page3-length").style.display='none'; 
    }
    else if (p1=="page2-length"){
        document.getElementById("page1-length").style.display='none';
        document.getElementById("page2-length").style.display='block'; 
        document.getElementById("page3-length").style.display='none'; 
    } 
    else if (p1=="page3-length"){
        document.getElementById("page1-length").style.display='none';
        document.getElementById("page2-length").style.display='none'; 
        document.getElementById("page3-length").style.display='block'; 
    }

}
  
  
  //----------------length intro grade 1 level 1-----------------
  function testlength1(){
    document.f1.txt1.value="මම උසයි";
    document.f1.txt2.value="";
    var myAudio = new Audio('/assets/audio/tall.mp3');
    myAudio.play();
    }

    function testlength2(){
    document.f1.txt2.value="මම මිටියි";
    document.f1.txt1.value="";
    var myAudio = new Audio('/assets/audio/short.mp3');
    myAudio.play();
    }

    function testlength3(){
        document.f1.txt3.value="මම දිගයි";
        document.f1.txt4.value="";
        var myAudio = new Audio('/assets/audio/long.mp3');
        myAudio.play();
        }

         
    function testlength4(){
        document.f1.txt4.value="මම කොටයි";
        document.f1.txt3.value="";
        var myAudio = new Audio('/assets/audio/not_long.mp3');
        myAudio.play();
    }

             
    function testlength5(){
        document.f1.txt5.value="මම ලොකුයි";
        document.f1.txt6.value="";
        var myAudio = new Audio('/assets/audio/big.mp3');
        myAudio.play();
        }
             
    function testlength6(){
        document.f1.txt6.value="මම පොඩියි";
        document.f1.txt5.value="";
        var myAudio = new Audio('/assets/audio/small.mp3');
        myAudio.play();
        }

    
// -------game grade 1 level1----------------------------------

function testlgame(){
    document.f1.txt1.value="Sorry";
    document.f1.clip2.src="/assets/images/blank.png";
    document.f1.clip7.src="/assets/images/w.gif";
    document.getElementById("lkid1").style.pointerEvents ="none";
    document.getElementById("mark1").checked = true; //kid gave wrong answer 
    }
    
    function testlgame2(){
    document.f1.txt1.value="Congrats!!";
    document.f1.clip1.src="/assets/images/blank.png"; 
    document.f1.clip7.src="/assets/images/Tress.gif";
    document.getElementById("lkid2").style.pointerEvents ="none";
    document.getElementById("unmark1").checked = true; //kid gave wrong answer 
    }
    
    function testlgame3(){ 
    document.f1.txt2.value="Congrats!!";
    document.f1.clip4.src="/assets/images/blank.png";
    document.f1.clip8.src="/assets/images/Tress.gif";
    document.getElementById("tree2").style.pointerEvents ="none";
    document.getElementById("mark2").checked = true; //kid gave wrong answer 
    }
    
    function testlgame4(){
    document.f1.txt2.value="Sorry";
    document.f1.clip3.src="/assets/images/blank.png"; 
    document.f1.clip8.src="/assets/images/w.gif";
    document.getElementById("tree1").style.pointerEvents ="none";
    document.getElementById("unmark2").checked = true; //kid gave wrong answer 
    }
    
    function testlgame5(){
    document.f1.txt3.value="Sorry";
    document.f1.clip6.src="/assets/images/blank.png";
    document.f1.clip9.src="/assets/images/w.gif";
    document.getElementById("pen2").style.pointerEvents ="none";
    document.getElementById("unmark3").checked = true; //kid gave wrong answer 
    }
    
    function testlgame6(){
    document.f1.txt3.value="Congrats!!";
    document.f1.clip5.src="/assets/images/blank.png"; 
    document.f1.clip9.src="/assets/images/Tress.gif";
    document.getElementById("pen1").style.pointerEvents ="none";
    document.getElementById("mark3").checked = true; //kid gave wrong answer 
    }

    //-----------Length intro - Level2 - grade 1

    function testweight1(){
        document.f1.txt7.value="මම බරින් වැඩියි";
        document.f1.txt8.value="";
        var myAudio = new Audio('/assets/audio/heavyweighted.m4a');
        myAudio.play();
        }
             
    function testweight2(){
        document.f1.txt8.value="මම බරින් අඩුයි";
        document.f1.txt7.value="";
        var myAudio = new Audio('/assets/audio/lightweighted.m4a');
        myAudio.play();
        }

    function testweight3(){
        document.f2.txt9.value="මගේ වතුර ප්‍රමාණය අඩුයි";
        document.f2.txt10.value="";
        var myAudio = new Audio('/assets/audio/heavyweighted.m4a');
        myAudio.play();
        }
                 
    function testweight4(){
        document.f2.txt10.value="මගේ වතුර ප්‍රමාණය වැඩියි";
        document.f2.txt9.value="";
        var myAudio = new Audio('/assets/audio/lightweighted.m4a');
        myAudio.play();
        }

        //-----------length game grade 1 level 2

        // function testl2game(){
        //     document.f3.txt1.value="Sorry";
        //     document.f3.clip2.src="/assets/images/blank.png";
        //     document.f3.clip7.src="/assets/images/w.gif";
        //     document.getElementById("lkid1").style.pointerEvents ="none";
        //     document.getElementById("mark1").checked = true; //kid gave wrong answer 
        //     }
            
        //     function testl2game2(){
        //     document.f3.txt1.value="Congrats!!";
        //     document.f3.clip1.src="/assets/images/blank.png"; 
        //     document.f3.clip7.src="/assets/images/Tress.gif";
        //     document.getElementById("lkid2").style.pointerEvents ="none";
        //     document.getElementById("unmark1").checked = true; //kid gave wrong answer 
        //     }
            
            function testl2game3(){ 
            document.f3.txt2.value="Congrats!!";
            document.f3.clip4.src="/assets/images/blank.png";
            document.f3.clip8.src="/assets/images/Tress.gif";
            document.getElementById("tree2").style.pointerEvents ="none";
            document.getElementById("mark2").checked = true; //kid gave wrong answer 
            }
            
            function testl2game4(){
            document.f3.txt2.value="Sorry";
            document.f3.clip3.src="/assets/images/blank.png"; 
            document.f3.clip8.src="/assets/images/w.gif";
            document.getElementById("tree1").style.pointerEvents ="none";
            document.getElementById("unmark2").checked = true; //kid gave wrong answer 
            }
            
            function testl2game5(){
            document.f3.txt3.value="Sorry";
            document.f3.clip6.src="/assets/images/blank.png";
            document.f3.clip9.src="/assets/images/w.gif";
            document.getElementById("pen2").style.pointerEvents ="none";
            document.getElementById("unmark3").checked = true; //kid gave wrong answer 
            }
            
            function testl2game6(){
            document.f3.txt3.value="Congrats!!";
            document.f3.clip5.src="/assets/images/blank.png"; 
            document.f3.clip9.src="/assets/images/Tress.gif";
            document.getElementById("pen1").style.pointerEvents ="none";
            document.getElementById("mark3").checked = true; //kid gave wrong answer 
            }