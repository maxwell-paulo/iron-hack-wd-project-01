import { gameBoard, generateRandomBoardPosition } from "./Game-board.js";

let enemyPosition = generateRandomPosition();

export function update() {}

export function draw() {
  const enemyElement = document.createElement("div");

  enemyElement.classList.add("enemy");

  enemyElement.style.gridRowStart = enemyPosition.y;
  enemyElement.style.gridColumnStart = enemyPosition.x;

  gameBoard.appendChild(enemyElement);
}

function generateRandomPosition() {
  let newEnemyPosition = generateRandomBoardPosition();

  return newEnemyPosition;
}
