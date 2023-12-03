let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  console.log("Check Button was clicked");
  //Getting the user value from input field
  const guess = Number(document.querySelector(".guess").value);
  //   console.log("Type of guess is ", typeof guess);
  console.log("value of guess", guess);

  //when user has not entered any number
  if (!guess) {
    console.log("No Number");
    // document.querySelector(".message").textContent = "❌ No Number";
    displayMessage("❌ No Number");
  } else if (guess === secretNumber) {
    console.log("You Won!!!");
    // document.querySelector(".message").textContent = " 🎉 Correct Number";

    displayMessage(" 🎉 Correct Number");

    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "green";

    //update the highscore
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈  Too High" : "  📉 Too Low");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You lost the game");
      document.querySelector(".score").textContent = 0;
    }

    // if (guess > secretNumber) {
    //   if (score > 1) {
    //     //Too High
    //     // document.querySelector(".message").textContent = "📈  Too High";
    //     displayMessage("📈  Too High")
    //     score--;
    //     document.querySelector(".score").textContent = score;
    //   } else {
    //     // document.querySelector(".message").textContent = "You lost the game";
    //     displayMessage("You lost the game")
    //     document.querySelector(".score").textContent = 0;
    //   }
    // } else if (guess < secretNumber) {
    //   if (score > 1) {
    //     // document.querySelector(".message").textContent = "  📉 Too Low";
    //     displayMessage("  📉 Too Low")
    //     score--;
    //     document.querySelector(".score").textContent = score;
    //   } else {
    //     displayMessage("You lost the game")
    //     document.querySelector(".score").textContent = 0;

    //   }
    // }
  }
});
// Play again
// Reset The score
// generate new random number
//Change background
// Replace the number with ?
// Set the input to ""

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  document.querySelector(".score").textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
});
