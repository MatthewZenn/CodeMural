canvas.style.backgroundColor = "black";
ctx.fillStyle = "white";

ctx.clearRect(0, 0, canvas.height, canvas.width);

function plot() {
  x2 = Math.floor(Math.random()*canvas.width);
  y2 = Math.floor(Math.random()*canvas.height);
  ctx.beginPath();
  ctx.arc(x2, y2, 2, 0, 2 * Math.PI);
  ctx.fill();
  ctx.closePath();
}

for(i = 0; i < 500; i++) {
  plot();
}