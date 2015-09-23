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

// Return the results of applying an iterator to each element.
_.map = function (collection, iterator) {
  var results = [];

  // Iterate over the collection
  _.each(collection, function (value, key, collection) {
    // At each value of the collection, call iterator on the current value
    // Save the resultant value in a results array
    results.push(iterator(value));
  });

  // When iteration is complete, return an array of all resultant values
  return results;
};

var test = [1,2,3];

var add3 = function (num) {
  return num + 3;
};

// "Unit" tests
// console.log(_.map(test, add3)); // [4, 5, 6]
// console.log(test);

var testString = "hello world";
var answerString = "Hello World";

function LetterCapitalize(str) { 
  // First, identify the "words" of the sentence. Separated by spaces.
  var words = str.split(' ');

  // Iterate over the words collection
  // Capitalize the first letter of each word in the collection
  var capitalizedWords = _.map(words, function (word) {
    return word[0].toUpperCase() + word.slice(1);
  });

  // When done iterating, return a new string with the modified words 
  return capitalizedWords.join(' ');    
}

console.log(LetterCapitalize(testString)); // 'Hello World'
// "Unit" test
console.log(LetterCapitalize(testString) === answerString); // should return true if working