

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
