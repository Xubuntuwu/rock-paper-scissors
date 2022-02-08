let computerMove;
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

function round(computerMove, playerMove) {
    playerMove= prompt("Choose rock, paper, or scissors?");
    computerMove = computerPlay();
    if (playerMove.toLowerCase() != 'rock' && playerMove.toLowerCase() != 'paper' && playerMove.toLowerCase() != 'scissors') {
        console.log(`You chose ${playerMove}. Choose a valid play: rock, paper, or scissors.`);
    }
    else if (computerMove.toLowerCase() == playerMove.toLowerCase()) {
        console.log(`You both played ${computerMove}. It's a tie!`);
    }
    else if (computerMove == 'Rock') {
        //console.log(`Computer played ${computerMove}.`);
        if (playerMove.toLowerCase() == 'paper') {
            console.log(`Computer played ${computerMove}. You win!`);
            return 1;
        }
        else if(playerMove.toLowerCase() == 'scissors') {
            console.log(`Computer played ${computerMove}. You lose!`);
            return -1;
        }
    }
    else if (computerMove == 'Paper') {
        //console.log(`Computer played ${computerMove}.`);
        if (playerMove.toLowerCase() == 'rock') {
            console.log(`Computer played ${computerMove}. You lose!`);
            return -1;
        }
        else if(playerMove.toLowerCase() == 'scissors') {
            console.log(`Computer played ${computerMove}. You win!`);
            return 1;
        }
    }
    else if (computerMove == 'Scissors') {
        //console.log(`Computer played ${computerMove}.`);
        if (playerMove.toLowerCase() == 'rock') {
            console.log(`Computer played ${computerMove}.You win!`);
            return 1;
        }
        else if(playerMove.toLowerCase() == 'paper') {
            console.log(`Computer played ${computerMove}. You lose!`);
            return -1;
        }
    }
    else {
        console.log(`Computer played ${computerMove}. End error round function`);
    }
}

function game() {
    let winCount = 0;
    let loseCount = 0;
    let roundCount;
    for(i=0; i<5; i++) {
        roundCount = round();
        if (roundCount == 1) {
            winCount++;
        }
        else if (roundCount == -1) {
            loseCount++;
        }
    }
    if (winCount>loseCount) {
        console.log(`You win the game! \n You won ${winCount} round(s). \n You lost ${loseCount} round(s). \n You tied ${Math.abs(winCount-loseCount)} round(s).`);
    }
    else if (winCount<loseCount) {
        console.log(`You lose the game! \n You won ${winCount} round(s). \n You lost ${loseCount} round(s). \n You tied ${Math.abs(winCount-loseCount)} round(s).`);
    }
    else if (winCount== loseCount) {
        console.log(`You tied the game! \n You won ${winCount} round(s). \n You lost ${loseCount} round(s). \n You tied ${Math.abs(winCount-loseCount)} round(s).`);
    }
}
game();

//Yay this project was easier than expected!