import { gameBoard, generateRandomBoardPosition } from "./Game-board.js";
// gerar inimigo na posição aleatória
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

// fazer o inimigo descer na tela

let enemy;
let speed;
let deslocY;
let positioY;
let animation;

export function start() {
  speed = 5;
  deslocY = 1;
  positioY = draw();
  enemy = document.getElementById("enemy");
  move();
}

function move() {
  positioY += deslocY * speed;
  enemy.style.top = positioY + "px";
  animation = requestAnimationFrame(game);
  if (positioY > 600) {
    cancelAnimationFrame(animation);
  }
}
