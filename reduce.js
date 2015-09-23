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

// Reduces an array or object to a single value by repetitively calling
// iterator(accumulator, item) for each item. accumulator should be
// the return value of the previous iterator call.
//
// You can pass in a starting value for the accumulator as the third argument
// to reduce. If no starting value is passed, the first element is used as
// the accumulator, and is never passed to the iterator. In other words, in
// the case where a starting value is not passed, the iterator is not invoked
// until the second element, with the first element as it's second argument.
//
// Example:
  // var numbers = [1,2,3]
  // var sum = _.reduce(numbers, function(total, number){
  //   return total + number
  // }, 0) // should be 6
//
//   var identity = _.reduce([5], function(total, number){
//     return total + number * number
//   }) // should be 5, regardless of the iterator function passed in
//          No accumulator is given so the first element is used.
_.reduce = function (collection, iterator, startingValue) {
  var accumulator = startingValue; // TODO: What to do is startingValue is undefined?
      // If startingValue is provided, set accumulator's initial value to startingValue
      // If startingValue is not provided, then set accumulator's initial value to the first element in the collection

  // Iterate over the collection
  _.each(collection, function (value, key, collection) {
    // Update the accumulator using a call to iterator(accumulator, value)
    accumulator = iterator(accumulator, value);
  });
  
  // Return the accumulator's final value
  return accumulator;
};

// var numbers = [1,2,3];

// var sum = _.reduce(numbers, function(total, number){
//   return total + number;
// }, 0);

// console.log(sum);


function VowelCount(str) { 
  var numberOfVowels = 0;

  var vowels = {
    a: 'a',
    e: 'e',
    i: 'i',
    o: 'o',
    u: 'u'
  };

  // Iterate over the characters of the string
  var letters = str.split('');

  // If that character is a vowel, add 1 to numberOfVowels
  numberOfVowels = _.reduce(letters, function (vowelTotal, letter) {
    return vowels[letter] ? vowelTotal + 1 : vowelTotal;
  }, numberOfVowels);

  // Return numberOfVowels
  return numberOfVowels;
}

console.log(VowelCount("coderbyte")); // 3