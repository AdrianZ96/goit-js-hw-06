let currentValue = 0;

const value = document.getElementById('value');
const increase = document.querySelector(`button[data-action="increment"]`);
const decrease = document.querySelector(`button[data-action="decrement"]`);

increase.addEventListener('click', () => {
    currentValue += 1;
    value.textContent = currentValue;
});
decrease.addEventListener('click', () => {
    currentValue -= 1;
    value.textContent = currentValue;
}); 