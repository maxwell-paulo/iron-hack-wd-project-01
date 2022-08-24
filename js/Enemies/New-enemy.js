import { gameBoard, generateRandomBoardPosition } from "../Game-board.js";
import { getEnemyDirection } from "../input.js";

// Enemy randon generation
export let newEnemyPosiotion = generateNewRandomPosition();

// Enemy movimentation
export function update() {
  const newEnemyDirection = getEnemyDirection();

  newEnemyPosiotion.y += newEnemyDirection.y;
  if (newEnemyPosiotion.y > 20) {
    newEnemyPosiotion = generateNewRandomPosition();
  }
}

// Enemy first generation
export function draw() {
  const newEnemyElement = document.createElement("div");
  newEnemyElement.classList.add("new-enemy");
  newEnemyElement.style.gridRowStart = newEnemyPosiotion.y;
  newEnemyElement.style.gridColumnStart = newEnemyPosiotion.x;

  gameBoard.appendChild(newEnemyElement);
}

function generateNewRandomPosition() {
  let newEnemyNewPosition = generateRandomBoardPosition();

  return newEnemyNewPosition;
}
