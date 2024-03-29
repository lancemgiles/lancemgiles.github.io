const gridContainer = document.querySelector("#gridContainer");

let squares = [];
function createGrid() {
	for (let i = 0; i < 16; i++) {
		squares[i] = document.createElement("div");
		gridContainer.appendChild(squares[i]);
	}

}
createGrid();