import {
  neymarSpeed,
  draw as neymarDraw,
  update as neymarUpdate,
} from "./character.js";
import { gameBoard } from "./Game-board.js";
import { draw as enemyDraw, update as EnemyUpdate } from "./enemy.js";

let lastTimeRender = 0;

// current time = milisencods
function main(currentTime) {
  window.requestAnimationFrame(main);

  const secondSinceLastRender = (currentTime - lastTimeRender) / 1000;

  if (secondSinceLastRender < 1 / neymarSpeed) return;

  lastTimeRender = currentTime;

  update();

  draw();
}

function update() {
  gameBoard.innerHTML = "";
  neymarUpdate();
  EnemyUpdate();
}

function draw() {
  neymarDraw();
  enemyDraw();
}

window.requestAnimationFrame(main);

// Neymar
