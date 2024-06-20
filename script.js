const container = document.querySelector('.container');
const data = [
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 1],
  [0, 1, 0],
  [1, 0, 0],
  [0, 1, 0],
];

for (let row = 0; row < data.length; row++) {
  for (let col = 0; col < data[row].length; col++) {
    const card = document.createElement('div');
    card.classList.add('card');

    if (data[row][col] === 0) {
      card.classList.add('empty');
    }

    container.appendChild(card);
  }
}
