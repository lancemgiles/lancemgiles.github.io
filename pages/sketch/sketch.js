const gridContainer = document.querySelector("#gridContainer");
let gridSize = 16;

function createGrid() {
	let squares = [];
	for (let i = 0; i < gridSize; i++) {
		squares[i] = document.createElement("div");
		squares[i].className = "square";
		gridContainer.appendChild(squares[i]);
	}
}
createGrid();

const allSquares = document.querySelector("#gridContainer").children;

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

function resize() {
	sizer.addEventListener("onclick", () => {
		let newSize = prompt("How many squares per row/column?");
		
	})
}