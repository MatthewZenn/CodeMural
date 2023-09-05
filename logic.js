const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
const realButton = document.getElementById("picture");
const image = document.getElementById('image');
const sleep = ms => new Promise(r => setTimeout(r, ms));

console.log = function(message) {
  alert(message);
};

document.getElementById("logo").addEventListener('click', () => {
  window.location.reload();
});

var x = 0;
var y = 0;
var errs = [];

document.getElementById("run").addEventListener('click', function() {
  console.clear();
  errs = [];
  document.getElementById("logger").value = "";

  document.getElementById("error").innerHTML = '<span id="status"></span> ' + errs.length + ' Errors';
  document.getElementById("status").style.background = "#5AFF83";

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
        document.getElementById("editor").style.display = "none";
        document.getElementById("toolbar").style.display = "none";
        document.getElementById("edit").innerHTML = "&#xE70F;"
        x = 1;
    }
    else {
        document.getElementById("editor").style.display = "block";
        document.getElementById("toolbar").style.display = "block";
        document.getElementById("edit").innerHTML = "&#xE890;"
        x = 0;
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
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(image, 0, 0, 1920, 1080);
});

document.getElementById("new").addEventListener('click', function() {
  ctx.clearRect(0, 0, canvas.width*4, canvas.height*4);
  canvas.style.backgroundColor = "transparent";
  document.getElementById("editor").value = "";
});

