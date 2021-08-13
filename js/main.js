function computerPlay() {
  const randOption = ['Rock', 'Paper', 'Scissors']

  return randOption[Math.floor(Math.random() * randOption.length)]
}

function playRockPaperScissors(playerSelection, computerSelection) {
  if ((playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'paper') ||
    (playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'scissors') ||
    (playerSelection.toLowerCase() === 'scissors' && computerSelection.toLowerCase() === 'rock')) {
    // return `You Lose! ${computerSelection} beats ${playerSelection}`
    return "Computer"
  }
  else if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
    return "TIE"
  } else {
    // return `You Win! ${playerSelection} beats ${computerSelection}`
    return "Player"
  }
}

// console.log(playRockPaperScissors('rock', computerPlay()))

function game(numberOfGames) {
  let computerWins = 0
  let playerWins = 0

  for (let i = 0; i < numberOfGames; i++) {
    const getInput = prompt("Rock, Paper, or Scissors?: ").toLowerCase()

    let outcome = playRockPaperScissors(getInput, computerPlay())

    if (outcome === 'Player') {
      playerWins++
    }

    if (outcome === 'Computer') {
      computerWins++
    }

    console.log(outcome)
  }

  const winner = () => {
    if (computerWins > playerWins) {
      return "Computer Wins!!!"
    } else if (playerWins > computerWins ) {
      return "Player Wins!!!"
    } else {
      return "It is a Tie"
    }
  }

  console.log(winner())
}
