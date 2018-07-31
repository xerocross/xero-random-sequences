var randomInteger = function(min, max) {
  var scale = max - min;
  return Math.round(Math.random()*scale);
}
var swap = function(arr, left, right) {
  var placeholder = arr[left];
  arr[left] = arr[right];
  arr[right] = placeholder;
}

var generateRandomPermutation = function(length) {
  var arr = [];
  for (var i = 0; i < length; i++) {
    arr[i] = i;
  }
  var numSwaps = 5*length;
  for (i = 0; i < numSwaps; i++) {
    var left = randomInteger(0, length - 1);
    var right = randomInteger(0, length - 1);
    swap(arr, left, right);
  }
  return arr;
}

var getRandomPermutations1 = function() {
  var len = 20;
  var permutations = [];
  for (var i = 0; i < 70; i++) {
    permutations.push(generateRandomPermutation(len));
  }
  return permutations;
}

module.exports.default = {
  randomInteger : randomInteger,
  generateRandomPermutations : generateRandomPermutations
}
