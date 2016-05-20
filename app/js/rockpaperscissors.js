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

var randomPlay = function() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return 'rock';
    } else if (randomNumber < 0.66) {
        return 'paper';
    } else {
        return 'scissors';
    }
};

/////////////////////////////////////////////////////////////////////////////////
/* Player & Comp Moves Established, enter above functions below as parameters  */
/////////////////////////////////////////////////////////////////////////////////

function getPlayerMove(move) {
    if (move === null || move === undefined) {
        return getInput();
    } else {
        return move;
    }
}

function getComputerMove(move) {
    if (move === null || move === undefined) {
        return randomPlay();
    } else {
        return move;
    }
}

/////////////////////////////////////////////////////////////////////////////////
/* Function to establish winner, above functions used as parameters below(all) */
/////////////////////////////////////////////////////////////////////////////////

var getWinner = function (playerMove,computerMove) {
    var winner;

    if ( (playerMove === "rock" && computerMove === "scissors") ||
    (playerMove === "paper" && computerMove === "rock") ||
    (playerMove === "scissors" && computerMove === "paper")) {
        winner = "Player Wins!";

    } else if ( (computerMove === "rock" && playerMove == "scissors") ||
    (computerMove === "paper" && playerMove === "rock") ||
    (computerMove === "scissors" && playerMove === "paper")) {
        winner = "Computer Wins!";

    } else if (playerMove === computerMove) {
        winner = "Draw!";

    } else {
        console.log("Error");
    }

    return winner; 
};

//////////////////////////////////////////////////////////////////////////////////
/* Final function which repeats getWinner until either hits 5, all above functions inside while loop, return statement must be outside while loop             */
/////////////////////////////////////////////////////////////////////////////////

var playToFive = function() {
  console.log('Let\'s play Rock, Paper, Scissors!');
  var playerWins = 0;
  var computerWins = 0;
  
  while (playerWins < 5 && computerWins < 5) {
    var playerMove = getPlayerMove(getInput());
    var computerMove = getComputerMove(randomPlay());
    var winner = getWinner(playerMove, computerMove);

    if (winner === "Player Wins!") {
        playerWins += 1;
        console.log("Player has selected " + playerMove + 
        " and computer has selected " + computerMove + ".");
        console.log("Player wins the round!");
        console.log("P: " + playerWins + "," + " C: " + computerWins);

    } else if (winner === "Computer Wins!") {
        computerWins += 1;
        console.log("Player has selected " + playerMove +
        " and computer has selected " + computerMove + ".");
        console.log("Computer wins the round!");
        console.log("P: " + playerWins + "," + " C: " + computerWins);

    } else {
        console.log("The round ends in a draw!");
        console.log("P: " + playerWins + "," + " C: " + computerWins);
    }
  }

  if (playerWins === 5) {
      console.log("Player wins the game :)");

  } else if (computerWins === 5) {
      console.log("Computer wins the game :(");
  }
  return [playerWins, computerWins];
  
};
  
playToFive(); 
