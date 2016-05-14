////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';
///////////////////////////////////////////////////
/*    Computer & Player Inputs/Moves Generated   */
//////////////////////////////////////////////////

function getInput() {
    return prompt("Please choose either 'rock', 'paper', or 'scissors'.");
}

function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        randomNumber = "rock";
    } else if (randomNumber < 0.66) {
        randomNumber = "paper";
    } else {
        randomNumber = "scissors";
    }
}


/////////////////////////////////////////////////////////////
/*  Computer and Player Moves Assigned r || s || p values  */
/////////////////////////////////////////////////////////////


function getPlayerMove(move) {
    if (move === "rock" || move === "paper" || move === "scissors") {
        return move;
    } else if (move === false) {
        return getInput();
    }
}

function getComputerMove(move) {
     if (move === "rock" || move === "paper" || move === "scissors") {
        return move;
    } else if (move === false) {
    	return randomPlay();
    }
}


//////////////////////////////////////////////////////////////
/*          Values compared and winners determined          */
//////////////////////////////////////////////////////////////

var getWinner = function (playerMove,computerMove) {
    var winner;
    if (playerMove === computerMove) {
        winner = "tie";
    } else if (playerMove === "rock") {
        if (computerMove === "paper") {
        	winner = "computer";
    	} else {
    		winner = "player";
    	}
    } else if (playerMove === "paper") {
    	if (computerMove === "rock") {
    		winner = "player";
    	} else {
    		winner = "computer";
    	}
    } else if (playerMove === "scissors") {
    	if (computerMove === "rock") {
    		winner = "computer";
    	} else {
    		winner = "player";
    	}
    } else {
    	console.log("error");
    }
   return winner; 
}

getWinner(getPlayerMove(getInput()), getComputerMove(randomPlay()));

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    return [playerWins, computerWins];
}
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five time
    /// This function should continue to play Rock Paper Scissors until either the
  // player or the computer has won five times.
  // After each 'round', display some text in the console indicating who played
  // what, who won, and what the current scoreboard looks like.
  // For example,
  //  console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
  //  console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');

