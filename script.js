'use strict';
let guessNumber = Math.round(Math.random() * 21);
let score = 20;
let highScore = 0;
// const rand=function(guessNumber)
document.querySelector('.check').addEventListener('click', function () {
  let inputGuess = Number(document.querySelector('.guess').value);
  if (!inputGuess) {
    document.querySelector('.message').textContent = `⛔ no number`;
  } else if (guessNumber === inputGuess) {
    document.querySelector('.message').textContent = `🎉🥳🥳 you Won`;
    document.querySelector('body').style.backgroundColor = `#60b347`;
    document.querySelector('.number').style.width = `30rem`;
    document.querySelector('.number').textContent = guessNumber;
    if (score > highScore) {
      document.querySelector('.highscore').textContent = `${score}`;
    }
  } else if (guessNumber < inputGuess) {
    if (score > 0) {
      document.querySelector('.message').textContent = `⬆ too high`;
      score--;
      document.querySelector('.score').textContent = `${score}`;
    } else if (score == 0) {
      document.querySelector('.message').textContent = `you lost the game`;
      document.querySelector('.score').textContent = `0`;
    }
  } else if (guessNumber > inputGuess) {
    if (score > 0) {
      document.querySelector('.message').textContent = `⬇ too low`;
      score--;
      document.querySelector('.score').textContent = `${score}`;
    } else if (score == 0) {
      document.querySelector('.message').textContent = `you lost the game`;
      document.querySelector('.score').textContent = `0`;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  guessNumber = Math.round(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = ` #222`;
  document.querySelector('.number').style.width = `15rem`;
  document.querySelector('.number').textContent = `?`;
  document.querySelector('.score').textContent = `20`;
  document.querySelector('.message').textContent = `Start guessing...`;

  highScore = score;
  score = 20;
});
