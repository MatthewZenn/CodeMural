var freq = 0.05;
var amp = 100;

canvas.style.backgroundColor = "black";
ctx.lineWidth = 2;
ctx.strokeStyle = "#DF77FF";

ctx.moveTo(0, canvas.height/2);
ctx.clearRect(0, 0, canvas.height*2, canvas.width*2);
ctx.beginPath();
for (let i = 0; i < canvas.width; i++) {
    ctx.lineTo(i, canvas.height/2 + Math.sin(i*freq) * amp);
}
ctx.moveTo(0, canvas.height/2);
ctx.stroke();
ctx.closePath();
ctx.beginPath();
for (let i = 0; i < canvas.width; i++) {
    ctx.lineTo(i, canvas.height/2 + Math.cos(i*freq) * amp);
}
ctx.stroke();
ctx.closePath();
