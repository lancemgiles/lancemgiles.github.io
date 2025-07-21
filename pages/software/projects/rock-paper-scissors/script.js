const rock = document.querySelector("#rock");
const rockImg = "./images/rock.png";
const paper = document.querySelector("#paper");
const paperImg = "./images/paper.png";
const scissors = document.querySelector("#scissors");
const scissorsImg = "./images/scissors.png";
let outcome = document.querySelector(".result");
let computerImg = document.querySelector("#computerImg");
const playerScoreBoard = document.querySelector("#playerScore");
const computerScoreBoard = document.querySelector("#computerScore");
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
	const choice = ['rock', 'paper', 'scissors'];
	const random = Math.floor(Math.random() * choice.length);
	let result = choice[random];
	if (result == choice[0]) {
		computerImg.src = rockImg;
	} else if (result == choice[1]) {
		computerImg.src = paperImg;
	} else if (result == choice[2]) {
		computerImg.src = scissorsImg;
	}
	return result;
}

function playRound(playerSelection, computerSelection) {
	if (playerSelection == computerSelection) {
		return "Draw!";
	} else if (playerSelection == "rock" && computerSelection == 'scissors') {
		playerScore++;
		return "You win! Rock beats scissors.";
	} else if (playerSelection == "paper" && computerSelection == "rock") {
		playerScore++;
		return "You win! Paper beats rock.";
	} else if (playerSelection == "scissors" && computerSelection == "paper") {
		playerScore++;
		return "You win! Scissors beats paper.";
	} else {
		computerScore++;
		return "Computer wins!";
	}
}

function updateScores() {
	playerScoreBoard.textContent = playerScore;
	computerScoreBoard.textContent = computerScore;
}

rock.addEventListener("click", () => {
	let result = playRound("rock", getComputerChoice());
	outcome.textContent = result;
	updateScores();
});

paper.addEventListener("click", () => {
	let result = playRound("paper", getComputerChoice());
	outcome.textContent = result;
	updateScores();
});

scissors.addEventListener("click", () => {
	let result = playRound("scissors", getComputerChoice());
	outcome.textContent = result;
	updateScores();
});