  //-------------Grade 1 -------------------
  
  //---------------------level 1-----------------------------
  
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


    //function to load next and previous pages Grade 1 Level 01 length game
    function testlgame(){
        var myAudio = new Audio('/assets/audio/lightweighted.m4a');
        myAudio.play();
        }

    //function to enable the "iwarai" button in Grade 1 Level 01 length game
  function enableSubmit_length(){
    var chk = document.querySelectorAll('input[type="checkbox"]:checked').length;
    if (chk == 3){
         document.getElementById("submit").style.display="block";
         document.getElementById("arrow1").style.display="block";
          }
    else{
        document.getElementById("submit").style.display="none";
          }
          }

function testlgame(){
    document.f1.clip7.src="/assets/images/w.gif";
    document.getElementById("lkid1").style.pointerEvents ="none";
    document.getElementById("mark1").checked = true; //kid gave wrong answer 
    enableSubmit_length();
    }
    
    function testlgame2(){
    document.f1.clip7.src="/assets/images/yay_bunny2.gif";
    document.getElementById("lkid2").style.pointerEvents ="none";
    document.getElementById("unmark1").checked = true; //kid gave wrong answer 
    enableSubmit_length();
    }
    
    function testlgame3(){ 
    document.f1.clip8.src="/assets/images/yay_bunny2.gif";
    document.getElementById("tree2").style.pointerEvents ="none";
    document.getElementById("mark2").checked = true; //kid gave wrong answer 
    enableSubmit_length();
    }
    
    function testlgame4(){
    document.f1.clip8.src="/assets/images/w.gif";
    document.getElementById("tree1").style.pointerEvents ="none";
    document.getElementById("unmark2").checked = true; //kid gave wrong answer 
    enableSubmit_length();
    }
    
    function testlgame5(){
    document.f1.clip9.src="/assets/images/w.gif";
    document.getElementById("pen2").style.pointerEvents ="none";
    document.getElementById("unmark3").checked = true; //kid gave wrong answer 
    enableSubmit_length();
    }
    
    function testlgame6(){
    document.f1.clip9.src="/assets/images/yay_bunny2.gif";
    document.getElementById("pen1").style.pointerEvents ="none";
    document.getElementById("mark3").checked = true; //kid gave wrong answer 
    enableSubmit_length();
    }

    //=========================Grade 1 Level 2===============

    //=====fucntion to laod next and previous pages level 2===========

function showpages_length(page){
    var p1 = document.getElementById(page).getAttribute("id");
    if (p1=="page1-length"){	
        document.getElementById("page1-length").style.display='block';	
        document.getElementById("page2-length").style.display='none'; 	
        document.getElementById("page3-length").style.display='none'; 	
        document.getElementById("page4-length").style.display='none'; 	
    }
    else if (p1=="page2-length"){
        document.getElementById("page1-length").style.display='none';	
        document.getElementById("page2-length").style.display='block'; 	
        document.getElementById("page3-length").style.display='none'; 
        document.getElementById("page4-length").style.display='none'; 	
        }
   else if (p1=="page3-length"){
    document.getElementById("page1-length").style.display='none';	
    document.getElementById("page2-length").style.display='none'; 	
    document.getElementById("page3-length").style.display='block'; 
    document.getElementById("page2-length").style.display='none'; 	
   }	
   else if (p1=="page4-length"){
    document.getElementById("page1-length").style.display='none';	
    document.getElementById("page2-length").style.display='none'; 	
    document.getElementById("page4-length").style.display='block'; 
    document.getElementById("page3-length").style.display='none'; 	
   }	
        

}

    //-----------Length intro - Level2 - grade 1 -------------------------------

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

        //-----------length game grade 1 level 2------------------

      
        function test1_len()
        {
        document.f3.rw1.src="/assets/images/yay_bunny2.gif";
        document.getElementById("a2").style.pointerEvents = "none";
        document.getElementById("a1").style.pointerEvents = "none";
        document.getElementById("mark1").checked = true; //kid gave right answer 

        
        }
        function test2_len()
        {
        document.f3.rw1.src="/assets/images/w.gif";
        document.getElementById("a5").style.pointerEvents = "none";
        document.getElementById("a2").style.pointerEvents = "none";
        document.getElementById("unmark1").checked = true; //kid gave wrong answer 
    
        }
    
        function test3_len()
        {
        document.f3.rw1.src="/assets/images/w.gif";
        document.getElementById("a1").style.pointerEvents = "none";
        document.getElementById("a5").style.pointerEvents = "none";
        document.getElementById("unmark1").checked = true; //kid gave wrong answer 

        }
        
        function test4_len()
        {
        document.f3.rw2.src="/assets/images/w.gif";
        document.getElementById("b2").style.pointerEvents = "none";
        document.getElementById("b5").style.pointerEvents = "none";
        document.getElementById("unmark2").checked = true; //kid gave right answer 
    
        
        }
        function test5_len()
        {
    
        document.f3.rw2.src="/assets/images/yay_bunny2.gif";
        document.getElementById("b1").style.pointerEvents = "none";
        document.getElementById("b2").style.pointerEvents = "none";
        document.getElementById("mark2").checked = true; //kid gave wrong answer 

        }
    
        function test6_len()
        {
        document.f3.rw2.src="/assets/images/w.gif";
        document.getElementById("b2").style.pointerEvents = "none";
        document.getElementById("b1").style.pointerEvents = "none";
        document.getElementById("unmark2").checked = true; //kid gave wrong answer 

        }
        
        function test7_len()
        {
        document.f3.rw3.src="/assets/images/w.gif";
        document.getElementById("c1").style.pointerEvents = "none";
        document.getElementById("c2").style.pointerEvents = "none";
        document.getElementById("unmark3").checked = true; //kid gave wrong answer 
        
        }
        function test8_len()
        {
        document.f3.rw3.src="/assets/images/yay_bunny2.gif";
        document.getElementById("c5").style.pointerEvents = "none";  
        document.getElementById("c2").style.pointerEvents = "none"; 
        document.getElementById("mark3").checked = true; //kid gave right answer 
    
        }
    
        function test9_len()
        {
    
        document.f3.rw3.src="/assets/images/w.gif";
        document.getElementById("c5").style.pointerEvents = "none";
        document.getElementById("c1").style.pointerEvents = "none";
        document.getElementById("unmark3").checked = true; //kid gave wrong answer 

        
        }



