console.log("JS LOADED...");

// Give user prompt to choose rock, paper, or scissors.
// Make it round based.
// Wait for user input before randomizing computer choice.
// Display result
// Repeat with updated score and round.

function getComputerChoice() {
  let random = Math.floor(Math.random() * 3);

  switch (random) {
    case 0:
      console.log("Rock!");
      break;
    case 1:
      console.log("Paper!");
      break;
    case 2:
      console.log("Scissors!");
      break;
    default:
      console.log("ERROR");
      break;
  }
}

console.log(getComputerChoice());
