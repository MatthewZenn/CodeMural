var freq = 1;
var amp = 1;
canvas.addEventListener('mousemove', onMouseUpdate, false);
canvas.style.backgroundColor = "black";
ctx.lineWidth = 2;

function onMouseUpdate(e){
    freq = e.clientX;
    amp = e.clientY;
    ctx.clearRect(0, 0, canvas.height*2, canvas.width*2);
    ctx.beginPath();
    ctx.strokeStyle = "#DF77FF";
    ctx.moveTo(0, canvas.height/2);
    for (let i = 0; i < canvas.width; i++) {
        ctx.lineTo(i, canvas.height/2 + Math.sin(i*freq/10000) * amp/5);
    }
    ctx.stroke();
    ctx.closePath();
}
