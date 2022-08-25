import { getInputDirection } from "./input.js";
import { gameBoard } from "./Game-board.js";

export const characterElement = document.createElement("img");

// Character initial position
export const characterPosition = { x: 20, y: 16 };

// Character movimentation
export function update() {
  const inputDirection = getInputDirection();

  characterPosition.x += inputDirection.x;
  if (characterPosition.x <= 1) {
    inputDirection.x = 1;
  }
  if (characterPosition.x > 37) {
    inputDirection.x = -1;
  }
  characterPosition.y += inputDirection.y;
}

// character generation
export function draw() {
  characterElement.src = "../Images/neymar.png";

  characterElement.classList.add("neymar");

  characterElement.style.gridRowStart = characterPosition.y;
  characterElement.style.gridColumnStart = characterPosition.x;

  gameBoard.appendChild(characterElement);
}

// export function collision(position) {
//   return neymar.some((segment) => {
//     return position.x === segment.x && position.y === segment.y;
//   });
// }
