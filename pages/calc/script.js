let num1 = null;
let num2 = null;
let operator = null;
let displayValue = null;
const calcNumButtons = document.querySelector(".calcNumButtons").children;
const operators = document.querySelector(".calcFuncs").children;
const screen = document.querySelector("#calcScreen");
const back = document.querySelector("#back");
const equals = document.querySelector("#enter");
const add = document.querySelector("#add");
const sub = document.querySelector("#sub");
const mult = document.querySelector("#mult");
const divide = document.querySelector("#divide");
const enterBack = document.querySelector(".enterBack");

function operate(num1, operator, num2) {
	switch (operator) {
		case "+":
			return (num1 + num2);
			break;
		case "-":
			return (num1 - num2);
			break;
		case "*":
			return (num1 * num2);
			break;
		case "/":
			return (num1 / num2);
			break;
	}
}

function refreshScreen() {
	screen.innerText = "";
}

function backButton() {
	back.addEventListener("click", () => {
		refreshScreen();
		displayValue = 0;
		num1 = null;
		num2 = null;
	});
}

function getValues() {
	for (let i = 0; i < calcNumButtons.length; i++) {
		calcNumButtons[i].addEventListener("click", () => {
			displayValue = calcNumButtons[i].innerText;
			screen.innerText += displayValue;
			displayValue = screen.innerText;
			if (num1 === null) {
				num1 = parseInt(displayValue);
			} else {
				num2 = parseInt(displayValue);
			}
			console.log(num1);
			console.log(num2);
		});
	}
	return displayValue;
}

function operatorKeyPressed() {
	for (let i = 0; i < operators.length; i++) {
		if (operators[i] != enterBack) {
			operators[i].addEventListener("click", () => {
				operator = operators[i].innerText;
				console.log(operator);
				refreshScreen();
			});
		}
	}
}

function equalsPressed() {
	equals.addEventListener("click", () => {
		refreshScreen();
		displayValue = operate(num1, operator, num2);
		screen.innerText += displayValue.toString();
		console.log(screen.innerText);
	});
	return displayValue;
}
getValues();
operatorKeyPressed();
backButton();
equalsPressed();
