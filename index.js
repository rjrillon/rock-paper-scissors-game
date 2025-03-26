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

function getHumanChoice() {
  let choice;
  // Loop until user enters a valid choice
  while (true) {
    choice = prompt("Rock, paper, or scissors?", "").toLowerCase();
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
      break;
    } else {
      console.log("Invalid choice! Please choose rock, paper, or scissors.");
    }
  }
  return choice;
}

let computerScore = 0;
let humanScore = 0;

function playRound(humanChoice, computerChoice) {
  // Play round
  if (humanChoice === computerChoice) {
    console.log("It's a tie! Both chose " + humanChoice);
    // No points awarded for tie so return to avoid incrementing scores
    return;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log("You win! " + humanChoice + " beats " + computerChoice + "!");
    humanScore++;
  } else {
    console.log("You lose! " + humanChoice + " doesn't beat " + computerChoice);
    computerScore++;
  }
  console.log(`Score: You - ${humanScore} Computer - ${computerScore}`);
}

// Play rounds until one player reaches 3 points
// while (humanScore < 3 && computerScore < 3) {
//   playRound(getHumanChoice(), getComputerChoice());
//   console.log("Score: \n You: " + humanScore + " Computer: " + computerScore);
// }

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

  // Game end. Inform user of the final score and who won.
  // if (humanScore > computerScore) {
  //   console.log(
  //     "Game over! You win! \n Final score: \n You: " + humanScore + " Computer: " + computerScore
  //   );
  // } else {
  //   console.log(
  //     "Game over! You lose! \n Final score: \n You: " + humanScore + " Computer: " + computerScore
  //   );
  // }
}

// Start game
playGame();

// Quit after game loop ends
console.log("quitting..");
