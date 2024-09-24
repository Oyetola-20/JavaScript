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

//User rollls dice
rollDiceButton.addEventListener('click', () => {
  let randomDiceNumber = Math.trunc(Math.random() * 6) + 1;
  diceElement.style.display = 'block';
  diceElement.src = `dice-${randomDiceNumber}.png`;
  if (randomDiceNumber === 1) {
    //switch player
    activePlayer = activePlayer === 0 ? 1 : 0;
  } else {
    currentScore += randomDiceNumber;
    currentScore00.textContent = currentScore;
  } 

});

