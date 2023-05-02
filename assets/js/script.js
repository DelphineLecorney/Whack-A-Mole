const container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);

for (let i = 0; i < 12; i++) {
  const cercle = document.createElement("div");
  cercle.classList.add("cercle");
  container.appendChild(cercle);
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
setInterval(displayMoles, 1800);
