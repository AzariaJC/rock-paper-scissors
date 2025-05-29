function getComputerChoice() {
    let num = parseInt(Math.floor(Math.random()*90))
    if (num >= 0 && num < 31) {
         return "rock";
    } else if (num >= 31 && num < 61) {
         return"paper";
    } else {
         return "scissors";
    }
    }
console.log(getComputerChoice());

function getHumanChoice() {
    let userInput = prompt("Rock, paper, or scissors?")
    let newUserInput = userInput.toLowerCase()
    return newUserInput
}
console.log(getHumanChoice());

let humanScore = 0
let computerScore = 0

function playRound (humanChoice, computerChoice) { 
    /*let humanChoice = getHumanChoice()
    let computerChoice = getComputerChoice()*/
     if (humanChoice == "rock" && computerChoice == "paper") {
        computerScore++
        console.log("You lose! Rock does not beat paper.")
     } else if (humanChoice == "paper" && computerChoice == "rock") {
        humanScore++
        console.log("You win! Paper beats rock!")
     } else if (humanChoice == "rock" && computerChoice == "scissor") {
        humanScore++
        console.log("You win! Rock beats scissor!")
     } else if (humanChoice == "scissor" && computerChoice == "rock") {
        computerScore++
        console.log("You lose! Scissor does not beat rock.")
     } else if (humanChoice == "paper" && computerChoice == "scissor") {
        computerScore++
        console.log("You lose! Paper does not beat scissor. ")
     } else if (humanChoice == "scissor" && computerChoice == "paper") {
        humanScore++
        console.log("You win! Scissor beats paper!")
     } else {
        console.log("DRAW")
     }
}

