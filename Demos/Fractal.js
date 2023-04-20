const maxlevel = 5;
const branches = 2;
ctx.strokeStyle = "yellowgreen";
canvas.style.backgroundColor = "black";
ctx.lineWidth = 2;

ctx.translate(canvas.width/2, canvas.height/2);

const angle = Math.PI * 2 * 0.95;

function drawLine(level) {
  if(level > maxlevel) return;

  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(300, 0);
  ctx.stroke();

  for(let i = 1; i < branches + 1; i++){
    ctx.save();
    ctx.translate(300 * i / (branches + 1), 0);
    ctx.scale(0.5, 0.5);
    ctx.save();

    ctx.rotate(angle);
    drawLine(level + 1);
    ctx.restore();
    ctx.save();

    ctx.rotate(-angle);
    drawLine(level + 1);
    ctx.restore();

    ctx.restore();
  }
}

for(let i = 0; i < 9; i++){
drawLine(0);
ctx.rotate(Math.PI * 2 / 9);
}