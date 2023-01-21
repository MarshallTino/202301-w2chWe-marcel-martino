const zeroOrOne = (max) => Math.floor(Math.random() * max);

function generateRandomBoard(row, col) {
  const twoDarr = [];

  for (let i = 0; i < row; i++) {
    const subarray = [];

    for (let j = 0; j < col; j++) {
      subarray.push(zeroOrOne(2));
    }

    twoDarr.push(subarray);
  }

  return twoDarr;
}

generateRandomBoard(10, 10);

export default generateRandomBoard;
