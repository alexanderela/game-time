module.exports = class GamePiece {
  constructor(x, y, height, width, color, dxv = 1, dyv = 1) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.color = color;
    this.dx = 1;
    this.dy = 0;
    this.dxv = dxv;
    this.dyv = dyv;
    // this.borderColor = borderColor;
    // Add snake body
    this.snakeBody = [];
    this.snakeBody.push([x, y]);
    this.snakeBody.push([40, y]);
    this.snakeBody.push([30, y]);
  }

  isCollidingWithSelf() {
    const snakeHead = this.snakeBody[0] // [snakeHead1, snakeHead2]
    snakeHead[1]// snakeHead2
    for (let i = 1; i < this.snakeBody.length; i++) {
      if (this.snakeBody[0][0] === this.snakeBody[i][0] && this.snakeBody[0][1] === this.snakeBody[i][1]) {
        return true;
      }
    }
  }

  isCollidingWith(object) {
    let snakeArray = this.snakeBody[0];
    return (
      snakeArray[0] < object.x + object.width && 
      snakeArray[0] + this.width > object.x &&
      snakeArray[1] < object.y + object.height &&
      snakeArray[1] + this.height > object.y
    );
  }

  isCollidingWithWall(canvasWidth, canvasHeight) {
    let snakeArray = this.snakeBody[0];
    return (
      snakeArray[0] === 0 ||
      snakeArray[0] + this.width > canvasWidth - 10 ||
      snakeArray[1] === 0 || 
      snakeArray[1] + this.height > canvasHeight - 10
    )
  }

  draw(ctx, square) {
    const { height, width, color } = this;
    // Add variable 
    let x = square[0];
    let y = square[1];
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
    // ctx.strokeStyle = borderColor;
    // ctx.strokeRect(x, y, width, height);
  }

  drawSnake(ctx) {
    this.snakeBody.forEach((square) => {
      this.draw(ctx, square);
    })
  }


  moveSnake(direction) {
    let snakeHead = this.snakeBody[0].slice();

    if (direction === 'right') {
      // console.log(direction)
      snakeHead[0] = snakeHead[0] + 10; 
      this.snakeGenerate(snakeHead);

    } if (direction === 'left') {
      // console.log(direction)
      snakeHead[0] = snakeHead[0] - 10;      
      this.snakeGenerate(snakeHead); 

    } if (direction === 'down') {
      // console.log(direction)
      snakeHead[1] = snakeHead[1] + 10;   
      this.snakeGenerate(snakeHead);

    } if (direction === 'up') {
      // console.log(direction)
      snakeHead[1] = snakeHead[1] - 10; 
      this.snakeGenerate(snakeHead);
    } 
  }

  snakeGenerate(snakeHead) {
    this.snakeBody.unshift(snakeHead);
    this.snakeBody.pop();
  }

  changeDirection(direction) {
    this.dx = direction.dx;
    this.dy = direction.dy;
  }

}