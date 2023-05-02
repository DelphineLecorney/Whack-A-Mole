const container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);

const scoreElement = document.createElement("div");
scoreElement.innerText = "Score: 0";
scoreElement.classList.add("score");
document.body.appendChild(scoreElement);

let score = 0;

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

function displayMoles() {
  const cercles = container.querySelectorAll(".cercle");
  cercles.forEach((cercle) => {
    cercle.classList.remove('red');
  });

  const randomIndex = Math.floor(Math.random() * nbCercle);
  cercles[randomIndex].classList.add('red');
}
setInterval(displayMoles, 800);
