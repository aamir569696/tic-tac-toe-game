let gameButton = document.querySelectorAll(".game-btn");

let massageH2 = document.querySelector(".massageh2");
let againButton = document.querySelector(".again-btn");
let resetButton = document.querySelector(".rest-btn");
let massageDiv = document.querySelector(".massage-div");

let currentPlayer = "X";
let gameGrid = ["", "", "", "", "", "", "", "", ""];

//for button click
let gameActive = true;
gameButton.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    if (gameActive && gameGrid[index] === "") {
      btn.innerText = currentPlayer;

      // Color change for X and O
      if (currentPlayer === "X") {
        btn.style.color = "#FF4C29";
      } else {
        btn.style.color = "#6A5ACD";
      }

      gameGrid[index] = currentPlayer;
      winnerCheck();
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  });
});

//check the winner

const winningPositions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

//This part for check the winner
function winnerCheck() {
  let winnerFound = false;

  winningPositions.forEach((position) => {
    const [a, b, c] = position;
    if (
      gameGrid[a] !== "" &&
      gameGrid[a] === gameGrid[b] &&
      gameGrid[a] === gameGrid[c]
    ) {
      winnerFound = true;
      massageDiv.style.display = "block";
      massageH2.innerText = `Player ${gameGrid[a]} win the Game!`;
      gameActive = false;
    }
  });

  //This part for if game Draw
  if (!winnerFound && !gameGrid.includes("")) {
    massageDiv.style.display = "block";
    massageH2.innerText = "Game Draw!";
    gameActive = false;
  }
}

//This part for Reset game and New Game
function resetgame() {
  gameGrid = ["", "", "", "", "", "", "", "", ""];
  gameButton.forEach((btn) => (btn.innerText = ""));
  gameActive = true;
  currentPlayer = "X";
  massageDiv.style.display = "none";
}
resetButton.addEventListener("click", () => {
  resetgame();
});
againButton.addEventListener("click", () => {
  resetgame();
});
