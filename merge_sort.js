// sort through an array of 10,000 items using merge sort. Calculate how long this sorting took.
function random_arr(num, range_max){
  var arr = [];
  for(var i = 0; i < num; i++) {
    arr.push(Math.floor(Math.random() * range_max));
  }
  return arr;
}

Array.prototype.merge_sort = function() {
  if (this.length == 1) {
    return this;
  }
  var mid_index = Math.floor(this.length/2);
  var left = this.slice(0,mid_index);
  var right = this.slice(mid_index);
  return merge( left.merge_sort(), right.merge_sort() );
};

function merge(left, right) {
  var merged = [];
  while (left.length > 0 && right.length > 0) {
    if (left[0] <= right[0]) {
      merged.push(left[0]);
      left.shift();
    } else {
      merged.push(right[0]);
      right.shift();
    }
  }
  merged = merged.concat(left).concat(right);
  return merged;
}

arr = random_arr(10000, 100);

var start = Date.now();
arr.merge_sort();
var end = Date.now();

console.log(end - start, "time it took");

