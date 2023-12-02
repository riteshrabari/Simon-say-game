let gameSeq=[];
let user=[];
let level=0;
let score=0;
let start=false;
let btns=["yellow","green","blue","red"];

document.addEventListener("keypress",function(){
    if(start==false){
        start=true;
        levelUp();
    }
});

let h2=document.querySelector("h2");
let h3=document.querySelector("h3");

function btnFlash(randBtn){
    randBtn.classList.add("flash");
    setTimeout(function(){
        randBtn.classList.remove("flash");
    },250);
}

function levelUp(){
    user=[];
     level++;
     h3.innerText=`Level ${level}`;
     let randInd=Math.floor(Math.random()*4);
     let randCol=btns[randInd];
     let randBtn=document.querySelector(`.${randCol}`);
     btnFlash(randBtn);
     gameSeq.push(randCol);
}

function game(idx){
    if(user[idx]===gameSeq[idx]){
        if(user.length==gameSeq.length){
            setTimeout(levelUp,200);
        }
    }
    else{
        h3.innerHTML=`Game Over! Your score is <i>${level-1}</i>.Press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white"
        },300);
        reset();
    }
}


function blink(){
       let btn=this;
       btnFlash(btn);
       usercolor=btn.getAttribute("id");
       user.push(usercolor);
       game(user.length-1);
}


let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
        btn.addEventListener("click",blink);
    }


function reset(){
    start=false;
    gameSeq=[];
    user=[];
    if(level>score){
          score=level-1;
          h2.innerText=`Highest score is ${score}`;
    }
    level=0;
}
