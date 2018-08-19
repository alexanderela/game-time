const GamePiece = require('./GamePiece');

module.exports = class Fruit extends GamePiece {
  constructor(x, y, height, width, color, dxv, dyv, borderColor) {
    super(x, y, height, width, color, dxv, dyv, borderColor);
    this.x = Math.random() * 500;
    this.y = Math.random() * 500;
    this.dxv = 0;
    this.dyv = 0;
  }
  draw(ctx) {
    const {x, y, height, width, color, borderColor } = this;
    
    super.draw(ctx);
    ctx.fillstyle = color;
    ctx.fillRect(x, y, width, height);
    ctx.strokeStyle = borderColor;
    ctx.strokeRect(x, y, width, height);
  }
};

