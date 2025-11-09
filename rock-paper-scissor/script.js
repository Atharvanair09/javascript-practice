const userButtons = document.getElementsByClassName("choice");
const playerChoice = document.getElementById("player-choice");
const computerChoice = document.getElementById("computer-choice");
const result = document.getElementById("result-text");

for (let i = 0; i < userButtons.length; i++) {
  userButtons[i].addEventListener("click", function () {
    let playerMove = this.value;
    playerChoice.innerHTML = playerMove;

    let compMove = playMove();
    provideSolution(playerMove, compMove);
  });
}

function playMove() {
  let choice = Math.floor(Math.random() * 3) + 1;
  let move;

  if (choice === 1) move = "rock";
  else if (choice === 2) move = "paper";
  else move = "scissors";

  computerChoice.innerHTML = move;
  return move; // return the string for comparison
}

function provideSolution(playerMove, computerMove) {
  if (computerMove === playerMove) {
    result.textContent = "It's a draw!";
  } else if (
    (computerMove === "rock" && playerMove === "paper") ||
    (computerMove === "paper" && playerMove === "scissors") ||
    (computerMove === "scissors" && playerMove === "rock")
  ) {
    result.textContent = "You win!";
  } else {
    result.textContent = "You lose!";
  }
}
