let inputDirection = {
  x: 0,
  y: 0,
};

let enemyDirection = {
  x: 0,
  y: 0,
};

window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowLeft":
      inputDirection.x = -1;
      inputDirection.y = 0;
      break;
    case "ArrowRight":
      inputDirection.x = 1;
      inputDirection.y = 0;
      break;
    case "ArrowUp":
      inputDirection.x = 0;
      inputDirection.y = -1;
      break;
    case "ArrowDown":
      inputDirection.x = 0;
      inputDirection.y = 1;
  }
});

export function getInputDirection() {
  return inputDirection;
}

window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowLeft":
      enemyDirection.x = 0;
      enemyDirection.y = 1;
      break;
    case "ArrowRight":
      enemyDirection.x = 0;
      enemyDirection.y = 1;
      break;
  }
});

export function getEnemyDirection() {
  return enemyDirection;
}
