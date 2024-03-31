let num1;
let num2;
let operator;
let displayValue;
const calcNumButtons = document.querySelector(".calcNumButtons").children;
const screen = document.querySelector("#calcScreen");

function operate(num1, operator, num2) {

}

function displayValues() {
	for (let i = 0; i < calcNumButtons.length; i++) {
		calcNumButtons[i].addEventListener("click", () => {
			displayValue = calcNumButtons[i].innerText;
			screen.innerText += displayValue;
		});
	}
	//the innerText of the button is what is displayed

}
displayValues();