class Cell {
  alive;
  positionX;
  positionY;
  willBeALive;
  numberOfNeighbours;

  constructor(positionX, positionY, willBeALive) {
    this.alive = Math.random() < 0.7;
    this.positionX = positionX;
    this.positionY = positionY;
    this.willBeALive = willBeALive;
  }

  findNeighbours(newBoard) {
    let aliveNeighbours = 0;

    for (let i = this.positionX - 1; i <= this.positionX + 1; i++) {
      for (let j = this.positionY - 1; j <= this.positionY + 1; j++) {
        if (i >= 0 && i < newBoard.length && j >= 0 && j < newBoard[0].length) {
          if (
            newBoard[i][j].alive &&
            !(i === this.positionX && j === this.positionY)
          ) {
            aliveNeighbours++;
          }
        }
      }
    }

    this.numberOfNeighbours = aliveNeighbours;
  }
}

export default Cell;
