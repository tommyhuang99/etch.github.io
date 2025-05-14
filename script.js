

const container = document.querySelector('.container')
for (let i = 0; i < 256; i++) {
  const square = document.createElement('div');
  square.classList.add('grid-square');
  container.appendChild(square);
  square.addEventListener("mouseover", function () {
    square.style.backgroundColor = "black";
  });
}


document.getElementById("btN").addEventListener("click", newGrid)

function newGrid() {
  let inout = prompt("Please enter a new grid size (1–100):");

  const newGridSize = parseInt(input);

  if (isNaN(newGridSize)) {
    alert("Please enter the valid number");
    return;
  } else if (newGridSize > 1 || newGridSize > 100) {
    alert("Please enter the number between 1 to 100");
    return;
  }
  console.log(`Create new Grid: ${newGridSize} x ${newGridSize}`);

  let squares = document.querySelectorAll('.grid-square');
  for (let i = 0; i < squares.length; i++) {
    squares[i] = element.remove();
  }
}
