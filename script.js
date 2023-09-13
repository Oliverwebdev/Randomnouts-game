// regeln festlegen
const maxRounds = 10;
let roundsLeft = maxRounds;
let playerScore = 0;
let computerScore = 0;

// element aus html holen
const guessInput = document.getElementById("guessInput");
const guessButton = document.getElementById("guessButton");
const message = document.getElementById("message");
const roundsLeftSpan = document.getElementById("roundsLeft");

// button der ergebnis vergleicht
guessButton.addEventListener("click", playRound);

function playRound() {
  if (roundsLeft === 0) {
    endGame();
    return;
  }

  // aus der schule gelernt
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  const userGuess = parseInt(guessInput.value);

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
    message.textContent = "Please enter a number between 1 and 10.";
    return;
  }

  // vergleich der zahlen

  roundsLeft--;

  if (userGuess === randomNumber) {
    message.textContent = `Congratulations! You guessed the correct number (${randomNumber}).`;
    playerScore++;
  } else {
    message.textContent = `Sorry, Javascript says ${randomNumber}.`;
    computerScore++;
  }

  roundsLeftSpan.textContent = roundsLeft;

  if (roundsLeft === 0) {
    endGame();
  }
}

// spiel ende ausgabe

function endGame() {
  guessInput.disabled = true;
  guessButton.disabled = true;
  message.textContent = `Game over! Your score: ${playerScore}, Computer's score: ${computerScore}.`;

  if (playerScore > computerScore) {
    message.textContent += " You win!";
  } else if (playerScore < computerScore) {
    message.textContent += " Computer wins!";
  } else {
    message.textContent += " It's a tie!";
  }
}