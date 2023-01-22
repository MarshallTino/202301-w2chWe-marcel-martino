const willBeAlive = (newBoard) => {
  for (let i = 0; i < newBoard.length; i++) {
    for (let j = 0; j < newBoard[i].length; j++) {
      newBoard[i][j].willBeAlive();
    }
  }
};

export default willBeAlive;
