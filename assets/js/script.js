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
    if (event.target.style.backgroundColor === "red") {
      score++;
      scoreElement.innerText = `Score: ${score}`;
    }else{
      alert('Loupé');
    }
  });
}

let nbCercle = 12;
let index = 0;

function displayMoles() {
  const cercles = container.querySelectorAll(".cercle");
  cercles.forEach((cercle) => {
    cercle.style.backgroundColor = "white";
  });

  const randomIndex = Math.floor(Math.random() * nbCercle);
  cercles[randomIndex].style.backgroundColor = "red";
}
setInterval(displayMoles, 1300);
