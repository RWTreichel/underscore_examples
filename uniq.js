var _ = {};

_.uniq = function(array) {
  // Try these examples with and without the sortedArray line commented out.
  // var sortedArray = array.sort();
  var results = [];

  for (var i = 0; i < array.length; i++){
    // This is how we "catch" the uniques: If there is a difference between the
    // current element and the next one, then we push the current element to results.
    if (array[i] !== array[i + 1]){
      results.push(array[i]);
    }
  }

  return results;
};

var numbers = [4,3,3,2,1]; // Should be [1, 2, 3, 4]
console.log(_.uniq(numbers)); // Works with or without sorting, purely by coincidence

var numbers2 = [2,1,2]; // Should be [1, 2]
console.log(_.uniq(numbers2)); // Needs sorting! The approach we're taking assumes that ALL differences
                               // between the current element and the next one identify a unique element.
                               // But this can only be true if the array is sorted. Try doing this particular
                               // example by hand to see why.

var numbers3 = [1, 2, 2]; // Should be [1, 2]
console.log(_.uniq(numbers3)); // If the array is sorted, then we can confidently assume that differences
                               // between elements signify a new unique item in the list. This is because
                               // all of the duplicates are bunched together by sorting.