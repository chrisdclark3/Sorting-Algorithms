arr = [7,2,5,9,10,1,3,4,6,8]

function double_selection_sort (arr) {
  var min = 0;
  var max = 0;
  for (var i = 0; i < arr.length; i++) {
    for (var j = i; j < arr.length; j++) {
      if (arr[j] > arr[max]) {
        max = j;
      }
      arr.swap(i, max);
      if (arr[j] < arr[min]) {
        min = j;
      }
      arr.swap(i, min);
    }
  }
  return arr;
}

Array.prototype.swap = function (i1, i2) {
  var temp = this[i1];
  this[i1] = this[i2];
  this[i2] = temp;
};

console.log(double_selection_sort(arr));