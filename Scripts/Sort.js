function quickSortAlgo(origArray) {
  if (origArray.length <= 1) {
  return origArray;
  } 
  else {
    var left = [];
    var right = [];
    var newArray = [];
    var pivot = origArray.pop();
    var length = origArray.length;

    for (var i = 0; i < length; i++) {
      if (origArray[i] <= pivot) {
        left.push(origArray[i]);
      } else {
      right.push(origArray[i]);
      }
    } 
    return newArray.concat(quickSortAlgo(left), pivot, quickSortAlgo(right));
  }
}

var myArray = [13, 50, 2, 45, -1, 74, 11, 26, 3242, 564,74 ,56 ,7565, 56, 7 ];
var arreySorted = quickSortAlgo(myArray);
console.log(arreySorted);