const GamePiece = require('./GamePiece');
const Fruit = require('./Fruit');

module.exports = class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.paused = false;
    this.gameOver = false;

    this.blocks = [
      new GamePiece(50, 50, 10, 10, 'red', 1, 1, 'black'),
      new Fruit(100, 100, 10, 10, 'green', 'green')
    ];
  }

  // draw one frame of our game
  animate() {
    const { canvas } = this.ctx;

    this.blocks.forEach( block => {
      if (block.isCollidingWithWall(canvas.width, canvas.height)) {
        this.endGame();  

      } else {
        block.move();
      }
      if (this.blocks[0].isCollidingWith(this.blocks[1])) {
        this.blocks[1].x = Math.random() * 500;
        this.blocks[1].y = Math.random() * 500;
      }
      
      block.draw(this.ctx);
    });
  }

  endGame() {
    this.gameOver = true;
  }

  isOver() {
    return this.gameOver;
  }

  togglePause() {
    this.paused = !this.paused;
  }

  handleKeyPress(e) {
    console.log(e);
    const direction = {
      dx: 0,
      dy: 0
    };

    if (e.key === 'ArrowRight') {
      console.log(direction.dx)
      direction.dx = 1;

    } else if (e.key === 'ArrowLeft' && direction != -1) {
      direction.dx = -1;

    } else if (e.key === 'ArrowDown') {
      direction.dy = 1;

    } else if (e.key === 'ArrowUp') {
      direction.dy = -1;
    } 

    this.blocks.forEach( block => block.changeDirection(direction) );
  }

};
