class Cell {
  alive;
  positionX;
  positionY;

  constructor(positionX, positionY, willBeALive) {
    this.alive = Math.random() < 0.7;
    this.positionX = positionX;
    this.positionY = positionY;
    this.willBeALive = willBeALive;
  }
}

export default Cell;
