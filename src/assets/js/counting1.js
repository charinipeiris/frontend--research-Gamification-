var a =0;
var m1 = 1000;
var m2 = 1000;
var m3 = 1000;
var m4 = 1000;
var m5 = 1000;
function testcountintro(){document.f1.txt1.style.visibility='hidden';
document.f1.txt3.style.visibility='hidden';
document.f3.clip1.style.visibility='hidden';
a++;
document.f1.txt1.value=a;
if(a==6){document.f1.txt1.value=""; a="0";document.f.but1.disabled="disabled"; 
window.setTimeout("start();", 0);
document.f2.clip2.style.left=1000;
document.f2.clip3.style.left=1000; 
document.f2.clip4.style.left=1000;
document.f2.clip5.style.left=1000;
document.f2.clip6.style.left=1000;
document.f1.txt3.value=" "; document.f3.clip1.src="/assets/images/b.png"; }

    if(document.f1.txt1.value<=5 && document.f1.txt1.value>0){
        document.f.but1.disabled="disabled";
        start();
        setTimeout("document.f.but1.disabled=false,document.f1.txt1.style.visibility='visible',document.f1.txt3.style.visibility='visible',document.f3.clip1.style.visibility='visible'",2500);
        
    }
        
}

function start(){
    if(document.f1.txt1.value==1){ 
document.f1.txt3.value='එක ';

    document.f2.clip2.style.left=m1;
       m1-=2;}
       if(m1>320){
             window.setTimeout("start();", 0);
document.f3.clip1.src="/assets/images/1.gif";
}
                

    if(document.f1.txt1.value==2){ 
document.f1.txt3.value="දෙක ";

        document.f2.clip3.style.left=m2;
           m2-=2;
           if(m2>370)
                 window.setTimeout("start();", 0);
document.f3.clip1.src="/assets/images/2.gif";
    }

    if(document.f1.txt1.value==3){ 
document.f1.txt3.value="තුන ";

        document.f2.clip4.style.left=m3;
           m3-=2;
           if(m3>430)
                 window.setTimeout("start();", 0);
document.f3.clip1.src="/assets/images/3.gif";
    }

if(document.f1.txt1.value==4){ 
document.f1.txt3.value="හතර ";

        document.f2.clip5.style.left=m4;
           m4-=2;
           if(m4>480)
                 window.setTimeout("start();", 0);
document.f3.clip1.src="/assets/images/4.gif";
    }
if(document.f1.txt1.value==5){ 
document.f1.txt3.value="පහ ";

        document.f2.clip6.style.left=m5;
           m5-=2;
           if(m5>530)
                 window.setTimeout("start();", 0);
document.f3.clip1.src="/assets/images/5.gif";
    }

}


function ov()
{
document.getElementById("box").style.background="transparent"
}

function out()
{
document.getElementById("box").style.background="transparent"
}
var x =0
function testcount1()
{
x++
document.f1.t2.value = x;
if (x>=10)
{
x=0;
}
if(x==1)
document.f1.clip1.src="/assets/images/monky.png";
if(x==2)
document.f1.clip2.src="/assets/images/monky.png";
if(x==3)
document.f1.clip3.src="/assets/images/monky.png";
if(x==4)
document.f1.clip4.src="/assets/images/monky.png";
if(x==5)
document.f1.clip5.src="/assets/images/monky.png";
if(x==6)
document.f1.clip6.src="/assets/images/monky.png";
if(x==7)
document.f1.clip7.src="/assets/images/monky.png";
if(x==8)
document.f1.clip8.src="/assets/images/monky.png";
if(x==9)
document.f1.clip9.src="/assets/images/monky.png";
if(x==0){
document.f1.clip1.src="/assets/images/blank.png";
document.f1.clip2.src="/assets/images/blank.png";
document.f1.clip3.src="/assets/images/blank.png";
document.f1.clip4.src="/assets/images/blank.png";
document.f1.clip5.src="/assets/images/blank.png";
document.f1.clip6.src="/assets/images/blank.png";
document.f1.clip7.src="/assets/images/blank.png";
document.f1.clip8.src="/assets/images/blank.png";
document.f1.clip9.src="/assets/images/blank.png";}
}

function testcount2()
{
if(document.f1.t1.value==document.f1.t2.value)
{document.f1.clip10.src="/assets/images/r.gif";
// document.f1.clip11.src="/assets/images/c.gif"
}else{
document.f1.clip10.src="/assets/images/w.gif";
document.f1.clip11.src="/assets/images/blank.png"
}
}

function testcount3()
{
x=0
document.f1.t1.value=1+Math.floor(Math.random()*9);
document.f1.clip1.src="/assets/images/blank.png";
document.f1.clip2.src="/assets/images/blank.png";
document.f1.clip3.src="/assets/images/blank.png";
document.f1.clip4.src="/assets/images/blank.png";
document.f1.clip5.src="/assets/images/blank.png";
document.f1.clip6.src="/assets/images/blank.png";
document.f1.clip7.src="/assets/images/blank.png";
document.f1.clip8.src="/assets/images/blank.png";
document.f1.clip9.src="/assets/images/blank.png";
document.f1.clip10.src="/assets/images/blank.png";
document.f1.clip11.src="/assets/images/blank.png"
}