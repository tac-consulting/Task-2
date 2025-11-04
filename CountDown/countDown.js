let start=10;
let time=start*60;

let countdown=document.getElementById("timer");

function updatecountdown(){
    let minutes=Math.floor(time/60);
    let sec=time % 60;

    sec=sec < 10 ?'0' +sec :sec;
    countdown.innerHTML = `${minutes}: ${sec}`
    time--;
}

setInterval(updatecountdown,1000);