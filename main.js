const container = document.querySelector('.container');

const squareButton = document.createElement('button');

squareButton.textContent = 'Select Grid Size';
squareButton.classList.add('button');
squareButton.style.width = '140px';
squareButton.style.height = '40px';
squareButton.style.marginBottom = '10px';

document.body.prepend(squareButton);

const containerSize = 960;
container.style.width = `${containerSize}px`;
container.style.height = `${containerSize}px`;
container.style.border = '2px solid black';
container.style.display = 'flex';
container.style.flexWrap = 'wrap';
container.style.alignItems = 'flex-start';

function drawGrid(boxes = 16) {
  container.innerHTML = '';
  if(boxes < 1 || boxes > 100) return;

  const squareSize = containerSize / boxes;

  for(let i=0; i < boxes * boxes; i++) {
	const square = document.createElement('div');
	square.classList.add('square');
	square.style.width = `${squareSize}px`;
	square.style.height = `${squareSize}px`;
	square.style.border = '1px solid #ccc';
	square.style.boxSizing = 'border-box'

	square.addEventListener('mouseover', () => {
	  const color = ['red', 'green', 'blue'];
	  let rand = Math.floor(Math.random() * 3);
	  square.style.backgroundColor = color[rand];
	});

	container.appendChild(square);
  }
}

squareButton.addEventListener('click', () => {
  let boxes = Number(prompt('Enter the number of square per side (max 100)'));
  while(!boxes || boxes < 1 || boxes > 100) {
	boxes = Number(prompt('Please enter a valid number (1 - 100)'));
  }

  drawGrid(boxes);
});

drawGrid();
