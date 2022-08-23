import { gameBoard, generateRandomBoardPosition } from "./Game-board.js";
// gerar inimigo na posição aleatória
let enemyPosition = generateRandomPosition();
//Criar div enemy
const enemyElement = document.createElement("div");
enemyElement.classList.add("enemy");

export function update() {}

export function draw() {
  enemyElement.style.gridRowStart = enemyPosition.y;
  enemyElement.style.gridColumnStart = enemyPosition.x;

  gameBoard.appendChild(enemyElement);
}

function generateRandomPosition() {
  let newEnemyPosition = generateRandomBoardPosition();

  return newEnemyPosition;
}
console.log(enemyPosition);
// fazer o inimigo descer na tela

let speed;
let deslocY;
let position;
let animation;

export function down() {
  speed = 1;
  deslocY = 1;
  position = enemyPosition.y;
  move();
}

function move() {
  // console.log(position);
  position += deslocY * speed;
  enemyElement.style.marginTop = `${position}px`;
  animation = requestAnimationFrame(move);
  if (position > 600) {
    cancelAnimationFrame(animation);
  }
  window.addEventListener("click", down);
}
