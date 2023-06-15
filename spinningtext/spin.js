const canvas = document.createElement('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);

const ctx = canvas.getContext('2d');

const fontSize = 80;
ctx.font = `${fontSize}px Arial`;
ctx.fillStyle = '#ffffff';
ctx.textAlign = 'center';

const x = canvas.width / 2;
const y = canvas.height / 2;

let angle = 0;
const rotationSpeed = 0.01;

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const newX = x + Math.cos(angle) * (canvas.width / 3);
  const newY = y + Math.sin(angle) * (canvas.height / 3);

  ctx.fillText('System.gc()', newX, newY);

  angle += rotationSpeed;

  requestAnimationFrame(animate);
}

animate();
