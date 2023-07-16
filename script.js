// Set array to store the string choices
const choices = ["rock", "paper", "scissors"];
// Randomize computer choice
function getComputerChoice() {
    // Use random function to randomize choices based of array size
    const random = Math.floor(Math.random() * choices.length);
    //console.log(choices[random]);
    return choices[random];
}

// Display results within a single round
function singleRound(playerSelection, computerSelection) {
    // Will make the input strings into case insensitive
    computerSelection = getComputerChoice().toLowerCase();
    playerSelection = playerSelection.toLowerCase();

    if (computerSelection == playerSelection) {
        console.log("Tie game!");
      } else if (
        (computerSelection == "rock" && playerSelection == "scissors") ||
        (computerSelection == "scissors" && playerSelection == "paper") ||
        (computerSelection == "paper" && playerSelection == "rock")) {
            console.log("The computer wins");
        } else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")) {
            console.log("The player wins")
        }
}

// Comp and player choices
let player = prompt("Please choose Rock, Paper, or Scissors");
const computer = getComputerChoice();

// Works but will fix later using for loop
 function game() {
    // If round is less than 5 repeat NOT DONE YET
    for (let i = 1; i <= 6; i++) { 
        Math.random(singleRound(player, computer));
        console.log("Round: " + i)
      }
      
    }; 
//console.log(game());
game();
