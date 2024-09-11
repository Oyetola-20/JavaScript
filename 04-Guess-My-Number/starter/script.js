'use strict';
let randomNumber = Math.trunc(Math.random() * 20) + 1;
let i = 19;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = 'Input a number';
  } else if (guess === randomNumber) {
    document.querySelector('.message').textContent = 'Correct number 🎉🎉';
    document.querySelector('body').style.backgroundColor = 'Green';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = randomNumber;
    document.querySelector('.highscore').textContent = i;
  } else if (guess !== randomNumber) {
    document.querySelector('.score').textContent = i--;
    if (guess > randomNumber) {
      document.querySelector('.message').textContent = 'Too high 👎';
    } else if (guess < randomNumber) {
      document.querySelector('.message').textContent = 'Too Low 👎';
    }
  }
});

