const categories = document.querySelectorAll('ul#categories li.item');

const numberOfCategories = (categories) => {
    return `Number of categories: ${categories.length}`;
};

console.log(numberOfCategories(categories));

categories.forEach(item => {
    const headerText = item.querySelector('h2').textContent; 
    const itemCount = item.querySelectorAll('ul li').length;

    console.log(`Category: ${headerText}`);
    console.log(`Elements: ${itemCount}`);
});