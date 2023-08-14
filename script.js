let choice = prompt(
  "Would you like to play the normal edition of the Guessing Game or the Bonus edition?"
);

while (choice !== "normal" && choice !== "bonus") {
  choice = prompt("You have to enter `normal` or `bonus`");
}

if (choice === "normal") {
  normalMode();
} else if (choice === "bonus") {
  bonusMode();
}

function normalMode() {
  const randomNumBetween1and10 = Math.floor(Math.random() * 10) + 1;
  let numOfGuesses = 0;
  let guess = Number(prompt("Please guess a number between 1 and 10"));

  while (numOfGuesses === 0 || guess !== randomNumBetween1and10) {
    numOfGuesses++;
    if (guess < randomNumBetween1and10) {
      guess = Number(prompt("Your number was too low. Try again."));
    } else if (guess > randomNumBetween1and10) {
      guess = Number(prompt("Your number was too high. Try again."));
    }
  }

  numOfGuesses++;
  alert(
    `You guessed the correct number: ${randomNumBetween1and10} with ${numOfGuesses} attempts`
  );
}

function bonusMode() {
  const min = Number(prompt("Please enter a minimum number"));
  const max = Number(prompt("Please enter a maximum number"));
  const randomNumBetweenMinAndMax =
    Math.floor(Math.random() * (max - min + 1)) + min;
  const guesses = [];
  let numOfGuesses = 0;
  let numOfAttempts = 6;
  let guess = Number(prompt(`Please guess a number between ${min} and ${max}`));

  while (numOfAttempts > 1 && guess !== randomNumBetweenMinAndMax) {
    numOfGuesses++;
    numOfAttempts--;
    guesses.push(guess);

    if (guess < randomNumBetweenMinAndMax) {
      guess = Number(
        prompt(
          `You have guessed the following numbers: ${guesses.join(
            ", "
          )}. You have ${numOfAttempts} attempts remaining to guess a number between ${min} and ${max}. Your number was too low. Try again`
        )
      );
    } else if (guess > randomNumBetweenMinAndMax) {
      guess = Number(
        prompt(
          `You have guessed the following numbers: ${guesses.join(
            ", "
          )}. You have ${numOfAttempts} attempts remaining to guess a number between ${min} and ${max}. Your number was too high. Try again`
        )
      );
    }
  }

  if (guess === randomNumBetweenMinAndMax) {
    numOfGuesses++;
    alert(
      `You guessed the correct number: ${randomNumBetweenMinAndMax} with ${numOfGuesses} attempts.`
    );
  } else {
    alert("You have lost because you guessed more than 5 times");
  }
}
