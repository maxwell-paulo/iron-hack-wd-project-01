import {
  neymarSpeed,
  draw as neymarDraw,
  update as neymarUpdate,
} from "./character.js";

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
  neymarUpdate();
}

function draw() {
  neymarDraw();
}

window.requestAnimationFrame(main);

// Neymar
