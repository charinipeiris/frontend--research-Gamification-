function show(shown, hidden) {
    document.getElementById(shown).style.display='block';
    document.getElementById(hidden).style.display='none';
    return false;
}

function showImage(){
      document.getElementById('loadingImage').style.visibility="visible";
      //coin disappears after 4 seconds. Remove if you dont need
      setTimeout (function() {
        $( "#loadingImage" ).hide();
                  }, 4000);
    
  }

 function showImage2(){
        document.getElementById('loadingImage2').style.display='block';
         //coin disappears after 4 seconds. Remove if you dont need
        setTimeout (function() {
            $( "#loadingImage2" ).hide();
                      }, 4000);
        
      }
 

