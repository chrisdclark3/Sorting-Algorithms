function radix_sort(arr) {

  var place = 0;
  var mod = 10;
  var div = 1;
  var biggest = arr[0];

  while (place < biggest.toString().length) {
    var sorted = [[],[],[],[],[],[],[],[],[],[]];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > biggest) {
        biggest = arr[i];
      }
      var current_digit = Math.floor((arr[i] % mod) / div);
      sorted[current_digit].push(arr[i]);
    }
    var new_arr = [];
    for (var i = 0; i < sorted.length; i++) {
      new_arr = new_arr.concat(sorted[i]);
    }
    arr = new_arr;
    mod *= 10;
    div *= 10;
    place++;
  }
  return arr;
};

console.log(radix_sort([15, 1273, 0453, 234, 345, 2345, 6]));