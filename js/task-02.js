const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const lists = document.querySelector('ul#ingredients');

const listItems = ingredients.map(ingredient => {
  const list = document.createElement('li');
  list.textContent = ingredient;
  list.classList.add('item');
  return list;
});

listItems.forEach(item => {
  lists.appendChild(item);
});