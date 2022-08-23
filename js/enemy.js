import { gameBoard, generateRandomBoardPosition } from "./Game-board.js";
import { getEnemyDirection } from "./input.js";

// Enemy randon generation
export let enemyPosition = generateRandomPosition();

// Enemy movimentation
export function update() {
  const enemyDirection = getEnemyDirection();

  enemyPosition.y += enemyDirection.y;
  if (enemyPosition.y > 20) {
    enemyPosition = generateRandomPosition();
  }
  // console.log(enemyPosition);
}

// Enemy first generation
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
