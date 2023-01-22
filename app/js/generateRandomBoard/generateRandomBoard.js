import Cell from "../CellClass/CellClass.js";

function generateRandomBoard(row, column) {
  const mainArray = [];

  for (let i = 0; i < row; i++) {
    const subarray = [];

    for (let j = 0; j < column; j++) {
      subarray.push(new Cell(i, j));
    }

    mainArray.push(subarray);
  }

  return mainArray;
}

export default generateRandomBoard;
