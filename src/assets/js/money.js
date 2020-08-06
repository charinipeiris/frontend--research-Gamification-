function show(shown, hidden) {
    document.getElementById(shown).style.display='block';
    document.getElementById(hidden).style.display='none';
    return false;
}

// function showImage(){
//       document.getElementById('loadingImage').style.visibility="visible";
//       //coin disappears after 4 seconds. Remove if you dont need
//       setTimeout (function() {
//         $( "#loadingImage" ).hide();
//                   }, 4000);
    
//   }

 function showImage2(){
        document.getElementById('loadingImage2').style.display='block';
         //coin disappears after 4 seconds. Remove if you dont need
        setTimeout (function() {
            $( "#loadingImage2" ).hide();
                      }, 4000);
        
      }
      function showImage3(){
        document.getElementById('loadingImage3').style.display='block';
         //coin disappears after 4 seconds. Remove if you dont need
        setTimeout (function() {
            $( "#loadingImage3" ).hide();
                      }, 4000);
        
      }
 

      function testWrong(){
        document.f1.txt1.value="නැවතත්";
        
        // document.f1.clip2.src="./images/blank.gif";
        // document.f1.clip1. src="./images/line.gif";
        
        document.f1.clip7.src="assets/images/mad_bunny.gif";
        }
        
        
        
        function testRight(){
        document.f1.txt1.value="හරියට හරි";
        
        // document.f1.clip1.src="./images/blank.gif"; 
        // document.f1.clip2. src="./images/line.gif";
        
        document.f1.clip7.src="assets/images/yay_bunny.gif";
        }
        
        

