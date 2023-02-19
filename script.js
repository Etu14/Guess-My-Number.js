'use strict';
let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'No Number! ⛔️';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game !🥲';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess !== randomNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > randomNumber ? 'Too high! 📈' : 'Too low! 📉';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game! 🥲';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess === randomNumber) {
    document.querySelector('.number').textContent = randomNumber;
    document.querySelector('.message').textContent = 'Correct Number! 🎉';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '20vw';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').style.width = '12vw';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
