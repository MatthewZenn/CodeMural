var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');

var x = 0;

document.getElementById("run").addEventListener('click', function() {
    ctx.clearRect(0, 0, canvas.width*2, canvas.height*2);
    eval(document.getElementById("editor").value);
})

document.getElementById("edit").addEventListener('click', function() {
    if (x == 0) {
        document.getElementById("editor").style.display = "none";
        document.getElementById("edit").innerHTML = "&#xE70F;"
        x = 1;
    }
    else {
        document.getElementById("editor").style.display = "block";
        document.getElementById("edit").innerHTML = "&#xE890;"
        x = 0;
    }
});