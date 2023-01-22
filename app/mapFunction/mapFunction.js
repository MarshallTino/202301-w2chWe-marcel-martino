const mapFunction = (newBoard) =>
  newBoard.map((row) => row.map((cell) => cell.render));

export default mapFunction;
