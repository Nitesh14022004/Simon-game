let gameSeq=[];
let userSeq=[];
let btns= ["yellow","red","purple","green"]

let started = false;
let level = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("game is started");
        started = true;
        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
    }

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
    }

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`

    //random btn choose
    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`)
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randbtn);
}
function checkAns(){
    // console.log("curr level:", level);
    let idx  = level-1;
    if(userSeq[idx] == gameSeq[idx]){
        console.log("saame value");
    }else{
        h2.innerText = `Game over! Press any key to restart.`;
    }
}

function btnPress(){
    console.log(this);
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns();
}

let allBtns =document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}