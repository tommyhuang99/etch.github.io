let currentColor = "#000000";
//let isDrawing = false;

const colorBtn = document.getElementById('btC');
const colorPicker = document.getElementById('colorPicker');
const container = document.querySelector('.container')


//color picker functionality
colorBtn.addEventListener('click', () => {
  colorPicker.click();
})

colorPicker.addEventListener('input', (e) => {
  currentColor = e.target.value;
});


//Function to create grid with specified size
function createGrid(gridSize) {
  container.innerHTML = '';

  const squareSize = 960 / gridSize;

  for (let i = 0; i < gridSize * gridSize; i++) {
    const square = document.createElement('div')
    square.classList.add('grid-square');

    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    //hover effect
    square.addEventListener('mouseenter', function () {
      this.style.background = currentColor;
    });

    container.appendChild(square);
  }
}

createGrid(16);

document.getElementById('btN').addEventListener("click", function () {
  let input = prompt("Please enter a new grid size(1-100):");

  const newGridSize = parseint(input);

  if (isNaN(newGridSize)) {
    alert("Please enter a valid number");
    return;
  } else if (newGridSize < 1 || newGridSize > 100) {
    alert("Please enter a number between 1 to 100");
    return;
  }

  createGrid(newGridSize);
});


// Rest button

document.getElementById("btR").addEventListener("click", function () {
  const square = document.querySelectorAll('.grid-square');
  square.forEach(square => {
    square.style.background = '';
  });
});

