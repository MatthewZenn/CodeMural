var freq = 0.05;
var amp = 100;

canvas.style.backgroundColor = "black";
ctx.fillStyle = "#DF77FF";

ctx.clearRect(0, 0, canvas.height, canvas.width);

function plot(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, 2, 0, 2 * Math.PI);
  ctx.fill();
  ctx.closePath();
}

for(i = 0; i < canvas.width; i+=20) {
  plot(i, canvas.height/2 + Math.sin(i*freq) * amp);
}