function clock(){
    var hours=document.getElementById("hours");
    var minutes=document.getElementById("mins");
    var seconds=document.getElementById("secs");
    var am_pm=document.getElementById("am-pm");
    var salutation=document.getElementById("salutation");
    var time=new Date();
    var H=time.getHours();
    var M=time.getMinutes();
    var S=time.getSeconds();
    // var H=20;
    // // // var M=0;
    // // // var S=7;
    // hour condition block and am-pm
    if(H>12){
        let conv=H-12;
        if(conv<=9) hours.innerHTML='0'+conv;
        else hours.innerHTML=conv;
        am_pm.innerHTML="PM";
    }
    else if(H==12 && M>=0){
        hours.innerHTML=H;
        am_pm.innerHTML="PM";
    }
    else{
        if(H<=9) hours.innerHTML='0'+H;
        else hours.innerHTML=H;
        am_pm.innerHTML="AM";
    }
    // minute condition 
    if(M<=9) minutes.innerHTML='0'+M;
    else minutes.innerHTML=M;
    // second condition
    if(S<=9) seconds.innerHTML='0'+S;
    else seconds.innerHTML=S;

    var nap_selector=document.getElementById("nap_selector").value;
    if(H>=5 && H<12) salutation.innerHTML="GOOD MORNING!!";
    else if(H>=12 && H<17) salutation.innerHTML="GOOD AFTERNOON!!";
    else if(H>=17 && H<nap_selector) salutation.innerHTML="GOOD EVENING!!";
    else salutation.innerHTML="GOOD NIGHT!!";
    // console.log(nap_selector);
    
}
setInterval(clock,1000);
function settime(){
   var wakeup_selector=document.getElementById("wakeup_selector").value;
   var lunch_selector=document.getElementById("lunch_selector").value;
   var nap_selector=document.getElementById("nap_selector").value;
   var hour=new Date().getHours();
   if(hour==wakeup_selector){
       document.getElementById("image_greeting").style.backgroundImage="url(./wakeup.PNG)";
       var label1=document.getElementById("image_label1");
       label1.innerHTML="WAKE UP !!";
   }
   else if(lunch_selector==hour){
        document.getElementById("image_greeting").style.backgroundImage="url(./lunch.PNG)";
        var label1=document.getElementById("image_label1");
        label1.innerHTML="LET'S HAVE SOME LUNCH !!";
   }
   else if(nap_selector==hour){
        document.getElementById("image_greeting").style.backgroundImage="url(./goodnight.PNG)";
        var label1=document.getElementById("image_label1");
        label1.innerHTML="GOOD NIGHT !!";
   }
   else{
        document.getElementById("image_greeting").style.backgroundImage="url(./cat.png)";
       var label1=document.getElementById("image_label1");
        label1.innerHTML="";
   }
}