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

function playGame() {
  let computerScore = 0;
  let humanScore = 0;

  function playRound(humanChoice, computerChoice) {
    // Convert user input to lowercase
    let userChoice = humanChoice.toLowerCase();

    // Play round
    if (userChoice === computerChoice) {
      console.log("It's a tie! Both chose " + userChoice);
      // No points awarded for tie so return to avoid incrementing scores
      return;
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

  // Play rounds until one player reaches 3 points
  while (humanScore < 3 && computerScore < 3) {
    playRound(getHumanChoice(), getComputerChoice());
    console.log("Score: \n You: " + humanScore + " Computer: " + computerScore);
  }

  // Game end. Inform user of the final score and who won.
  if (humanScore > computerScore) {
    console.log(
      "Game over! You win! \n Final score: \n You: " + humanScore + " Computer: " + computerScore
    );
  } else {
    console.log(
      "Game over! You lose! \n Final score: \n You: " + humanScore + " Computer: " + computerScore
    );
  }
}

playGame();
console.log("quitting..");
//console.log(getComputerChoice());
//console.log(getHumanChoice());
