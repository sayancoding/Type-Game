window.addEventListener('load',init);
//GLOBAL
let time =5;
let score=0;
let isPlaying;

//DOMS
const wordInput=document.querySelector("#word-input");
const currentWord=document.querySelector("#current-word");
const scoreDisplay=document.querySelector("#score");
const timeDisplay=document.querySelector("#time");
const message=document.querySelector("#message");
const seconds=document.querySelector("#seconds");

const words=['hat','river','status','runway',
             'game','euthanasia','goal',
             'week','current','station',
             'elephant','laptop','goodbye',
             'request','fundamental','radicalization',
             'kick','funny','heavy','serious',
             'chief','look','magnificient','girl',
             'gentleman','wax','developer','designer'
];

function init()
{
   //show up the current word
   showWord(words);
   //start matching on word input
   wordInput.addEventListener('input',startMatch);
   //set countdown-timer
   setInterval(countdown,1000);
   //show status
   setInterval(checkstatus,50);
}
function showWord(words)
{
    const ranIndex=Math.floor(Math.random()*words.length);
    currentWord.innerHTML=words[ranIndex];
}
//start match
function startMatch()
{
    if(matchWord())
    {
        console.log('Match');
        isPlaying=true;
        time=6;
        showWord(words);
        wordInput.value='';
        score++;
    }
    if(score==-1)
    {
        scoreDisplay.innerHTML=0;
    }else
    scoreDisplay.innerHTML=score;
}
//match currentWord to wordInput
function matchWord()
{
    if(wordInput.value===currentWord.innerHTML)
    {
        message.innerHTML="Correct !!";
        return true;
    }
    else
    {
        message.innerHTML=' ';
        return false;
    }
}

function countdown()
{
    if(time>0)
    {
        time--;
    }
    else if(time===0)
    {
        isPlaying=false;
    }    
    timeDisplay.innerHTML=time;
}
function checkstatus()
{
    if(!isPlaying && time===0)
    {
        message.innerHTML="Game Over !!";
        score=-1;
    }
}
