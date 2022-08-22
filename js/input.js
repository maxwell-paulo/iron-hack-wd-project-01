let inputDirection = {
  x: 0,
  y: 0,
};

window.addEventListener("keydown", (e) => {
  console.log(e.key);
  switch (e.key) {
    case "ArrowLeft":
      inputDirection.x = -1;
      inputDirection.y = 0;
      break;
    case "ArrowRight":
      inputDirection.x = 1;
      inputDirection.y = 0;
      break;
  }
});

export function getInputDirection() {
  return inputDirection;
}
