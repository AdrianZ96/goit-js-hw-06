const categories = document.querySelectorAll('ul#categories li.item');

const numberOfCategories = (categories) => {
    return;
};

console.log(`Number of categories:`, categories.length);

categories.forEach(item => {
    const headerText = item.querySelector('h2').textContent; 
    const itemCount = item.querySelectorAll('ul li').length;

    console.log(`Category:`,headerText);
    console.log(`Elements:` ,itemCount);
});