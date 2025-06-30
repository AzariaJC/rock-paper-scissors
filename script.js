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
const result = document.querySelector("#result");
/*function getHumanChoice() {
   let userInput = prompt("Rock, paper, or scissors?")
    let newUserInput = userInput.toLowerCase()
    console.log(newUserInput);
    return newUserInput;
   }     THIS IS FOR THE OLD VERSION W/O A UI*/

rockButton.addEventListener("click", () => {
  humanChoice = "rock";
  computerChoice = getComputerChoice();
  playGame(humanChoice, computerChoice);
  const outcome = resultOfRound(humanChoice, computerChoice);
  const span = document.createElement("span")
  result.appendChild(span);
  span.textContent = outcome;
});

paperButton.addEventListener("click", () => {
  humanChoice = "paper";
  computerChoice = getComputerChoice();
  playGame(humanChoice, computerChoice);
});

scissorsButton.addEventListener("click", () => {
  humanChoice = "scissors";
  computerChoice = getComputerChoice();
  playGame(humanChoice, computerChoice);
});





let humanScore = 0;
let computerScore = 0;

function evalChoices(humanChoice, computerChoice) {
  if (humanChoice == "rock" && computerChoice == "paper") {
    computerScore++;
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    humanScore++;
  } else if (humanChoice == "rock" && computerChoice == "scissors") {
    humanScore++;
  } else if (humanChoice == "scissors" && computerChoice == "rock") {
    computerScore++;
  } else if (humanChoice == "paper" && computerChoice == "scissors") {
    computerScore++;
  } else if (humanChoice == "scissors" && computerChoice == "paper") {
    humanScore++;
  } else {
    console.log("DRAW");
  }
}

function resultOfRound(humanChoice, computerChoice) {
   let humanWin = "You Won";
   let computerWin = "You Lost";
   let draw = "It's a tie"
   if (humanChoice == "rock" && computerChoice == "paper" || 
      humanChoice == "paper" && computerChoice == "scissors" || 
      humanChoice == "scissors" && computerChoice == "rock") {
         return computerWin;
      } else if (humanChoice == computerChoice) {
         return draw;
      }  else {
         return humanWin;
      }
};



/*function playRound() { //I don't think I need this anymore, I think evalChoices should be suffice
  let humanSelection = getHumanChoice();
  let computerSelection = getComputerChoice();
  evalChoices(humanSelection, computerSelection);
}*///need to change this function, getHumanChoice() doesn't exist anymore w/UI

function playGame(humanChoice, computerChoice) { //this is almost certainly going to have to be reworked. This function needs to be triggered when you click a button.
  evalChoices(humanChoice, computerChoice); //changed this to evalChoices instead of playRound
  //need to define humanChoice
  resultOfRound(humanChoice, computerChoice);
  if (humanScore > computerScore) {
    console.log("You won!");
  } else {
    console.log("You lost.");
  }
};

