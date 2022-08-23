import { getInputDirection } from "./input.js";
import { gameBoard } from "./Game-board.js";

export const neymarSpeed = 10;

const neymar = [{ x: 20, y: 20 }];

export function update() {
  const inputDirection = getInputDirection();

  neymar[0].x += inputDirection.x;
  if (neymar[0].x <= 1) {
    inputDirection.x = 1;
  }
  if (neymar[0].x > 39) {
    inputDirection.x = -1;
  }
}

export function draw() {
  neymar.forEach((segment) => {
    const neymarElement = document.createElement("div");

    neymarElement.classList.add("neymar");

    neymarElement.style.gridRowStart = segment.y;
    neymarElement.style.gridColumnStart = segment.x;

    gameBoard.appendChild(neymarElement);
  });
}

export function collission(position) {
  return neymar.some((segment) => {
    return position.x === segment.x && position.y === segment.y;
  });
}
