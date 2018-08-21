const GamePiece = require('./GamePiece');
module.exports = class Fruit extends GamePiece {
	constructor(x, y, height, width, color, dxv, dyv) {
		super(x, y, height, width);
		this.x = Math.floor(Math.random() * (490 - 10) + 10);
		this.y = Math.floor(Math.random() * (490 - 10) + 10);
		this.dxv = 0;
		this.dyv = 0;
		this.color = color;
		// this.borderColor = borderColor;
	};

	draw(ctx) {
		const {x, y, height, width, color } = this;
		ctx.fillStyle = color;
		ctx.fillRect(x, y, width, height);
		// ctx.strokeStyle = borderColor;
		// ctx.strokeRect(x, y, width, height);

	}
};


  // draw(ctx, square) {
  //   const { height, width, color, borderColor } = this;
  //   // Add variable 
  //   let x = square[0];
  //   let y = square[1];
  //   ctx.fillStyle = color;
  //   ctx.fillRect(x, y, width, height);
  //   ctx.strokeStyle = borderColor;
  //   ctx.strokeRect(x, y, width, height);
  // }
