const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");

inputEl.addEventListener("input", greetName);

function greetName(event) {
    const newName = event.target.value.trim();
    if (newName === "") {
        spanEl.textContent = "Anonymous";
    } else {
        spanEl.textContent = newName;
    }
}