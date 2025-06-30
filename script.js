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

rockButton.addEventListener("click", () => {
  clickCount++;
  humanChoice = "rock";
  computerChoice = getComputerChoice();
  playGame(humanChoice, computerChoice);
  const outcome = resultOfRound(humanChoice, computerChoice);
  const listItem = document.createElement("li");
  result.appendChild(listItem);
  listItem.textContent = outcome;
  displayAfterFiveGames();
});

function displayAfterFiveGames() {
  if (clickCount === 5 && computerScore > humanScore) {
    const gameEndSection = document.querySelector("#gameEndSection");
    const endMessage = document.createElement("p");
    const endComputerScore = document.createElement("li");
    const endHumanScore = document.createElement("li");
    const scoreDisplay = document.createElement("ul");
    const finalDeclare = document.createElement("p");

    endMessage.textContent = "GAME OVER";
    scoreDisplay.textContent = "Scoreboard";
    endComputerScore.textContent = computerScore;
    endHumanScore.textContent = humanScore;
    finalDeclare.textContent = "COMPUTER WINS";

    gameEndSection.appendChild(endMessage);
    gameEndSection.appendChild(scoreDisplay);
    scoreDisplay.appendChild(endComputerScore);
    scoreDisplay.appendChild(endHumanScore);
    scoreDisplay.appendChild(finalDeclare);
  } else if (clickCount === 5 && computerScore < humanScore) {
    const gameEndSection = document.querySelector("#gameEndSection");
    const endMessage = document.createElement("p");
    const endComputerScore = document.createElement("li");
    const endHumanScore = document.createElement("li");
    const scoreDisplay = document.createElement("ul");
    const finalDeclare = document.createElement("p");

    endMessage.textContent = "GAME OVER";
    scoreDisplay.textContent = "Scoreboard";
    endComputerScore.textContent = computerScore;
    endHumanScore.textContent = humanScore;
    finalDeclare.textContent = "YOU WIN";

    gameEndSection.appendChild(endMessage);
    gameEndSection.appendChild(scoreDisplay);
    scoreDisplay.appendChild(endComputerScore);
    scoreDisplay.appendChild(endHumanScore);
    scoreDisplay.appendChild(finalDeclare);
  } else if (clickCount === 5 && computerScore === humanScore) {
    const gameEndSection = document.querySelector("#gameEndSection");
    const endMessage = document.createElement("p");
    const endComputerScore = document.createElement("li");
    const endHumanScore = document.createElement("li");
    const scoreDisplay = document.createElement("ul");
    const finalDeclare = document.createElement("p");

    endMessage.textContent = "GAME OVER";
    scoreDisplay.textContent = "Scoreboard";
    endComputerScore.textContent = computerScore;
    endHumanScore.textContent = humanScore;
    finalDeclare.textContent = "IT'S A TIE";

    gameEndSection.appendChild(endMessage);
    gameEndSection.appendChild(scoreDisplay);
    scoreDisplay.appendChild(endComputerScore);
    scoreDisplay.appendChild(endHumanScore);
    scoreDisplay.appendChild(finalDeclare);
  }
}

paperButton.addEventListener("click", () => {
  clickCount++;
  humanChoice = "paper";
  computerChoice = getComputerChoice();
  playGame(humanChoice, computerChoice);
  const outcome = resultOfRound(humanChoice, computerChoice);
  const listItem = document.createElement("li");
  result.appendChild(listItem);
  listItem.textContent = outcome;
  displayAfterFiveGames();
});

scissorsButton.addEventListener("click", () => {
  clickCount++;
  humanChoice = "scissors";
  computerChoice = getComputerChoice();
  playGame(humanChoice, computerChoice);
  const outcome = resultOfRound(humanChoice, computerChoice);
  const listItem = document.createElement("li");
  result.appendChild(listItem);
  listItem.textContent = outcome;
  displayAfterFiveGames();
});

let humanScore = 0;
let computerScore = 0;
let clickCount = 0;


function resultOfRound(humanChoice, computerChoice) {
  let humanWin = "You Won";
  let computerWin = "You Lost";
  let draw = "It's a tie";
  if (
    (humanChoice == "rock" && computerChoice == "paper") ||
    (humanChoice == "paper" && computerChoice == "scissors") ||
    (humanChoice == "scissors" && computerChoice == "rock")
  ) {
    computerScore++;
    return computerWin;
  } else if (humanChoice == computerChoice) {
    computerScore++;
    humanScore++;
    return draw;
  } else {
    humanScore++;
    return humanWin;
  }
}

function playGame(humanChoice, computerChoice) {
  resultOfRound(humanChoice, computerChoice);
}
