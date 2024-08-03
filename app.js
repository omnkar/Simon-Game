let gameSeq=[];
let userSeq=[];

let btns=["yellow","red","purple","green"];
let started=false;
let userColor;
let h2=document.querySelector("h2");
let level=0;
document.addEventListener("keypress",function()
{
    if(started==false)
    {
        console.log("game is started");
        started=true;

        levelUp();
    }
    // console.log("game start");
})
function btnFlash(btn)
{
    btn.classList.add("flash");
    setTimeout(function()
    {
        btn.classList.remove("flash");
    },250);
}
function userFlash(btn)
{
    btn.classList.add("userflash");
    setTimeout(function()
    {
        btn.classList.remove("userflash");
    },250);
}
function levelUp()
{
    userSeq=[];
    level++;
    h2.innerText=`level ${level}`;

    let randomInd=Math.floor(Math.random()*3)
    let randomColor=btns[randomInd];
    let randBtn=document.querySelector(`.${randomColor}`);
    gameSeq.push(randomColor);
    console.log(gameSeq);
    btnFlash(randBtn);
}

function checkAns(ind)
{
    if(userSeq[ind]===gameSeq[ind])
    {
       if(userSeq.length== gameSeq.length)
       {
        setTimeout(levelUp,1000);
       }
    }
    else
    {
        console.log("game over")
        h2.innerHTML=`game over <b>${level}</b> <br>press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function()
        {
            document.querySelector("body").style.backgroundColor="white";

        },150)
        reset();
    }

}
function btnpress()
{

   let btn=this;
   userFlash(btn);

    userColor=btn.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}
let allbtns=document.querySelectorAll(".btn");

for(btn of allbtns)
{
    btn.addEventListener("click",btnpress);
}

function reset()
{
    start=false;
    userSeq=[]
    gameSeq=[];
    level=0;
}