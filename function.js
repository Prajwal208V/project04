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
    else if(H==0){
        hours.innerHTML=12;
        am_pm.innerHTML="AM";
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
    var hour=new Date().getHours();
    if(hour==0) hour=24;
   
    var wakeup_selector=document.getElementById("wakeup_selector").value;
    var lunch_selector=document.getElementById("lunch_selector").value;
    var nap_selector=document.getElementById("nap_selector").value;
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
    // console.log(wakeup_selector);
    // console.log(lunch_selector);
    // console.log(nap_selector);
}
setInterval(clock,1000);
function settime(){

    document.getElementById("salutation");
    var W=document.getElementById("wakeup_selector").value;
    var L=document.getElementById("lunch_selector").value;
    var N=document.getElementById("nap_selector").value;

    var wake=document.getElementById("wake_time");
    var lunch=document.getElementById("lunch_time");
    var nap=document.getElementById("nap_time");
   
    //    wake-time
   if(W==24) wake.innerHTML=("Wake up time : "+(W-12)+" AM - "+(01)+"AM");
   else if(W==12) wake.innerHTML=("Wake up time : "+(W)+" PM - "+"01PM");
   else if(W==11) wake.innerHTML=("Wake up time : "+(W)+" AM - "+(12)+"PM");
   else if(W>12) wake.innerHTML=("Wake up time : "+(W-12)+" PM - "+(W-11)+"PM");
   else if(W>0) wake.innerHTML=("Wake up time : "+(W)+" AM - "+(parseInt(W)+1)+"AM");
   else wake.innerHTML=("Wake up time :      --      ");
    // lunch-time
   if(L==24) lunch.innerHTML=("Lunch time : "+(L-12)+" AM - "+(01)+"AM");
   else if(L==12) lunch.innerHTML=("Lunch time : "+(L)+" PM - "+"01PM");
   else if(L==11) lunch.innerHTML=("Lunch time : "+(L)+" AM - "+(12)+"PM");
   else if(L>12) lunch.innerHTML=("Lunch time : "+(L-12)+" PM - "+(L-11)+"PM");
   else if(L>0) lunch.innerHTML=("Lunch time : "+(L)+" AM - "+(parseInt(L)+1)+"AM");
   else lunch.innerHTML=("Lunch time :      --      ");
    // NAP-TIME
   if(N==24) nap.innerHTML=("Nap time : "+(N-12)+" AM - "+(01)+"AM");
   else if(N==12) nap.innerHTML=("Nap time : "+(N)+" PM - "+"01PM");
   else if(N==11) nap.innerHTML=("Nap time : "+(N)+" AM - "+(12)+"PM");
   else if(N>12) nap.innerHTML=("Nap time : "+(N-12)+" PM - "+(N-11)+"PM");
   else if(N>0)nap.innerHTML=("Nap time : "+(N)+" AM - "+(parseInt(N)+1)+"AM");
   else nap.innerHTML=("Nap time :      --      ");
}