'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No number😥';

    //when player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉Correct Number!';
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.background = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //when guess is to high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'You have lost the game👏!';
      document.querySelector('.score').textContent = 0;
    }

    // when guess is to low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'You have lost the game👏!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

// Codding challenge #1

/* 

Implement a game rest functionality, so that the player can make a new guess! Here is how:

1.Select the element with the 'again' class and attach a click event handler 

2.In the handler function, restore initial valuers of the score and number variables

3. Restore the initial conditions of the message, number, score and guess input field

number and guess input

4. Also restore the original background color (#222)
and number width (15rem)

*/

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start guessing...';

  document.querySelector('.score').textContent = score;

  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.background =
    'linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 35%, rgba(0, 212, 255, 1) 100%)';
  document.querySelector('.number').style.width = '15rem';
});
