const gridContainer = document.querySelector("#gridContainer");

function createGrid() {
	let squares = [];
	for (let i = 0; i < 16; i++) {
		squares[i] = document.createElement("div");
		squares[i].className = "square";
		gridContainer.appendChild(squares[i]);
	}
}
createGrid();

const allSquares = document.querySelector("#gridContainer").children;

function draw() {
	for (let i = 0; i < 16; i++) {
		allSquares[i].id = "square" + i;
		allSquares[i].addEventListener("mouseover", (event) => {
			event.target.style.backgroundColor = "black";
		});
	}
}

draw();