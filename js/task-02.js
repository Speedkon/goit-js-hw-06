const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const container = document.querySelector('#ingredients');
const markup = ingredients.map((item) => {
  const li = document.createElement('li');
  li.textContent = item;
  li.classList = 'item';
  console.log('li')
  return li;
});
console.log(...markup);
container.append(...markup);
console.log(container);