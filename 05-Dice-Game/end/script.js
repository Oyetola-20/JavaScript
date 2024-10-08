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

let scores, currentScore, activePlayer, playing;
//Initialization
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  score0Element.textContent = 0;
  score1Element.textContent = 0;
  currentScore00.textContent = 0;
  currentScore01.textContent = 0;
  playerPanel1.classList.remove('player--winner');
  playerPanel2.classList.remove('player--winner');
  playerPanel1.classList.add('player--active');
  playerPanel2.classList.remove('player--active');
  diceElement.style.display = 'none';
};
init();
//function
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  playerPanel1.classList.toggle('player--active');
  playerPanel2.classList.toggle('player--active');
};
rollDiceButton.addEventListener('click', function () {
  if (playing) {
    let randomDiceNumber = Math.trunc(Math.random() * 6) + 1;
    diceElement.style.display = 'block';
    diceElement.src = `dice-${randomDiceNumber}.png`;
    if (randomDiceNumber !== 1) {
      currentScore += randomDiceNumber;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //switching active player
      switchPlayer();
    }
  }
});

holdButton.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 20) {
      playing = false;
      diceElement.style.display = 'none';
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});
resetGameButton.addEventListener('click', init);
