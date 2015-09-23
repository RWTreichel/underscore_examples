var _ = {};

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

// Return all elements of an array that pass a truth test.
// "predicate" function
_.filter = function (array, test) {
  var results = [];

  // Iterate over each element of the array
  _.each(array, function (value, key, collection) {
    // Pass the current value through the test function
    // If test(value) returns true, add the value to a results array
    if (test(value)) {
      results.push(value);
    }
  });

  // When done iterating, return the results array
  return results;
};

var test = [1,2,3,4,5,6,7,8,9,10];

var results = _.filter(test, function (num) {
  return num % 2 === 0 ? true : false;
});

console.log(results); // [2, 4, 6, 8, 10]