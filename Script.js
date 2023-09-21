//accessing the buttons
let startbtn=document.getElementById("start-btn");
let stopbtn=document.getElementById("stop-btn");
let resetbtn=document.getElementById("reset-btn");
let displaytimer=document.querySelector(".display-timer");

let msec=0, sec=0, min=0;
let display=null;

// handling events on tags
startbtn.addEventListener('click', function(){
    if(display!==null){
       clearInterval(display);
    }
    display=setInterval(progressTimer, 10);
});

//handling stop button
stopbtn.addEventListener('click', function(){
    clearInterval(display);
});


//handling reset button
resetbtn.addEventListener('click', function(){
    clearInterval(display);
    displaytimer.innerHTML=`00:00:00`;
    msec=min=sec=0;
});


// logic to increase time
function progressTimer(){
    if(msec==100){
        msec=0;
        if(sec==60){
            sec=0;
            min++;
        }else{
            sec++;
        }
    }else{
        msec++;
    }

    // display time on screen
    let msecd= msec<10? `0${msec}`:msec;
    let secd= sec <10 ? `0${sec}`:sec;
    let mind= min<10 ? `0${min}`:min;
    displaytimer.innerHTML=`${mind}:${secd}:${msecd}`;

}

