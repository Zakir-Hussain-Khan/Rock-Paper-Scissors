let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userParaScore = document.querySelector("#user-score");
const compParaScore = document.querySelector("#comp-score");
const generateCompChoice = () => {
  const options = ["rock", "paper", "scissor"];
  const randInd = Math.floor(Math.random() * 3);
  return options[randInd];
};
const drawGame = () => {
  msg.innerText = "Game was draw. play again";
};
const showWinner = (userWin) => {
  if (userWin) {
    userScore++;
    userParaScore.innerText = userScore;
    msg.innerText = "You win";
  } else {
    compScore++;
    compParaScore.innerText = compScore;
    msg.innerText = "You lose";
  }
};
const playGame = (userChoice) => {
  console.log("userChoice = ", userChoice);
  // generate comp choice
  const compChoice = generateCompChoice();
  console.log("compChoice = ", compChoice);

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    console.log(userChoice, "was Clicked!");
    playGame(userChoice);
  });
});

