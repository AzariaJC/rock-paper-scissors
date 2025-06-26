const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

function getComputerChoice() {
  let num = parseInt(Math.floor(Math.random() * 90));
  if (num >= 0 && num < 31) {
    return "rock";
  } else if (num >= 31 && num < 61) {
    return "paper";
  } else {
    return "scissors";
  }
}

/*function getHumanChoice() {
   let userInput = prompt("Rock, paper, or scissors?")
    let newUserInput = userInput.toLowerCase()
    console.log(newUserInput);
    return newUserInput;
   }     THIS IS FOR THE OLD VERSION W/O A UI*/

rockButton.addEventListener("click", () => {
  humanChoice = "rock";
  computerChoice = getComputerChouce();
  evalChoices(humanChoice, computerChoice); //THIS IS FOR THE NEW VERSION WITH THE UI
}); //this is evalChoices bc that makes sense. We don't need playround to act a 'filter' here anymore.

let humanScore = 0;
let computerScore = 0;

function evalChoices(humanChoice, computerChoice) {
  if (humanChoice == "rock" && computerChoice == "paper") {
    computerScore++;
    console.log("You lose! Rock does not beat paper.");
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    humanScore++;
    console.log("You win! Paper beats rock!");
  } else if (humanChoice == "rock" && computerChoice == "scissors") {
    humanScore++;
    console.log("You win! Rock beats scissors!");
  } else if (humanChoice == "scissors" && computerChoice == "rock") {
    computerScore++;
    console.log("You lose! Scissors does not beat rock.");
  } else if (humanChoice == "paper" && computerChoice == "scissors") {
    computerScore++;
    console.log("You lose! Paper does not beat scissor. ");
  } else if (humanChoice == "scissors" && computerChoice == "paper") {
    humanScore++;
    console.log("You win! Scissors beats paper!");
  } else {
    console.log("DRAW");
  }
}
/*function playRound() { //I don't think I need this anymore, I think evalChoices should be suffice
  let humanSelection = getHumanChoice();
  let computerSelection = getComputerChoice();
  evalChoices(humanSelection, computerSelection);
}*///need to change this function, getHumanChoice() doesn't exist anymore w/UI

function playGame() { //this is almost certainly going to have to be reworked. This function needs to be triggered when you click a button.
  evalChoices(humanChoice, computerChoice);
  if (humanScore > computerScore) {
    console.log("You won!");
  } else {
    console.log("You lost.");
  }
}

playGame();
