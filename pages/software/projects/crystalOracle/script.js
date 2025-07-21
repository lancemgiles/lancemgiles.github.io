const theOrb = document.querySelector("#theOrb");
const answer = document.querySelector("#result");

function getReading() {
  theOrb.addEventListener("click", () => {
    answer.innerText = getAnswer();
  });
}

function getAnswer() {
  if ((Math.floor(Math.random() * 100) % 2) === 0) {
    return "Yes."
  } else if ((Math.floor(Math.random() * 100) % 5) === 0) {
    return "Hmm... Ask again later."
  } else {
    return "No."
  }
}
getReading();