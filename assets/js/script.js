
const container = document.createElement('div');
container.classList.add('container');
document.body.appendChild(container);

for (let i = 0; i < 12; i++) {
  const cercle = document.createElement('div');
  cercle.classList.add('cercle');
  container.appendChild(cercle);
}
