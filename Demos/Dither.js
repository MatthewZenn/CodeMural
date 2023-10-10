var imgdata = ctx.getImageData(0, 0, 640, 426); // get data
var data = imgdata.data; // bytes

// 4-bit: rrr ggg bb
for(var i = 0; i < data.length; i += 4) {
  data[i]     = nearest(data[i],     4); // set value to nearest of 4 possibilities
  data[i + 1] = nearest(data[i + 1], 4);
  data[i + 2] = nearest(data[i + 2], 2);
}

ctx.putImageData(imgdata, 0, 0); // put image data to canvas

function nearest(x, a) { // will round down to nearest of a possibilities
                         // in the range 0 <= x <= 255
        return Math.floor(x / (255 / a)) * (255 / a);
}