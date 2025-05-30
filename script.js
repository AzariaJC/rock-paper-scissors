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


function getHumanChoice() {
    let userInput = prompt("Rock, paper, or scissors?")
    let newUserInput = userInput.toLowerCase()
    console.log(newUserInput);
    return newUserInput;
    
}


let humanScore = 0;
let computerScore = 0;

function evalChoices(humanChoice, computerChoice) { 
     if (humanChoice == "rock" && computerChoice == "paper") {
        computerScore++
        console.log("You lose! Rock does not beat paper.")
     } else if (humanChoice == "paper" && computerChoice == "rock") {
        humanScore++
        console.log("You win! Paper beats rock!");
     } else if (humanChoice == "rock" && computerChoice == "scissors") {
        humanScore++
        console.log("You win! Rock beats scissors!");
     } else if (humanChoice == "scissors" && computerChoice == "rock") {
        computerScore++
        console.log("You lose! Scissors does not beat rock.");
     } else if (humanChoice == "paper" && computerChoice == "scissors") {
        computerScore++
        console.log("You lose! Paper does not beat scissor. ");
     } else if (humanChoice == "scissors" && computerChoice == "paper") {
        humanScore++
        console.log("You win! Scissors beats paper!");
     } else {
        console.log("DRAW")
     }
}
function playRound() {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    evalChoices(humanSelection, computerSelection);
}

 function playGame () {
   playRound();
   playRound();
   playRound();
   playRound();
   playRound();
   if (humanScore > computerScore) {
    console.log("You won!");
   } else {
    console.log("You lost.")
   }
}

playGame();


 
 