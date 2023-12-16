const dino = document.getElementById('dino');
const obstacle = document.getElementById('obstacle');
const gameOver = document.getElementById('gameOver');
const scoreElement = document.getElementById('score');

let isJumping = false;
let score = 0;

document.addEventListener('keydown', jump);

function jump(event) {
  if (event.code === 'Space' && !isJumping) {
    isJumping = true;
    let position = 0;
    const jumpInterval = setInterval(() => {
      if (position >= 150) {
        clearInterval(jumpInterval);
        isJumping = false;
      }
      position += 30;
      dino.style.bottom = position + 'px';
    }, 20);
  }
}

function generateObstacle() {
  const obstacleInterval = setInterval(() => {
    const obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue('right'));
    if (obstacleLeft < 0) {
      score++;
      scoreElement.textContent = score;
    }
    if (obstacleLeft > 0 && obstacleLeft < 60 && isJumping) {
      clearInterval(obstacleInterval);
      gameOver.style.display = 'block';
    }
    obstacle.style.right = obstacleLeft - 5 + 'px';
  }, 20);
}

generateObstacle();
