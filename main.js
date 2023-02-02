const div = document.createElement("div");

const roundResults = document.querySelector(".round-results");

const rock = document.querySelector("#rock");
rock.addEventListener("click", () => {
  game("rock", getComputerChoice());
});

const paper = document.querySelector("#paper");
paper.addEventListener("click", () => {
  game("paper", getComputerChoice());
});

const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", () => {
  game("scissors", getComputerChoice());
});

const computerScore = document.querySelector(".computer-score");
const playerScore = document.querySelector(".player-score");

function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let randomIndex = Math.floor(Math.random() * choices.length);

  return choices[randomIndex];
}

function getPlayerChoice() {
  let playerChoice = prompt("Enter your move choice:").toLowerCase();

  return checkPlayerChoice(playerChoice) ? playerChoice : getPlayerChoice();
}

function checkPlayerChoice(playerChoice) {
  if (
    playerChoice == "rock" ||
    playerChoice == "paper" ||
    playerChoice == "scissors"
  ) {
    return true;
  } else {
    return false;
  }
}

function playRound(playerSelection, computerSelection) {
  let roundWinner = "";

  if (checkGameStatus() == 0) {
  }

  if (playerSelection == computerSelection) {
    div.textContent = "It's a Draw!";
    roundResults.appendChild(div);
    roundWinner = "draw";
  } else if (playerSelection == "rock") {
    if (computerSelection == "scissors") {
      div.textContent = "You Win! Rock beats Scissors.";
      roundResults.appendChild(div);
      roundWinner = "player";
    } else {
      div.textContent = "You Lose! Paper beats Rock.";
      roundResults.appendChild(div);
      roundWinner = "computer";
    }
  } else if (playerSelection == "scissors") {
    if (computerSelection == "paper") {
      div.textContent = "You Win! Scissors beats Paper.";
      roundResults.appendChild(div);
      roundWinner = "player";
    } else {
      div.textContent = "You Lose! Rock beats Scissors.";
      roundResults.appendChild(div);
      roundWinner = "computer";
    }
  } else if (playerSelection == "paper") {
    if (computerSelection == "rock") {
      div.textContent = "You Win! Paper beats Rock.";
      roundResults.appendChild(div);
      roundWinner = "player";
    } else {
      div.textContent = "You Lose! Scissors beats Paper.";
      roundResults.appendChild(div);
      roundWinner = "computer";
    }
  }
  updateScore(roundWinner);

  if (checkGameStatus() == 0) {
    div.textContent = "The Player wins.";
    return;
  } else if (checkGameStatus() == 1) {
    div.textContent = "The Computer wins.";
    return;
  }
}

function game(playerSelection, computerSelection) {
  if (checkGameStatus() != 0) {
    playRound(playerSelection, computerSelection);
  }
}

function updateScore(roundWinner) {
  if (roundWinner == "player") {
    playerScore.textContent = Number(`${playerScore.textContent}`) + 1;
  } else if (roundWinner == "computer") {
    computerScore.textContent = Number(`${computerScore.textContent}`) + 1;
  }
}

function checkGameStatus() {
  if (playerScore.textContent == 5) {
    return 0;
  } else if (computerScore.textContent == 5) {
    return 1;
  }
}
