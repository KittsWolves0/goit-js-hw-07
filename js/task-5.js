function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector(".change-color");
const spanEl = document.querySelector(".color");
const body = document.querySelector("body")

button.addEventListener("click", handlerBackground);

function handlerBackground(event) {
  const newColor = getRandomHexColor();
  spanEl.textContent = newColor;

  body.style.backgroundColor = newColor;
}