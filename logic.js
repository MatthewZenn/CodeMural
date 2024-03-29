var canvas = 0;
var ctx = 0;
const realButton = document.getElementById("picture");
const image = document.getElementById('image');
const sleep = ms => new Promise(r => setTimeout(r, ms));

function createCanvas(xs, ys) {
  canvas = document.createElement('canvas');
  ctx = canvas.getContext('2d')

  canvas.id = "canvas";
  canvas.width = xs;
  canvas.height = ys;

  document.getElementById('canvasarea').appendChild(canvas);
}

console.log = function(message) {
  alert(message);
};

document.getElementById("logo").addEventListener('click', () => {
  window.location.reload();
});

var x = 0;
var x2 = 0;
var y = 0;
var z = 0;
var errs = [];

document.getElementById("run").addEventListener('click', function() {
  console.clear();
  errs = [];
  document.getElementById("logger").value = "";

  document.getElementById("error").innerHTML = '<span id="status"></span> ' + errs.length + ' Errors';
  document.getElementById("status").style.background = "#C77DFF";

  navigator.clipboard.writeText(document.getElementById("editor").value);
  window.addEventListener("error", errorlog);
  eval(document.getElementById("editor").value);

    function errorlog(Error) {
      if (Error) {
        errs.push(Error);
        document.getElementById("logger").value += Error.message + '\n';
        document.getElementById("error").innerHTML = '<span id="status"></span> ' + errs.length + ' Errors';
        document.getElementById("status").style.background = "#FF5A5A";
      }
      else {
        return;
      }
    }
});

document.getElementById("edit").addEventListener('click', function() {
    if (x == 0) {
        document.getElementById("textcontainer").style.display = "block";
        document.getElementById("edit").style.backgroundColor = "#C77DFF";
        document.getElementById("edit").style.color = "white";
        document.getElementById("filename").style.color = "white";
        document.getElementById("header").style.borderBottom = "1px solid #C77DFF";
        x = 1;

        document.getElementById("canvasarea").style.display = "none";
        document.getElementById("view").style.backgroundColor = "#141414";
        document.getElementById("view").style.color = "grey";
        document.getElementById("filename2").style.color = "grey";
        x2 = 0;
    }
    else {
        document.getElementById("textcontainer").style.display = "none";
        document.getElementById("edit").style.backgroundColor = "#141414";
        document.getElementById("edit").style.color = "grey";
        document.getElementById("filename").style.color = "grey";
        document.getElementById("header").style.borderBottom = "1px solid rgb(50, 50, 50)";
        x = 0;
    }
});

document.getElementById("view").addEventListener('click', function() {
  if (x2 == 0) {
      document.getElementById("canvasarea").style.display = "block";
      document.getElementById("view").style.backgroundColor = "#C77DFF";
      document.getElementById("view").style.color = "white";
      document.getElementById("filename2").style.color = "white";
      document.getElementById("header").style.borderBottom = "1px solid #C77DFF";
      x2 = 1;

      document.getElementById("textcontainer").style.display = "none";
      document.getElementById("edit").style.backgroundColor = "#141414";
      document.getElementById("edit").style.color = "grey";
      document.getElementById("filename").style.color = "grey";
      x = 0;
  }
  else {
      document.getElementById("canvasarea").style.display = "none";
      document.getElementById("view").style.backgroundColor = "#141414";
      document.getElementById("view").style.color = "grey";
      document.getElementById("filename2").style.color = "grey";
      document.getElementById("header").style.borderBottom = "1px solid rgb(50, 50, 50)";
      x2 = 0;
  }
});

document.getElementById("error").addEventListener('click', function() {
  if (y == 0) {
    document.getElementById("log").style.display = "block"
    y = 1;
  }
  else {
    document.getElementById("log").style.display = "none"
    y = 0;
  }
});

document.getElementById("quick-scripts").addEventListener('click', function() {
  if (z == 0) {
    document.getElementById("scpmenu").style.display = "block"
    z = 1;
  }
  else {
    document.getElementById("scpmenu").style.display = "none"
    z = 0;
  }
});

document.getElementById("place").addEventListener('click', function() {
  realButton.click();
});

realButton.addEventListener("change", function() {
  const file = this.files[0];

  if (file) {
      const reader = new FileReader();

      reader.addEventListener("load", function() {
        image.setAttribute('src', this.result);
      });
      reader.readAsDataURL(file);
  }
});

image.addEventListener('load', e => {
  createCanvas(image.width, image.height);
  document.getElementById('xcor').value = image.width;
  document.getElementById('ycor').value = image.height;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(image, 0, 0, image.width, image.height);
});

document.getElementById("new").addEventListener('click', function() {
  var xsize = document.getElementById('xcor').value;
  var ysize = document.getElementById('ycor').value;
  document.getElementById("editor").value = "";
  createCanvas(xsize, ysize);
});

const textarea = document.getElementById('editor');
const numbers = document.getElementById("numbers");

textarea.addEventListener("keyup", (e) => {
  const num = e.target.value.split("\n").length;
  numbers.innerHTML = Array(num).fill("<span></span>").join("");
  
});
textarea.addEventListener("keydown", (event) => {
  if (event.key === "Tab") {
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    textarea.value =
      textarea.value.substring(0, start) +
      "\t" +
      textarea.value.substring(end);
    event.preventDefault();
  }
});