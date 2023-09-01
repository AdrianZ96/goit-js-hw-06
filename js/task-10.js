function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0')}`;
  }

  const input = document.querySelector('input');
  const createButton = document.querySelector('[data-create]');
  const destroyButton = document.querySelector('[data-destroy]');
  const boxesContainer = document.querySelector('#boxes');

  createButton.addEventListener('click', () => {
    const amount = input.value;
    createBoxes(amount);
  });

  destroyButton.addEventListener('click', destroyBoxes);

  function createBoxes(amount) {
    const initialSize = 30;
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < amount; i++) {
      const box = document.createElement('div');
      const size = initialSize + i * 10;
      box.style.width = size + 'px';
      box.style.height = size + 'px';
      box.style.backgroundColor = getRandomHexColor();
      fragment.appendChild(box);
    }

    boxesContainer.appendChild(fragment);
  }

  function destroyBoxes() {
    boxesContainer.innerHTML = '';
  }