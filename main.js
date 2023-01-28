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
    if (playerChoice == "rock"
    || playerChoice == "paper"
    || playerChoice == "scissors") {
        return true
    } else {
        return false
    }
}


