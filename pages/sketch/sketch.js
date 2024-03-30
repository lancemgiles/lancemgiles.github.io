const gridCanvas = document.querySelector("#gridCanvas");
const root = document.querySelector(":root");
const rootStyle = getComputedStyle(root);
let squaresPerRow = rootStyle.getPropertyValue('--sidePerRow');
let gridArea = parseInt(squaresPerRow) ** 2;
const canvas = parseInt(rootStyle.getPropertyValue('--canvas'));
let squareSize = parseInt(rootStyle.getPropertyValue('--squareSize'));
const sizer = document.querySelector("#sizer");

function createGrid() {
	let squares = [];
	for (let i = 0; i < 16; i++) {
		squares[i] = document.createElement("div");
		squares[i].className = "square";
		gridCanvas.appendChild(squares[i]);
	}
}


function draw() {
	for (let i = 0; i < 16; i++) {
		allSquares[i].id = "square" + i;
		allSquares[i].addEventListener("mouseover", (event) => {
			event.target.style.backgroundColor = "black";
		});
	}
}


function removeGrid() {
	for (i = 0; i < allSquares.length; i++) {
		allSquares[i].remove();
	}
}

function update() {

}
// sizer.addEventListener("click", () => {
// 		squaresPerRow = parseInt(prompt("How many squares per row/column?", "4"));
// 		while (squaresPerRow > 100 || squaresPerRow < 1) {
// 			squaresPerRow = Math.floor(parseInt(prompt("Please enter a number between 1 and 100")));
// 		}
// 		root.style.setProperty('--squaresPewRow', squaresPerRow);
// 		console.log("test");
// 		removeGrid();
// 		updateGridArea();
// 		setSquareSize();
// 		createGrid()
// 		draw();
		
// 	});
function update() {
	sizer.addEventListener("click", () => {
		squaresPerRow = parseInt(prompt("How many squares per row/column?", "4"));
		while (squaresPerRow > 100 || squaresPerRow < 1) {
			squaresPerRow = Math.floor(parseInt(prompt("Please enter a number between 1 and 100")));
		}
		root.style.setProperty('--squaresPewRow', squaresPerRow);
		console.log("test");
		removeGrid();
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
	squareSize = canvas / squaresPerRow;
	let squareSizeCSS = squareSize.toString() + "px";
	root.style.setProperty('--squareSize', squareSizeCSS);
	return squareSize;
}

// function resize() {
// 	removeGrid();
// 	resizeSquaresPerRow()
// 	updateGridArea();
// 	setSquareSize();
// 	createGrid();
// 	draw();
// }


// program start
createGrid();

let allSquares = document.querySelector("#gridCanvas").children;
draw();
update();