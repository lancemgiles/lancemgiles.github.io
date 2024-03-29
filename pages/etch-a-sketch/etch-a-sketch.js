const gridContainer = document.querySelector("#gridContainer");

function createGrid() {
	let squares = [];
	for (let i = 0; i < 16; i++) {
		squares[i] = document.createElement("div");
		squares[i].className = "square";
		gridContainer.appendChild(squares[i]);
		let allSquares = document.querySelector("#gridContainer").children;
		allSquares[i].id = "square" + i;
	}
}
createGrid();
// let square = document.querySelector(".square");

// function draw() {
	
// 	square.classList.toggle("drawn");
// }

// addEventListener("mouseover", (event) => {
// 	draw();
// 	});