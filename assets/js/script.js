const container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);

const scoreElement = document.createElement("div");
scoreElement.innerText = "Score: 0";
scoreElement.classList.add("score");
document.body.appendChild(scoreElement);

let score = 0;
let displayInterval;

for (let i = 0; i < 12; i++) {
  const cercle = document.createElement("div");
  cercle.classList.add("cercle");
  container.appendChild(cercle);
  cercle.addEventListener("click", (event) => {
    if (event.target.classList.contains('red')) {
      score++;
      scoreElement.innerText = `Score: ${score}`;
    }else{
      alert('Tu as loupé :(');
    }
  });
}

let nbCercle = 12;
let index = 0;
let speed = 800;

function displayMoles() {
  const cercles = container.querySelectorAll(".cercle");
  cercles.forEach((cercle) => {
    cercle.classList.remove('red');
  });

  const randomIndex = Math.floor(Math.random() * nbCercle);
  cercles[randomIndex].classList.add('red');
}

function startGame() {
  displayInterval = setInterval(displayMoles, speed);
}

function stopGame() {
  clearInterval(displayInterval);
}

function changeSpeed(speedValue) {
  if (speedValue === 'slow') {
    speed = 1500;
  } else if (speedValue === 'normal') {
    speed = 800;
  } else if (speedValue === 'fast') {
    speed = 400;
  }
  stopGame();
  startGame();
}

const startButton = document.createElement("button");
startButton.innerText = "Start";
startButton.classList.add("start");
startButton.addEventListener("click", startGame);
document.body.appendChild(startButton);

const stopButton = document.createElement("button");
stopButton.innerText = "Stop";
stopButton.classList.add("stop");
stopButton.addEventListener("click", stopGame);
document.body.appendChild(stopButton);

const speedButton = document.createElement("button");
speedButton.innerText = "Change Speed";
speedButton.classList.add("speed");
speedButton.addEventListener("click", () => {
  const speedChoice = prompt("Choose a speed (slow, normal, or fast):");
  changeSpeed(speedChoice);
});
document.body.appendChild(speedButton);