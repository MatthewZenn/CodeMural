const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
const sleep = ms => new Promise(r => setTimeout(r, ms));

var x = 0;

document.getElementById("run").addEventListener('click', function() {
    navigator.clipboard.writeText(document.getElementById("editor").value);
    ctx.clearRect(0, 0, canvas.width*4, canvas.height*4);
    eval(document.getElementById("editor").value);
});

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