'use strict';
let score0Element = document.getElementById('score--0');
let score1Element = document.getElementById('score--1');
let rollDiceButton = document.querySelector('.btn--roll');
let resetGameButton = document.querySelector('.btn--new');
let holdButton = document.querySelector('.btn--hold');
let diceElement = document.querySelector('.dice');
let currentScore00 = document.getElementById('current--0');
let currentScore01 = document.getElementById('current--1');
let playerPanel1 = document.querySelector('.player--0');
let playerPanel2 = document.querySelector('.player--1');
let currentScore = 0;
let activePlayer = 0;
score0Element.textContent = 0;
score1Element.textContent = 0;
diceElement.style.display = 'none';
let playing = true;

function changePlayer() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  playerPanel1.classList.toggle('player--active');
  playerPanel2.classList.toggle('player--active');
}

function removeDice() {
  diceElement.style.display = 'none';
}
let scores = [0, 0];
//User rollls dice
rollDiceButton.addEventListener('click', () => {
  if (playing) {
    let randomDiceNumber = Math.trunc(Math.random() * 6) + 1;
    diceElement.style.display = 'block';
    diceElement.src = `dice-${randomDiceNumber}.png`;
    if (randomDiceNumber === 1) {
      //switch player
      changePlayer();
    } else {
      currentScore += randomDiceNumber;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    }
  }
});

holdButton.addEventListener('click', () => {
  if (playing) {
    scores[activePlayer] = scores[activePlayer] + currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 20) {
      //winner
      removeDice();
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      playing = false;
    } else {
      changePlayer();
    }
  }
});

let reset = function () {
  scores = [0, 0];
  removeDice();
  score0Element.textContent = 0;
  score1Element.textContent = 0;
  currentScore = 0;
  currentScore00.textContent = 0;
  currentScore01.textContent = 0;
  activePlayer = 0;
  playerPanel1.classList.remove('player--winner');
  playerPanel2.classList.remove('player--winner');
  playerPanel1.classList.add('player--active');
  playerPanel2.classList.remove('player--active');
  playing = true;
};
resetGameButton.addEventListener('click', reset);
