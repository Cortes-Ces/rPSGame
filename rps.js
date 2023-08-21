/*
    NEW CODE
*/
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

rock.addEventListener("click", () => {
    console.log(game("rock"));
  });
  
  paper.addEventListener("click", () => {
    console.log(game("paper"));
  });
  
  scissors.addEventListener("click", () => {
    console.log(game("scissors"));
  });
