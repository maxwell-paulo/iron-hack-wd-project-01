import {
  neymarSpeed,
  draw as characterDraw,
  update as characterUpdate,
  characterPosition,
} from "./character.js";
import { gameBoard } from "./Game-board.js";
import {
  draw as enemyDraw,
  update as enemyUpdate,
  enemyPosition,
} from "./enemy.js";

let lastTimeRender = 0;

let gameOver = false;

function main(currentTime) {
  if (
    characterPosition.x == enemyPosition.x &&
    characterPosition.y == enemyPosition.y
  ) {
    gameOver = true;
  }
  if (gameOver) {
    if (confirm("Você perdeu!")) {
      window.location.reload();
    } else {
      window.requestAnimationFrame(main);
    }
    return;
  }

  window.requestAnimationFrame(main);

  const secondSinceLastRender = (currentTime - lastTimeRender) / 1000;

  if (secondSinceLastRender < 1 / neymarSpeed) return;

  lastTimeRender = currentTime;

  update();

  draw();
}

function update() {
  gameBoard.innerHTML = "";
  characterUpdate();
  enemyUpdate();
}

function draw() {
  characterDraw();
  enemyDraw();
}

// function checkGameOver() {}
window.requestAnimationFrame(main);
