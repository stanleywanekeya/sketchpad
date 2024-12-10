const container = document.querySelector('.container');

function drawGrid() {
  container.innerhtml = '';
  const containerWidth = container.offsetWidth;
  const containerHeight = container.offsetHeight;

  const squareSize = 16;

  const columns = Math.floor(containerWidth / squareSize);
  const rows = Math.floor(containerHeight / squareSize);

  const totalSquares = columns * rows;

  for(let i = 0; i < totalSquares; i++) {
	const square = document.createElement('div');
	square.style.width = `${squareSize}px`;
	square.style.height = `${squareSize}px`;
	square.style.boxSizing = "border-box";
	square.style.border = "1px solid #ccc";
	container.appendChild(square);
  }
}

drawGrid();
window.addEventListener('resize', drawGrid);
