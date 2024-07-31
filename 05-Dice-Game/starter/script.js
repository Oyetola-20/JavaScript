'use strict';
const player1Score = document.querySelector('#score--0');
const player2Score = document.getElementById('score--1');
const diceImage = document.querySelector('.dice');
const rollDiceButton = document.querySelector('.btn--roll');
const newGameButton = document.querySelector('.btn--new');
const holdGameButton = document.querySelector('.btn--hold');
const currentScorePlayer1 = document.getElementById('current--0');
const currentScorePlayer2 = document.getElementById('current--1');
const player1Panel = document.querySelector('.player--0');
const player2Panel = document.querySelector('.player--1');

//Resetting player scores to zero
player1Score.textContent = 0;
player2Score.textContent = 0;
diceImage.style.display = 'none';
let totalScore = [0, 0];

let activePlayer = 0;
let currentScore = 0;
let playing = true;
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player1Panel.classList.toggle('player--active');
  player2Panel.classList.toggle('player--active');
};

rollDiceButton.addEventListener('click', function () {
  if (playing) {
    //1)Generate a random dice roll (1-6)
    const randomDiceNumber = Math.trunc(Math.random() * 6) + 1;
    //   console.log(randomDiceNumber);
    //2)Display the dice
    diceImage.style.display = 'block';
    diceImage.src = `dice-${randomDiceNumber}.png`;
    //3)Check for the dice roll
    if (randomDiceNumber !== 1) {
      currentScore += randomDiceNumber;
      // currentScorePlayer1.textContent = currentScore
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      console.log(currentScore);
    } else {
      //SWITCHING THE ACTIVE PLAYER
      switchPlayer();
    }
  }
});

holdGameButton.addEventListener('click', function () {
  if (playing) {
    //1 Add  the current score to the total score
    totalScore[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      totalScore[activePlayer];
    // 2 check if player's score >= 100
    if (totalScore[activePlayer] >= 20) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      diceImage.style.display = 'none';
    }
    //3 switch player
    switchPlayer();
  }
});

newGameButton.addEventListener("click", function(){
  playing = true;
  player1Score.textContent = 0
  player2Score.textContent = 0
  diceImage.style.display = "none"
  currentScorePlayer1.textContent = 0;
  currentScorePlayer2.textContent = 0;
  player1Panel.classList.remove("player--winner")
  player2Panel.classList.remove("player--winner")
  totalScore = [0,0]
  player1Panel.classList.add("player--active")
  player2Panel.classList.remove("player--active")
  currentScore = 0;
  activePlayer = 0
})

//LECTURES
// player1Panel.classList.add("arola")
// player1Panel.classList.remove("player")
