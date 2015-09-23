var _ = {};

// Like first, but for the last elements. If n is undefined, return just the
// last element.
_.last = function (array, n) {
  var len = array.length;

  if (n > len) {
    return array.slice();
  }

  return n === undefined ? array[len - 1] : array.slice(len - n);
};

var test = [1,2,3];

console.log(_.last(test));