let winCount=0; //initialise counts here globally
let loseCount=0;
let tieCount=0;
let playerMove; //make playerMove a global variable
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const resultDiv = document.getElementById('Results');
let countDiv = document.getElementById('Counts');
let computerMove;
let totalCount = 0;

function computerPlay() {
    let random = Math.floor(Math.random()*100)+1;
    if (random<=33) {
        computerMove = 'Rock';
    }
    else if (random<= 66) {
        computerMove = 'Paper';
    }
    else if (random <=100){
        computerMove = 'Scissors';
    }
    return computerMove;
}

function endGameCalc() { //calculates the results after 5 rounds for in the function playerplay()
    if (winCount>loseCount) {
        return 'You won the 5 round game!';
    }
    else if(winCount<loseCount) {
        return 'You lost the 5 round game!';
    }
    else if (winCount==loseCount) {
        return 'You tied the 5 round game!';
    }
}

function checkRound (playerButton){ //this function decides in what round we are (fifth or a different round)
    totalCount += 1; //this counts the amount of clicks
    if (playerButton=='rock') {
        if(totalCount%5==0 && totalCount!=0) { 
            /*if we are on the fifth round we first allow the computer to calculate another round 
            and the display the results on screen. After that the counts are reset to 0*/
            playerMove= 'rock'; 
            round();
            resultDiv.innerText = endGameCalc(); 
            winCount=0; 
            loseCount=0; 
            tieCount=0;
        }
        else {
            playerMove= 'rock'; 
            round();
        }
    }
    else if(playerButton=='paper') {
        if(totalCount%5==0 && totalCount!=0) { 
            /*if we are on the fifth round we first allow the computer to calculate another round 
            and the display the results on screen. After that the counts are reset to 0*/
            playerMove= 'paper'; 
            round();
            resultDiv.innerText = endGameCalc(); 
            winCount=0; 
            loseCount=0; 
            tieCount=0;
        }
        else {
            playerMove= 'paper'; 
            round();
        }
    }
    else if(playerButton=='scissors'){
        if(totalCount%5==0 && totalCount!=0) { 
            /*if we are on the fifth round we first allow the computer to calculate another round 
            and the display the results on screen. After that the counts are reset to 0*/
            playerMove= 'scissors'; 
            round();
            resultDiv.innerText = endGameCalc(); 
            winCount=0; 
            loseCount=0; 
            tieCount=0;
        }
        else {
            playerMove= 'scissors'; 
            round();
        }
    }

}

function round() { //this function plays a round
    countDiv.style.width = '50%'; //change width from 100 to 50% so that counts are displayed in a row
    computerMove = computerPlay();
    if (playerMove.toLowerCase() != 'rock' && playerMove.toLowerCase() != 'paper' && playerMove.toLowerCase() != 'scissors') {
        resultDiv.innerText=`You chose ${playerMove}. Choose a valid play: rock, paper, or scissors.`;
    }
    else if (computerMove.toLowerCase() == playerMove.toLowerCase()) {
        resultDiv.innerText=`You both played ${computerMove}. It's a tie!`;
        tieCount+=1;
        countDiv.innerText=`Wincount: ${winCount}. Losecount: ${loseCount}. Tiecount: ${tieCount}.`;
    }
    else if (computerMove == 'Rock') {
        //resultDiv.innerText(`Computer played ${computerMove}.`);
        if (playerMove.toLowerCase() == 'paper') {
            resultDiv.innerText=`Computer played ${computerMove}. You win!`;
            winCount+= 1;
            countDiv.innerText=`Wincount: ${winCount}. Losecount: ${loseCount}. Tiecount: ${tieCount}.`;
        }
        else if(playerMove.toLowerCase() == 'scissors') {
            resultDiv.innerText=`Computer played ${computerMove}. You lose!`;
            loseCount +=1;
            countDiv.innerText=`Wincount: ${winCount}. Losecount: ${loseCount}. Tiecount: ${tieCount}.`;
        }
    }
    else if (computerMove == 'Paper') {
        //console.log(`Computer played ${computerMove}.`);
        if (playerMove.toLowerCase() == 'rock') {
            resultDiv.innerText=`Computer played ${computerMove}. You lose!`;
            loseCount +=1;
            countDiv.innerText=`Wincount: ${winCount}. Losecount: ${loseCount}. Tiecount: ${tieCount}.`;
        }
        else if(playerMove.toLowerCase() == 'scissors') {
            resultDiv.innerText=`Computer played ${computerMove}. You win!`;
            winCount+= 1;
            countDiv.innerText=`Wincount: ${winCount}. Losecount: ${loseCount}. Tiecount: ${tieCount}.`;
        }
    }
    else if (computerMove == 'Scissors') {
        //console.log(`Computer played ${computerMove}.`);
        if (playerMove.toLowerCase() == 'rock') {
            resultDiv.innerText=`Computer played ${computerMove}.You win!`;
            winCount+= 1;
            countDiv.innerText=`Wincount: ${winCount}. Losecount: ${loseCount}. Tiecount: ${tieCount}.`;
        }
        else if(playerMove.toLowerCase() == 'paper') {
            resultDiv.innerText=`Computer played ${computerMove}. You lose!`;
            loseCount+= 1;
            countDiv.innerText=`Wincount: ${winCount}. Losecount: ${loseCount}. Tiecount: ${tieCount}.`;
        }
    }
    else {
        resultDiv.innerText=`Computer played ${computerMove}. End error round function`;
    }
}

function playerPlay() { //this function allows for the buttons to be listened to
    rockButton.addEventListener('click', () => {checkRound('rock')}); //add a function that starts the round in the addeventlistener
    paperButton.addEventListener('click', () => {checkRound('paper')});
    scissorsButton.addEventListener('click', () => {checkRound('scissors')});
}

playerPlay(); //starts addeventlistener
/*ENDCOMMENTS: Okay this thing is really ducktaped together 
in order to make it look like it works, but it does what specs request.
Only problem is that you need to click an extra time to get */