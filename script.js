'use strict';
const randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.number').textContent = randomNumber;
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
  } else if (guess === randomNumber) {
    document.querySelector('.message').textContent = 'Correct Number! 🎉';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '20vw';
  } else if (guess > randomNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high! 📈';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game! 🥲';
      document.querySelector('.score').textContent = 0;
    }
  } else {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low! 📉';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game 🥲';
      document.querySelector('.score').textContent = 0;
    }
  }
});
