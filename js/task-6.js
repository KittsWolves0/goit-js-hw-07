function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const creBtn = document.querySelector("[data-create]");
const desBtn = document.querySelector("[data-destroy]");
const inputEl = document.querySelector("input");
const divEl = document.querySelector("#boxes");

creBtn.addEventListener("click", createBoxes);
desBtn.addEventListener("click", destroyBoxes);

function boxesMarkUp(counter) {
  const box = document.createElement("div");
  box.classList.add("sixth-box");
  box.style.width = `${30 + counter * 10}px`;
  box.style.height = `${30 + counter * 10}px`;
  box.style.backgroundColor = getRandomHexColor();
  divEl.append(box);
}

function createBoxes() {
  if (inputEl.value > 0 && inputEl.value <= 100) {
    for (let i = 0; i < inputEl.value; i++) {
      boxesMarkUp(i);
    }
  }
  inputEl.value = "";
}

function destroyBoxes() {
  divEl.innerHTML = "";
}