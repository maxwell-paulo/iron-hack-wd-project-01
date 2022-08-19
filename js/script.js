const neymar = document.querySelector(".neymar");
let px = 450;
const carrinho = document.querySelector(".carrinho");

// Neymar's movimentation

function move() {
  let key = event.keyCode;
  if (key === 37 || key === 65) {
    px -= 30;
    neymar.style.left = px + "px";
  } else if (key === 39 || key === 68) {
    px += 30;
    neymar.style.left = px + "px";
  }
}
document.addEventListener("keydown", move);

// Middle enemy position verification

const loop = setInterval(() => {
  const carrinhoPosition = carrinho.offsetTop;
  console.log(carrinhoPosition);
}, 10);
