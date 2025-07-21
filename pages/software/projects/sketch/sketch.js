const gridCanvas = document.querySelector("#gridCanvas");
const root = document.querySelector(":root");
const rootStyle = getComputedStyle(root);
let squaresPerRow = rootStyle.getPropertyValue('--squaresPerRow');
let gridArea = parseInt(squaresPerRow) ** 2;
const canvas = parseInt(rootStyle.getPropertyValue('--canvas'));
let squareSize = parseInt(rootStyle.getPropertyValue('--squareSize'));
const sizer = document.querySelector("#sizer");
let allSquares;

function createGrid() {
	let squares = [];
	for (let i = 0; i < gridArea; i++) {
		squares[i] = document.createElement("div");
		squares[i].className = "square";
		gridCanvas.appendChild(squares[i]);

	}
	allSquares = document.querySelector("#gridCanvas").children;
}

function draw() {
	for (let i = 0; i < gridArea; i++) {
		allSquares[i].id = "square" + i;
		allSquares[i].addEventListener("mouseover", (event) => {
			event.target.style.backgroundColor = "black";
		});
	}
}


function removeGrid() {
	for (let i = allSquares.length - 1; i >= 0; i--) {
		allSquares[i].remove();
	}
}

function update() {
	sizer.addEventListener("click", () => {
		let newSquaresPerRow = parseInt(prompt("How many squares per row/column?", "4"));
		while (newSquaresPerRow > 100 || newSquaresPerRow < 1) {
			squaresPerRow = Math.floor(parseInt(prompt("Please enter a number between 1 and 100")));
		}
		root.style.setProperty('--squaresPewRow', newSquaresPerRow);
		console.log("test");
		removeGrid();
		squaresPerRow = newSquaresPerRow;
		updateGridArea();
		setSquareSize();
		createGrid()
		draw();
	});
	return squaresPerRow;
}


function updateGridArea() {
	gridArea = squaresPerRow ** 2;
	return gridArea;	
}

function setSquareSize() {
	squareSize = Math.floor(canvas / squaresPerRow);
	let squareSizeCSS = squareSize.toString() + "px";
	root.style.setProperty('--squareSize', squareSizeCSS);
	return squareSize;
}

createGrid();
draw();
update();