function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * choices.length);

    return choices[randomIndex]
}

function getPlayerChoice() {
    let playerChoice = prompt("Enter your move choice:").toLowerCase();

    return checkPlayerChoice(playerChoice) ? playerChoice : getPlayerChoice();
}

function checkPlayerChoice(playerChoice) {
    if (playerChoice == "rock" ||
        playerChoice == "paper" || 
        playerChoice == "scissors") {
        return true
    } else {
        return false
    }
}

function playRound(playerSelection, computerSelection) {
    // return 0 means draw
    // return 1 means player wins
    // return 2 means computer wins

    if (playerSelection == computerSelection) {
        console.log("It's a Draw!");
        return 0;
    } else if (playerSelection == "rock") {
        if (computerSelection == "scissors") {
            console.log("You Win! Rock beats Scissors.");
            return 1;
        } else {
            console.log("You Lose! Paper beats Rock.");
            return 2;
        }
    } else if (playerSelection == "scissors") {
        if (computerSelection == "paper") {
            console.log("You Win! Scissors beats Paper.");
            return 1;
        } else {
            console.log("You Lose! Rock beats Scissors.");
            return 2;
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            console.log("You Win! Paper beats Rock.");
            return 1;
        } else {
            console.log("You Lose! Scissors beats Paper.");
            return 2;
        }
    }
}

function game() {
    let playerPoints = 0;
    let computerPoints = 0;
    let roundWinner;

    console.log(`Score is ${playerPoints}-${computerPoints}`);

    for (let i = 0; i < 5; i++) {
        roundWinner = playRound(getPlayerChoice(), getComputerChoice());

        if (roundWinner == 1) {
            playerPoints++;
        } else if (roundWinner == 2) {
            computerPoints++;
        }
        console.log(`Score is ${playerPoints}-${computerPoints}`);
    }

    return playerPoints > computerPoints ? "Player wins." : "Computer wins.";
}