const button = document.querySelector(".change-color");
const bodySite = document.querySelector("body");
const nameColor = document.querySelector("span");

button.addEventListener("click", onClickButton);

function onClickButton() {
  bodySite.style.backgroundColor = getRandomHexColor();
  nameColor.textContent = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
