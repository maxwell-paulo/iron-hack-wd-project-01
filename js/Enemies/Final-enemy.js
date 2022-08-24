import { gameBoard, generateRandomBoardPosition } from "../Game-board.js";
import { getEnemyDirection } from "../input.js";

// Enemy randon generation
export let finalEnemyPosition = generateNewRandomPosition();

// Enemy movimentation
export function update() {
  const finalEnemyDireticon = getEnemyDirection();

  finalEnemyPosition.y += finalEnemyDireticon.y;
  if (finalEnemyPosition.y > 15) {
    finalEnemyPosition = generateNewRandomPosition();
  }
  if (finalEnemyPosition.x > 37) {
    finalEnemyPosition = generateNewRandomPosition();
  }
}

// Enemy first generation
export function draw() {
  const finalEnemyElement = document.createElement("img");
  finalEnemyElement.src = "/Images/mbappe.png";
  finalEnemyElement.classList.add("new-enemy");
  finalEnemyElement.style.gridRowStart = finalEnemyPosition.y;
  finalEnemyElement.style.gridColumnStart = finalEnemyPosition.x;

  gameBoard.appendChild(finalEnemyElement);
}

function generateNewRandomPosition() {
  let finalEnemyNewPosition = generateRandomBoardPosition();

  return finalEnemyNewPosition;
}
