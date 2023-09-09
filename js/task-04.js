const btnCountPlus = document.querySelector('button[data-action="increment"]');
const btnCountMinus = document.querySelector('button[data-action="decrement"]');
const initialValue = document.getElementById("value");

let counterValue = 0;
btnCountMinus.addEventListener("click", function () {
    counterValue -= 1;
    initialValue.textContent = counterValue;
});
btnCountPlus.addEventListener('click', function () {
    counterValue += 1;
    initialValue.textContent = counterValue;
});