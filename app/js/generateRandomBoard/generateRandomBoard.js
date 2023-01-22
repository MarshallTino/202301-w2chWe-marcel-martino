const generateRandomBoard = (row, column, Class) => {
  const mainArray = [];

  for (let i = 0; i < row; i++) {
    const subarray = [];

    for (let j = 0; j < column; j++) {
      subarray.push(new Class(i, j, 0));
    }

    mainArray.push(subarray);
  }

  return mainArray;
};

export default generateRandomBoard;
