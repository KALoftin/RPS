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
      return 'Tie! You both choose rock.';
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

  if (playerSelection.toLowerCase() === 'paper') {
    if (computerSelection === 'Paper') {
      return 'Tie! You both choose paper.';
    }
    if (computerSelection === 'Scissors') {
      cpuWins++;
      return 'You lose! Scissors beats paper.';
    }
    if (computerSelection === 'Rock') {
      playerWins++;
      return 'You won! Paper beats rock';
    } else {
      return 'Error: Something went wrong, try again';
    }
  }

  if (playerSelection.toLowerCase() === 'scissors') {
    if (computerSelection === 'Scissors') {
      return 'Tie! You both choose scissors.';
    }
    if (computerSelection === 'Rock') {
      cpuWins++;
      return 'You lose! Rock beats scissors.';
    }
    if (computerSelection === 'Paper') {
      playerWins++;
      return 'You won! Scissors beats paper';
    } else {
      return 'Error: Something went wrong, try again';
    }
  }
}

function game() {
  const playerSelection = window.prompt(
    'Choose "Rock", "Paper", or "Scissors"?'
  );

  for (let i = 0; i < 5; i++) {
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
  }

  if (playerWins > cpuWins) {
    console.log('You won best out of 5 rounds with: ' + playerWins + ' wins!');
  } else if (cpuWins > playerWins) {
    console.log(
      'You lost best out of 5 rounds. The CPU had: ' + cpuWins + ' wins!'
    );
  } else {
    console.log(
      'Either you tied, you did not choose properly, or an error occured'
    );
  }
}

game();
