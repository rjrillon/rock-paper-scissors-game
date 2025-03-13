console.log("JS LOADED...");

// Overview:
// Give user prompt to choose rock, paper, or scissors.
// Make it round based.
// Wait for user input before randomizing computer choice.
// Display result
// Repeat with updated score and round.

// Psuedocode:
// Write function to get computer choice
// Write function to get user choice
// Declare players score variables
// Write function to play rounds

let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
  let random = Math.floor(Math.random() * 3);

  switch (random) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
    default:
      console.log("ERROR");
      break;
  }
}

function getHumanChoice() {
  let choice = prompt("Rock, paper, or scissors?", "");
  return choice;
}

function playRound(humanChoice, computerChoice) {
  // Play a single round
  // Increment the round winner's score
  // Log a winner announcement
  let userChoice = humanChoice.toLowerCase();

  if (userChoice === computerChoice) {
    console.log("You tie! " + userChoice + " is equal to " + computerChoice + "!");
    playRound(getHumanChoice(), getComputerChoice());
  } else if (userChoice === "rock" && computerChoice === "scissors") {
    console.log("You win! " + userChoice + " beats " + computerChoice + "!");
    humanScore++;
  } else if (userChoice === "paper" && computerChoice === "scissors") {
    console.log("You win! " + userChoice + " beats " + computerChoice + "!");
    humanScore++;
  } else if (userChoice === "scissors" && computerChoice === "paper") {
    console.log("You win! " + userChoice + " beats " + computerChoice + "!");
    humanScore++;
  } else {
    console.log("You lose! " + userChoice + " doesn't beat " + computerChoice);
    computerScore++;
  }
}

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

playRound(humanChoice, computerChoice);
console.log("Score: \n You: " + humanScore + " Computer: " + computerScore);
console.log("quitting..");
//console.log(getComputerChoice());
//console.log(getHumanChoice());
