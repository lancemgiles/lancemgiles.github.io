let num1 = null;
let num2 = null;
// let operator = {
// 	"+": function(a, b) {return a + b},
// 	"-": function(a, b) {return a - b},
// 	"*": function(a, b) {return }
// }
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

function operate(num1, operator, num2) {
	switch (operator) {
		case "+":
			return num1 + num2;
			break;
		case "-":
			return num1 - num2;
			break;
		case "*":
			return num1 * num2;
			break;
		case "/":
			return num1 / num2;
			break;
	}
}

function refreshScreen() {
	screen.innerText = "";
}

function backButton() {
	back.addEventListener("click", () => refreshScreen());
	displayValue = 0;
}

function displayValues() {
	for (let i = 0; i < calcNumButtons.length; i++) {
		calcNumButtons[i].addEventListener("click", () => {
			displayValue = calcNumButtons[i].innerText;
			screen.innerText += displayValue;
			displayValue = screen.innerText;
			console.log(displayValue);
		});
	}
	return displayValue;
}

function operatorKeyPressed() {
	for (let i = 0; i < operators.length; i++) {
		if ((operators[i] != enter) || (operators[i] != back)) {
			operators[i].addEventListener("click", () => {
				operator = operators[i].innerText;
				num1 = parseInt(displayValue);
				refreshScreen();
				displayValues();
				num2 = displayValue;
			});
		} else if (operators[i] == back) {
			backButton();
		} else if (operators[i] == enter) {
			equalsPressed();
		}
	}

	return operator;
}

function getNum2() {
	displayValues();
}

function equalsPressed() {
	equals.addEventListener("click", () => {
		operate(num1, operator, num2)
	});
}



displayValues();
operatorKeyPressed();
