canvas.style.backgroundColor = "black";

ctx.clearRect(0, 0, canvas.height, canvas.width);

function plot() {
  x2 = Math.floor(Math.random()*canvas.width);
  y2 = Math.floor(Math.random()*canvas.height);
  ctx.beginPath();
  ctx.arc(x2, y2, 2, 0, 2 * Math.PI);
  ctx.fill();
  ctx.closePath();
}

function random_rgba() {
var o = Math.round, r = Math.random, s = 255;
return 'rgb(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ')';
}

for(i = 0; i < 500; i++) {
  random_rgba();
  var color = random_rgba();
  ctx.fillStyle = color;
  plot();
}