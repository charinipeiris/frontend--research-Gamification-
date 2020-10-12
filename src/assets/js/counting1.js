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


//--------------------------addition intro---------------

 
var k=580
var t
function put9(){
document.f3.txt3.value="";
document.f1.clip9.style.visibility="hidden";
document.f1.p9.style.left=k;
t=setTimeout("put9()",50);
k=k-5;
if(k<150)
{
clearTimeout(t);
document.f3.txt2.value=parseInt(document.f3.txt2.value)+1
}
}
var j=670
var t
function put8(){
document.f3.txt3.value="";
document.f1.clip8.style.visibility="hidden";
document.f1.p8.style.left=j;
t=setTimeout("put8()",50);
j=j-5;
if(j<210)
{
clearTimeout(t);
document.f3.txt2.value=parseInt(document.f3.txt2.value)+1
}
}

var h=640
var t
function put7(){
document.f3.txt3.value="";
document.f1.clip7.style.visibility="hidden";
document.f1.p7.style.left=h;
t=setTimeout("put7()",50);
h=h-5;
if(h<250)
{
clearTimeout(t);
document.f3.txt2.value=parseInt(document.f3.txt2.value)+1
}
}

var g=560
var t
function put6(){
document.f3.txt3.value="";
document.f1.clip6.style.visibility="hidden";
document.f1.p6.style.left=g;
t=setTimeout("put6()",50);
g=g-5;
if(g<150)
{
clearTimeout(t);
document.f3.txt2.value=parseInt(document.f3.txt2.value)+1
}
}

var f=600
var t
function put5(){
document.f3.txt3.value="";
document.f1.clip5.style.visibility="hidden";
document.f1.p5.style.left=f;
t=setTimeout("put5()",50);
f=f-5;
if(f<200)
{
clearTimeout(t);
document.f3.txt2.value=parseInt(document.f3.txt2.value)+1
}
}


var e=670
var t
function put4(){
document.f1.t1.value=eval(document.f1.t1.value)+1;
if(document.f1.t1.value==1)
{document.f1.clip5.style.visibility="visible";
document.f1.clip6.style.visibility="visible";
document.f1.clip7.style.visibility="visible";
document.f1.clip8.style.visibility="visible";
document.f1.clip9.style.visibility="visible";
}
document.f3.txt3.value="";


document.f1.clip4.style.visibility="hidden";
document.f1.p4.style.left=e;
t=setTimeout("put4()",50);
e=e-5;
if(e<210)
{
clearTimeout(t);
document.f3.txt1.value=parseInt(document.f3.txt1.value)+1
}
}
var d=580
var t
function put3(){
document.f1.t1.value=eval(document.f1.t1.value)+1;
if(document.f1.t1.value==50)
{document.f1.clip5.style.visibility="visible";
document.f1.clip6.style.visibility="visible";
document.f1.clip7.style.visibility="visible";
document.f1.clip8.style.visibility="visible";
document.f1.clip9.style.visibility="visible";
}
document.f3.txt3.value="";

document.f1.clip3.style.visibility="hidden";
document.f1.p3.style.left=d;
t=setTimeout("put3()",50);
d=d-5;
if(d<150)
{
clearTimeout(t);
document.f3.txt1.value=parseInt(document.f3.txt1.value)+1
}
}
var c=640
var t
function put2(){
document.f1.t1.value=eval(document.f1.t1.value)+1;
if(document.f1.t1.value==1)
{document.f1.clip5.style.visibility="visible";
document.f1.clip6.style.visibility="visible";
document.f1.clip7.style.visibility="visible";
document.f1.clip8.style.visibility="visible";
document.f1.clip9.style.visibility="visible";
}
document.f3.txt3.value="";


document.f1.clip2.style.visibility="hidden";
document.f1.p2.style.left=c;
t=setTimeout("put2()",50);
c=c-5;
if(c<250)
{
clearTimeout(t);
document.f3.txt1.value=parseInt(document.f3.txt1.value)+1
}
}

var b=600
var t
function put1(){
document.f1.t1.value=eval(document.f1.t1.value)+1;
if(document.f1.t1.value==1)
{document.f1.clip5.style.visibility="visible";
document.f1.clip6.style.visibility="visible";
document.f1.clip7.style.visibility="visible";
document.f1.clip8.style.visibility="visible";
document.f1.clip9.style.visibility="visible";
}
document.f3.txt3.value="";

document.f1.clip1.style.visibility="hidden";
document.f1.p1.style.left=b;
t=setTimeout("put1()",50);
b=b-5;
if(b<200)
{
clearTimeout(t);
document.f3.txt1.value=parseInt(document.f3.txt1.value)+1
}
}
function testaddition(){document.f3.txt3.value=parseInt(document.f3.txt1.value)+parseInt(document.f3.txt2.value)}
