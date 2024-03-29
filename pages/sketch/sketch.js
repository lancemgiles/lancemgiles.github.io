const gridContainer = document.querySelector("#gridContainer");
const root = document.querySelector(":root");
const rootStyle = getComputedStyle(root);
let gridDimensions = rootStyle.getPropertyValue('--gridDimensions');
let gridSize = parseInt(gridDimensions) ** 2;

function createGrid() {
	let squares = [];
	for (let i = 0; i < gridSize; i++) {
		squares[i] = document.createElement("div");
		squares[i].className = "square";
		gridContainer.appendChild(squares[i]);
	}
}
createGrid();

let allSquares = document.querySelector("#gridContainer").children;

function draw() {
	for (let i = 0; i < gridSize; i++) {
		allSquares[i].id = "square" + i;
		allSquares[i].addEventListener("mouseover", (event) => {
			event.target.style.backgroundColor = "black";
		});
	}
}
draw();

const sizer = document.querySelector("#sizer");

// function removeGrid() {
// 	for (i = 0)
// }

function resize() {
	sizer.addEventListener("click", () => {
		let newSize = parseInt(prompt("How many squares per row/column?", "4"));
		while (newSize > 100 || newSize < 1) {
			newSize = parseInt(prompt("Please enter a number between 1 and 100"));
		}
		newSize = newSize.toString();
		
		// root.style.setProperty('--squareSize', newSize);
		
	});
}
resize();