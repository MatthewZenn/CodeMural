var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');

document.getElementById("run").addEventListener('click', function() {
    ctx.clearRect(0, 0, canvas.height, canvas.width);
    eval(document.getElementById("editor").value);
})