let playerWins = 0;
let cpuWins = 0;

function computerPlay() {
  const cpuRPS = ['Rock', 'Paper', 'Scissors'];
  let cpuChoice = Math.floor(Math.random() * 3);

  return cpuRPS[cpuChoice];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection.toLowerCase() === 'rock') {
    if (computerSelection === 'Rock') {
      return 'Tie game! You both choose rock.';
    }
    if (computerSelection === 'Paper') {
      cpuWins++;
      return 'You lose! Paper beats rock.';
    }
    if (computerSelection === 'Scissors') {
      playerWins++;
      return 'You won! Rock beats scissors';
    } else {
      return 'Error: Something went wrong, try again';
    }
  }
}

// Write a NEW function called game(). Call the playRound
// function inside of this one to play a 5 round game that
// keeps score and reports a winner or loser at the end.

function game() {
  const playerSelection = 'rock';

  for (let i = 0; i < 5; i++) {
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
  }

  if (playerWins > cpuWins) {
    console.log('You won best out of 5 rounds with: ' + playerWins + ' wins!');
  }
  if (cpuWins > playerWins) {
    console.log(
      'You lost best out of 5 rounds. The CPU had: ' + cpuWins + ' wins!'
    );
  } else {
    console.log('Either you tied or error occured');
  }
}

game();
