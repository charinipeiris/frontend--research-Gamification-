
    function ov()
    {
    document.getElementById("box").style.background="transparent"
    }
    
    function out()
    {
    document.getElementById("box").style.background="transparent"
    }
    var x =0
    function test1()
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
    
    function test2()
    {
    if(document.f1.t1.value==document.f1.t2.value)
    {document.f1.clip10.src="/assets/images/r.gif";
    // document.f1.clip11.src="/assets/images/c.gif"
    }else{
    document.f1.clip10.src="/assets/images/w.gif";
    document.f1.clip11.src="/assets/images/blank.png"
    }
    }
    
    function test3()
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