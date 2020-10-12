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

    
// -------game----------------------------------

function testlgame(){
    document.f1.txt1.value="Sorry";
    document.f1.clip2.src="/assets/images/blank.png";
   // document.f1.clip1. src="/assets/images/line1.gif";
    document.f1.clip7.src="/assets/images/w.gif";
    document.getElementById("lkid1").style.pointerEvents ="none";
    document.getElementById("mark1").checked = true; //kid gave wrong answer 
    }
    
    function testlgame2(){
    document.f1.txt1.value="Congrats!!";
    document.f1.clip1.src="/assets/images/blank.png"; 
    //document.f1.clip2. src="/assets/images/wow.gif";
    document.f1.clip7.src="/assets/images/Tress.gif";
    document.getElementById("lkid2").style.pointerEvents ="none";
    document.getElementById("unmark1").checked = true; //kid gave wrong answer 
    }
    
    function testlgame3(){ 
    document.f1.txt2.value="Congrats!!";
    document.f1.clip4.src="/assets/images/blank.png";
    //document.f1.clip3.src="/assets/images/wow.gif";
    document.f1.clip8.src="/assets/images/Tress.gif";
    document.getElementById("tree2").style.pointerEvents ="none";
    document.getElementById("mark2").checked = true; //kid gave wrong answer 
    }
    
    function testlgame4(){
    document.f1.txt2.value="Sorry";
    document.f1.clip3.src="/assets/images/blank.png"; 
   // document.f1.clip4. src="/assets/images/line1.gif";
    document.f1.clip8.src="/assets/images/w.gif";
    document.getElementById("tree1").style.pointerEvents ="none";
    document.getElementById("unmark2").checked = true; //kid gave wrong answer 
    }
    
    function testlgame5(){
    document.f1.txt3.value="Sorry";
    document.f1.clip6.src="/assets/images/blank.png";
    // document.f1.clip5. src="/assets/images/line1.gif";
    document.f1.clip9.src="/assets/images/w.gif";
    document.getElementById("pen2").style.pointerEvents ="none";
    document.getElementById("unmark3").checked = true; //kid gave wrong answer 
    }
    
    function testlgame6(){
    document.f1.txt3.value="Congrats!!";
    document.f1.clip5.src="/assets/images/blank.png"; 
    //document.f1.clip6. src="/assets/images/wow.gif";
    document.f1.clip9.src="/assets/images/Tress.gif";
    document.getElementById("pen1").style.pointerEvents ="none";
    document.getElementById("mark3").checked = true; //kid gave wrong answer 
    }