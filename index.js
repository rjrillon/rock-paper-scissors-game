// Overview:
// Give user prompt to choose rock, paper, or scissors.
// Make it round based.
// Wait for user input before randomizing computer choice.
// Display result
// Repeat with updated score and round.

// Psuedocode:
// Write function to get random computer choice
// Write function to get user choice
// - Ensure user enters a valid choice
// Write function to play rounds
// - Include tie/win/lose functionality
// - Increment & display scores accordingly
// Write playGame function
// - Play rounds until one player reaches 3 points
// - Inform user of final score and who won

function getComputerChoice() {
  let random = Math.floor(Math.random() * 3);

  // Randomize computer choice
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

let computerScore = 0;
let humanScore = 0;
const results = document.querySelector(".results-container");

function playRound(humanChoice, computerChoice) {
  // Play round
  if (humanChoice === computerChoice) {
    results.innerHTML += `It's a tie! Both chose ${computerChoice}. <br>`;
    // No points awarded for tie so return to avoid incrementing scores
    return;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    results.innerHTML += `You win! ${humanChoice} beats ${computerChoice}! <br>`;
    humanScore++;
  } else {
    results.innerHTML += `You lose! ${humanChoice} doesn't beat ${computerChoice}! <br>`;
    computerScore++;
  }
  results.innerHTML += `Score: You - ${humanScore} Computer - ${computerScore} <br>`;
}

function playGame() {
  // Event Listeners to buttons
  document.getElementById("rock").addEventListener("click", () => {
    playRound("rock", getComputerChoice());
  });
  document.getElementById("paper").addEventListener("click", () => {
    playRound("paper", getComputerChoice());
  });
  document.getElementById("scissors").addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
  });
}

// Start game
playGame();

// Quit after game loop ends
console.log("quitting..");
