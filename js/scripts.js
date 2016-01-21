// Example document ready function and form submit function w/ event handler to prevent default

// $(document).ready(function() {
//
//   $("form").submit(function(event){
//
//     event.preventDefault();
//   });
//
// });
var pigLatin = function(englishWord){
  var splitAt = indexOfFirstVowel(englishWord);
  return englishWord.slice(splitAt) + englishWord.slice(0, splitAt) + "ay";
};

var stringToArray = function(str){
  return str.split(' ');
};
var arrayToPigLatin = function(stringArray){
  var pigLatinArray = [];
  stringArray.forEach(function(word) {
    pigLatinArray.push(pigLatin(word));
  });

  return pigLatinArray;
};
var hasConsonantAt = function(word, position) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  for (var i = 0; i < vowels.length; i++) {
    if (word[position] === vowels[i]) {
      return false;
    }
  }
  return true;

};

var indexOfFirstVowel = function(word) {
  var index = -1;
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var letters = word.split("");

  for (var i = 0; i < letters.length; i++) {
    var letter = letters[i];
    for (var j = 0; j < vowels.length; j++) {
      var vowel = vowels[i];
      if (letters[i] === vowels[j]) {
      return i;
      }
    }
  }
};
