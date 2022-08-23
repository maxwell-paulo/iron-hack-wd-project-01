import { gameBoard, generateRandomBoardPosition } from "./Game-board.js";
import { getEnemyDirection } from "./input.js";

// gerar inimigo na posição aleatória
let enemyPosition = generateRandomPosition();

export function update() {
  const enemyDirection = getEnemyDirection();

  enemyPosition.y += enemyDirection.y;
  if (enemyPosition.y > 20) {
    enemyPosition = generateRandomPosition();
  }
}

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

// fazer o inimigo descer na tela

// let speed;
// let deslocY;
// let position;
// let animation;

// export function down() {
//   speed = 1;
//   deslocY = 1;
//   position = enemyPosition.y;
//   move();
// }

// function move() {
//   // console.log(position);
//   position += deslocY * speed;
//   enemyElement.style.marginTop = `${position}px`;
//   animation = requestAnimationFrame(move);
//   if (position > 600) {
//     cancelAnimationFrame(animation);
//   }
//   window.addEventListener("click", down);
// }
