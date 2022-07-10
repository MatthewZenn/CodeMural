const realButton = document.getElementById("picture");
const fakeButton = document.getElementById("open");
const image = document.getElementById("image");
const canvas1 = document.getElementById("canvas1");
const ctx = canvas1.getContext("2d");
const canvas2 = document.getElementById("canvas2");
const ctx1 = canvas2.getContext("2d");

/**
 * Maps the button for selecting an image.
 */
fakeButton.addEventListener("click", function() {
    realButton.click()
});


/**
 * Handler for selecting an image.
 */
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
    ctx.clearRect(0, 0, canvas1.width, canvas1.height);
    ctx.drawImage(image, 0, 0, 200, 200);
    var imgdata = ctx.getImageData(0, 0, 200, 200); // get data
    var data = imgdata.data; // bytes

      // 4-bit: rrr ggg bb
    for(var i = 0; i < data.length; i += 4) {
      data[i]     = nearest(data[i],     4); // set value to nearest of 4 possibilities
      data[i + 1] = nearest(data[i + 1], 4);
      data[i + 2] = nearest(data[i + 2], 2);
    }

    ctx1.putImageData(imgdata, 0, 0); // put image data to canvas

    function nearest(x, a) { // will round down to nearest of a possibilities
                         // in the range 0 <= x <= 255
        return Math.floor(x / (255 / a)) * (255 / a);
    }
    console.log(ctx.getImageData(0, 0, 200, 200));
});
