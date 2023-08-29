const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const lists = document.querySelector('ul#ingredients');

ingredients.forEach(ingredient => {
  const list = document.createElement('li');
  list.textContent = ingredient;
  list.classList.add('item');
  lists.appendChild(list);
});