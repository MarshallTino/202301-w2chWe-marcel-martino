class Cell {
  alive;
  positionX;
  positionY;
  numberOfNeighbours = 0;
  render;

  constructor(positionX, positionY, numberOfNeighbours) {
    this.alive = Math.random() < 0.6;
    this.positionX = positionX;
    this.positionY = positionY;
    this.numberOfNeighbours = numberOfNeighbours;
    this.render = this.alive ? "⬜" : "⬛";
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

  willBeAlive() {
    if (this.alive === true && this.numberOfNeighbours < 2) {
      this.alive = false;
      this.render = this.alive ? "⬜" : "⬛";
    } else if (this.alive === true && this.numberOfNeighbours > 3) {
      this.alive = false;
      this.render = this.alive ? "⬜" : "⬛";
    } else if (this.alive === false && this.numberOfNeighbours === 3) {
      this.alive = true;
      this.render = this.alive ? "⬜" : "⬛";
    }
  }
}

export default Cell;
