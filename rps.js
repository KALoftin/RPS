let playerWins = 0;
let cpuWins = 0;
let textDiv = document.createElement('div');
let scoreDiv = document.createElement('div');

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
      scoreDiv.innerText =
        'Current score: Your wins ' + playerWins + ', CPU wins ' + cpuWins;
      document.getElementById('myScoreDiv').appendChild(scoreDiv);
      checkWinner();
      return 'You lose! Paper beats rock.';
    }
    if (computerSelection === 'Scissors') {
      playerWins++;
      scoreDiv.innerText =
        'Current score: Your wins ' + playerWins + ', CPU wins ' + cpuWins;
      document.getElementById('myScoreDiv').appendChild(scoreDiv);
      checkWinner();
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
      scoreDiv.innerText =
        'Current score: Your wins ' + playerWins + ', CPU wins ' + cpuWins;
      document.getElementById('myScoreDiv').appendChild(scoreDiv);
      checkWinner();
      return 'You lose! Scissors beats paper.';
    }
    if (computerSelection === 'Rock') {
      playerWins++;
      scoreDiv.innerText =
        'Current score: Your wins ' + playerWins + ', CPU wins ' + cpuWins;
      document.getElementById('myScoreDiv').appendChild(scoreDiv);
      checkWinner();
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
      scoreDiv.innerText =
        'Current score: Your wins ' + playerWins + ', CPU wins ' + cpuWins;
      document.getElementById('myScoreDiv').appendChild(scoreDiv);
      checkWinner();
      return 'You lose! Rock beats scissors.';
    }
    if (computerSelection === 'Paper') {
      playerWins++;
      scoreDiv.innerText =
        'Current score: Your wins ' + playerWins + ', CPU wins ' + cpuWins;
      document.getElementById('myScoreDiv').appendChild(scoreDiv);
      checkWinner();
      return 'You won! Scissors beats paper';
    } else {
      return 'Error: Something went wrong, try again';
    }
  }
}

document.getElementById('rock').addEventListener('click', function () {
  textDiv.innerText = playRound('rock', computerPlay());
});
document.getElementById('paper').addEventListener('click', function () {
  textDiv.innerText = playRound('paper', computerPlay());
});
document.getElementById('scissors').addEventListener('click', function () {
  textDiv.innerText = playRound('scissors', computerPlay());
});

document.getElementById('myTextDiv').appendChild(textDiv);

function checkWinner() {
  if (playerWins === 5 || cpuWins === 5) {
    if (playerWins > cpuWins) {
      scoreDiv.innerText = 'You won best out of 5 round!';
      document.getElementById('myScoreDiv').appendChild(scoreDiv);
    } else if (cpuWins > playerWins) {
      scoreDiv.innerText = 'You lost best out of 5 rounds';
      document.getElementById('myScoreDiv').appendChild(scoreDiv);
    } else {
      console.log(
        'Either you tied, you did not choose properly, or an error occured'
      );
    }
    playerWins = 0;
    cpuWins = 0;
  }
}
