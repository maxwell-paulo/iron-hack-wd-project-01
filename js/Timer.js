const startingMinutes = 1;
let time = startingMinutes * 60;

const countdownElement = document.getElementById("countdown");

let refreshIntervalId = setInterval(updateCowntdown, 1000);

export function updateCowntdown() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  seconds = seconds < 10 ? "0" + seconds : seconds;

  countdownElement.innerHTML = `${minutes}:${seconds}`;
  time--;

  if (time < 0) {
    //stop the setInterval whe time = 0 for avoid negative time
    clearInterval(refreshIntervalId);
  }
}

window.addEventListener("keydown", updateCowntdown);
