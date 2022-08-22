import { gameBoard } from "./Game-board.js";

export let neymarSpeed = 5;

const neymarBody = [{ x: 20, y: 20 }];

export function update() {}

export function draw() {}

neymarBody.forEach((segment) => {
  const neymarElement = document.createElement("div");

  neymarElement.classList.add("neymar");

  neymarElement.style.gridRowStart = segment.y;
  neymarElement.style.gridColumnStart = segment.x;

  gameBoard.appendChild(neymarElement);
});
