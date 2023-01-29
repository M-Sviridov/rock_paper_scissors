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
    if (playerSelection == computerSelection) {
        return "It's a Draw!"
    } else if (playerSelection == "rock") {
        if (computerSelection == "scissors") {
            return "You Win! Rock beats Scissors."
        } else {
            return  "You Lose! Paper beats Rock."
        }
    } else if (playerSelection == "scissors") {
        if (computerSelection == "paper") {
            return "You Win! Scissors beats Paper."
        } else {
            return "You Lose! Rock beats Scissors."
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            return "You Win! Paper beats Rock."
        } else {
            return "You Lose! Scissors beats Paper."
        }
    }
}