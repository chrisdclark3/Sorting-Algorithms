Array.prototype.radix_sort_proto = function(mod, div, place, biggest) {

  var sorted = [[],[],[],[],[],[],[],[],[],[]];
  
  if (typeof(biggest) === 'undefined') {
    biggest = this[0];
  }
  if (typeof(place) === 'undefined') {
    place = 0;
  }
  if (typeof(mod) === 'undefined') {
    mod = 10;
  }
  if (typeof(div) === 'undefined') {
    div = 1;
  }

  if (place == biggest.toString().length - 1) {
    return this;
  }
  
  for (var i = 0; i < this.length; i++) {
    if (place == 0) { if (this[i] > biggest) { biggest = this[i];} }
    var current_digit = Math.floor((this[i] % mod)/div);
    sorted[current_digit].push(this[i]);
  }

  mod = mod * 10;
  div = div * 10;
  place = place + 1;
  var new_arr = [];
  
  for (var i = 0; i < sorted.length; i++) {
    new_arr = new_arr.concat(sorted[i]);
  }
  return new_arr.radix_sort_proto(mod, div, place, this[this.indexOf(biggest)]);
};

console.log(([15, 1273, 453, 234, 0345, 2345, 6]).radix_sort_proto());

// initially, I built the recursive solution assuming the numbers would be passed 
// in an array of strings of equal length

function radix_sort_basic(arr, place) {
  var sorted = [[],[],[],[],[],[],[],[],[],[]];
  if (place == arr[0].length) {
    return arr;
  }
  for (var i = 0; i < arr.length; i++) {
    sorted[(arr[i][arr[i].length-1-place])].push((arr[i]));
  }
  var new_arr = [];
  for (var i = 0; i < sorted.length; i++) {
    new_arr = new_arr.concat(sorted[i]);
  }
  return radix_sort_basic(new_arr, (place + 1));  
};

console.log(radix_sort_basic(['0015', '1273', '0453', '0234', '0345', '2345', '0006'], 0));

