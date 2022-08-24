import {
  draw as characterDraw,
  update as characterUpdate,
  characterPosition,
} from "./character.js";
import { gameBoard } from "./Game-board.js";
import {
  draw as enemyDraw,
  update as enemyUpdate,
  enemyPosition,
} from "./Enemies/enemy.js";
import {
  draw as newEnemyDraw,
  update as newEnemyUpdate,
} from "./Enemies/New-enemy.js";
import { count, updateCowntdown } from "./Timer.js";
import {
  draw as finalEnemyDraw,
  update as finalEnemyUpdate,
} from "./Enemies/Final-enemy.js";

let gameSpeed = 7;
let life = 2;

export let lastTimeRender = 0;

let gameOver = false;

function main(currentTime) {
  // Game over condition
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

  if (secondSinceLastRender < 1 / gameSpeed) return;

  lastTimeRender = currentTime;

  update();

  draw();

  if (count > 25) {
    gameSpeed = 10;
  }

  if (count > 35) {
    gameSpeed = 15;
  }

  if (count > 45) {
    gameSpeed = 20;
  }

  if (count >= 61) {
    if (confirm("Você Ganhou!")) {
      window.location.reload();
    } else {
      window.requestAnimationFrame(main);
    }
  }
}

function update() {
  gameBoard.innerHTML = "";
  characterUpdate();
  enemyUpdate();
  newEnemyUpdate();
  finalEnemyUpdate();
}

function draw() {
  characterDraw();
  enemyDraw();
  if (count > 5) {
    newEnemyDraw();
  }

  if (count > 15) {
    finalEnemyDraw();
  }
}

window.requestAnimationFrame(main);
