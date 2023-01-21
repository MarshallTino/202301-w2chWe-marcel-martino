const zeroOrOne = (max) => Math.floor(Math.random() * max);

function generateRandomBoard(row, column) {
  const mainArray = [];

  for (let i = 0; i < row; i++) {
    const subarray = [];

    for (let j = 0; j < column; j++) {
      subarray.push(zeroOrOne(2));
    }

    mainArray.push(subarray);
  }

  return mainArray;
}

generateRandomBoard(10, 10);

export default generateRandomBoard;
