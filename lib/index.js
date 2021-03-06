const Game = require('./Game');
const canvas = document.querySelector('#game');
const ctx = canvas.getContext('2d');
const game = new Game(ctx);
const playBtn = document.querySelector('.game__btn--wide');
const difficulty1Btn = document.querySelector('#difficulty-1');
const difficulty2Btn = document.querySelector('#difficulty-2');
const difficulty3Btn = document.querySelector('#difficulty-3');
const gameSpeed = [50, 100, 150];

// Add key press event handler
document.addEventListener('keydown', handleKeyPress);
playBtn.addEventListener('click', () => 
  requestAnimationFrame(gameLoop));

difficulty1Btn.addEventListener('click', () => {
  timeOut(gameSpeed[2]);
})

difficulty2Btn.addEventListener('click', () => {
  timeOut(gameSpeed[1]);
})

difficulty3Btn.addEventListener('click', () => {
  timeOut(gameSpeed[0]);
})
      
function handleKeyPress(e) {
  game.handleKeyPress(e);
}

// Add prevent scrolling event handler
window.addEventListener("keydown", function(e) {
    if([37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);

// Start animation loop
function gameLoop () {
  if (game.isOver()) {
    return false;
  } else {
    // clear previous frame
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // draw this frame
    game.animate();
  }
  timeOut();
}

const timeOut = (speed = 150) => {
  if (!game.paused) {
    setTimeout(gameLoop, speed);
  } else {
    setTimeout(timeOut, speed);
  }
}