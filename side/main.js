const container = document.querySelector('.container');

const squareButton = document.createElement('button');
squareButton.classList.add('button');
squareButton.textContent = 'Select Button';
squareButton.style.width = '150px';
squareButton.style.height = '40px';
squareButton.style.border = '1px solid #ccc';
squareButton.style.marginBottom = '10px';
squareButton.style.marginLeft = '130px';

document.body.prepend(squareButton);

const containerSize = 960;
container.style.width = `${containerSize}px`;
container.style.height = `${containerSize}px`;
container.style.border = '2px solid black';
container.style.display = 'flex';
container.style.flexWrap = 'wrap';
container.style.alignItems = 'flex-start'

function drawGrid(boxes = 10) {
  container.innerhtml = '';

  if(boxes < 1 || boxes > 100) return;

  const squareSize = containerSize / boxes;

  for(let i = 0; i < boxes * boxes; i++) {
	const square = document.createElement('div');
	square.classList.add('square');
	square.style.width = `${squareSize}px`;
	square.style.height = `${squareSize}px`;
	square.style.border = '1px solid #ccc';
	square.style.boxSizing = 'border-box';

	square.addEventListener('mouseOver', () => {
	  square.style.backgroundColor = 'red';
	});

	square.addEventListener('mouseOut', () => {
	  square.style.backgroundColor = 'white';
	});

	container.appendChild(square);
  }

  for(let i = 0; i < boxes * boxes; i++) {
	const square = document.createElement('div');
	square.style.width = `${squareSize}px`;
	square.style.height = `${squareSize}px`;
	square.style.boxSizing = "border-box";
	square.style.border = "1px sol`id #ccc";
	square.classList.add('square');
	container.appendChild(square);
  }

  const squares = document.querySelectorAll('.square');
  squares.forEach(square => {
	square.addEventListener('mouseover', () => {
	  square.style.backgroundColor = 'red';
	});
	square.addEventListener('mouseout', () => {
	  square.style.backgroundColor = 'white';
	});
  });

}

squareButton.addEventListener('click', () => {
  boxes = Number(prompt('Enter the number of squares'));
  if(!boxes || boxes > 100) {
	boxes = Number(prompt('Enter the number of squares less than or equal to 100'));
  }

  return boxes;

});

drawGrid(boxes);
window.addEventListener('resize', drawGrid(boxes));
