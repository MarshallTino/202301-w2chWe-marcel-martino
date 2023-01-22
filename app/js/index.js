import generateRandomBoard from "./generateRandomBoard/generateRandomBoard.js";
import numberOfNeighbours from "./findNeighbours/findNeigbhours.js";
import willBeAlive from "./willBeAlive/willBeAlive.js";
import Cell from "./CellClass/CellClass.js";
import mapFunction from "../mapFunction/mapFunction.js";
const newBoard = generateRandomBoard(40, 40, Cell);

console.table(mapFunction(newBoard));

const game = () => {
  console.clear();

  numberOfNeighbours(newBoard);

  willBeAlive(newBoard);

  console.table(mapFunction(newBoard));
};

setInterval(game, 500);
