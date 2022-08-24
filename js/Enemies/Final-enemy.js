import { gameBoard, generateRandomBoardPosition } from "../Game-board.js";
import { getEnemyDirection } from "../input.js";

// Enemy randon generation
export let finalEnemyPosition = generateNewRandomPosition();

// Enemy movimentation
export function update() {
  const finalEnemyDireticon = getEnemyDirection();

  finalEnemyPosition.y += finalEnemyDireticon.y;
  if (finalEnemyPosition.y > 20) {
    finalEnemyPosition = generateNewRandomPosition();
  }
}

// Enemy first generation
export function draw() {
  const finalEnemyElement = document.createElement("div");
  finalEnemyElement.classList.add("new-enemy");
  finalEnemyElement.style.gridRowStart = finalEnemyPosition.y;
  finalEnemyElement.style.gridColumnStart = finalEnemyPosition.x;

  gameBoard.appendChild(finalEnemyElement);
}

function generateNewRandomPosition() {
  let finalEnemyNewPosition = generateRandomBoardPosition();

  return finalEnemyNewPosition;
}
