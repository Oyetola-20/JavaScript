'use strict';
let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

let displayMessage = function (message) {
  document.querySelector('.message').textContent = message
}

let reset = function () {
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('Input a number');
  } else if (guess === randomNumber) {
    displayMessage('Correct number 👍🎉');
    document.querySelector('body').style.backgroundColor = 'Green';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = randomNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess != randomNumber) {
    if (score > 1) {
      displayMessage(guess > randomNumber ? 'Too high 👎' : 'Too Low 👎');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game 💥');
      document.querySelector('body').style.backgroundColor = 'red';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', reset)

