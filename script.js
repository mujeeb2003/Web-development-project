var score = 0;
var timer=60;
var hitrn;


function makebubbles(){
    var clutter='';

for(i=1;i<=154;i++){
    var rn = Math.floor(Math.random()*10);
    clutter+=`<div class="bubble">${rn}</div>`;
}

document.querySelector('#pbtm').innerHTML=clutter;
}

function gettimer(){
    var timerint=setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector('#timerval').textContent=timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML=`
                <div><h1 style="color: green">Game Over</h1>
                <h2>Your Score is: ${score}</h2></div>
            `;
        }
    },1000)
}


function gethit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector('#hitval').textContent=hitrn;
}

function increasescore(){
    score+=10;
    document.querySelector("#scoreval").textContent=score;
}
function gameplay(){
    document.querySelector("#pbtm").addEventListener("click",function(dets){
        var clicked=Number(dets.target.textContent);
        if(clicked===hitrn){
            increasescore();
            gethit();
            makebubbles();   
        }
    })
}

gameplay();
gethit();
gettimer();
makebubbles();