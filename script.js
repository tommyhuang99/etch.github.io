let currentColor = "#000000";
let isDrawing = false;

const colorBtn = document.getElementById('btC');
const colorPicker = document.getElementById('colorPicker');
const container = document.querySelector('.container')

colorBtn.addEventListener('click', () => {
  colorPicker.click();
})

colorPicker.addEventListener('input', (e) => {
  currentColor = e.target.value;
});

document.addEventListener("mousedown", () => {
  isDrawing = true;
});

document.addEventListener("mouseup", () => {
  isDrawing = false;
})

for (let i = 0; i < 256; i++) {
  const square = document.createElement('div');
  square.classList.add('grid-square');
  container.appendChild(square);

  square.addEventListener("mousedown", function () {
    square.style.backgroundColor = currentColor;
  });

  square.addEventListener("mousemove", function () {
    if (isDrawing) {
      square.style.backgroundColor = currentColor;
    }
  });
}


document.getElementById("btN").addEventListener("click", newGrid)

function newGrid() {
  let input = prompt("Please enter a new grid size (1–100):");

  const newGridSize = parseInt(input);

  if (isNaN(newGridSize)) {
    alert("Please enter the valid number");
    return;
  } else if (newGridSize < 1 || newGridSize > 100) {
    alert("Please enter the number between 1 to 100");
    return;
  }
  console.log(`Create new Grid: ${newGridSize} x ${newGridSize}`);

  let squares = document.querySelectorAll('.grid-square');
  for (let i = 0; i < squares.length; i++) {
    squares[i].remove();
  }

  const container = document.querySelector('.container');
  container.style.gridTemplateColumns = `repeat(${newGridSize}, 1fr)`;

  for (let i = 0; i < newGridSize * newGridSize; i++) {
    const square = document.createElement('div');
    square.classList.add('grid-square');
    container.appendChild(square);
  }
}
