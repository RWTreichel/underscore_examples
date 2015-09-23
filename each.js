var _ = {};
var sum = 0;

_.each = function (collection, iterator) {
  // If collection is an array...
  if (Array.isArray(collection)) {
    // Iterate over each element of the array
    for (var i = 0; i < collection.length; i++) {
      // For each element, call iterator(value, key, collection)
      iterator(collection[i], i, collection);
    }
  } 
  // If collection is an object...
  else {
    // Iterate over each property / key of the object
    for (var key in collection) {
      // For each property / key, call iterator(value, key, collection)
      iterator(collection[key], key, collection);
    }
  }
};

var test = {
  one: 1,
  two: 2,
  three: 3
};

var add = function(num) {
  sum += num;
};

_.each(test, add);
console.log(sum);