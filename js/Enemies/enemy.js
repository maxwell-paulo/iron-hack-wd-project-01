import { gameBoard, generateRandomBoardPosition } from "../Game-board.js";
import { getEnemyDirection } from "../input.js";

// Enemy randon generation
export let enemyPosition = generateRandomPosition();
// Enemy movimentation
export function update() {
  const enemyDirection = getEnemyDirection();

  enemyPosition.y += enemyDirection.y;
  if (enemyPosition.y > 15) {
    enemyPosition = generateRandomPosition();
  }
  if (enemyPosition.x > 37) {
    enemyPosition = generateRandomPosition();
  }
}

// Enemy first generation
export function draw() {
  const enemyElement = document.createElement("img");
  enemyElement.src = "../../Images/maria chuetira.png";
  enemyElement.classList.add("enemy");
  enemyElement.style.gridRowStart = enemyPosition.y;
  enemyElement.style.gridColumnStart = enemyPosition.x;

  gameBoard.appendChild(enemyElement);
  console.log(typeof enemyPosition.x);
}

function generateRandomPosition() {
  let enemyNewPosition = generateRandomBoardPosition();

  return enemyNewPosition;
}
