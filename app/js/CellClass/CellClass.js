class Cell {
  alive;
  positionX;
  positionY;

  constructor(alive, positionX, positionY, willBeALive) {
    this.alive = alive;
    this.positionX = positionX;
    this.positionY = positionY;
    this.willBeALive = willBeALive;
  }
}

export default Cell;
