import generateRandomBoard from "./generateRandomBoard/generateRandomBoard.js";
import numberOfNeighbours from "./findNeighbours/findNeigbhours.js";

const newBoard = generateRandomBoard(3, 3);
console.table(newBoard);
numberOfNeighbours(newBoard);
console.table(newBoard);
