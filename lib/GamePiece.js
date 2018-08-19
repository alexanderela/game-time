module.exports = class GamePiece {
  constructor(x, y, height, width, color, dxv = 1, dyv = 1,
    borderColor = 'black') {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.color = color;
    this.dx = 1;
    this.dy = 0;
    this.dxv = dxv;
    this.dyv = dyv;
    this.borderColor = borderColor;
    this.snakeBody = [];
  }

  isCollidingWith(object) {
    return (
      this.x < object.x + object.width && 
      this.x + this.width > object.x &&
      this.y < object.y + object.height &&
      this.y + this.height > object.y
    );
  }

  isCollidingWithWall(canvasWidth, canvasHeight) {
    return (
      this.x < 0 ||
      this.x + this.width > canvasWidth ||
      this.y < 0 || 
      this.y + this.height > canvasHeight
    );
  }

  draw(ctx) {
    const { x, y, height, width, color, borderColor } = this;

    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
    ctx.strokeStyle = borderColor;
    ctx.strokeRect(x, y, width, height);
  }

  move() {
    this.x += this.dx * this.dxv;
    this.y += this.dy * this.dyv;
  }

  changeDirection(direction) {
    if (direction.dx === 1 && this.dx == 1) {
      this.dx = this.dx;
    } else if (this.dx === 1 && direction.dx === -1) {
      this.dx = this.dx;
    } else if (direction.dx === -1 && this.dx === -1) {
      this.dx = this.dx;
    } else if (this.dx === -1 && direction.dx === 1) {
      this.dx = this.dx;
    } else {
      this.dx = direction.dx;
    }

    if (direction.dy === 1 && this.dy == 1) {
      this.dy = this.dy;
    } else if (this.dy === 1 && direction.dy === -1) {
      this.dy = this.dy;
    } else if (direction.dy === -1 && this.dy === -1) {
      this.dy = this.dy;
    } else if (this.dy === -1 && direction.dy === 1) {
      this.dy = this.dy;
    } else {
      this.dy = direction.dy;
    }
  }
};
