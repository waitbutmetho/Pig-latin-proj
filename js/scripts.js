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
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  for (var i = 0; i < vowels.length; i++) {
    if (englishWord[0] === vowels[i]) {
      var startsWithVowel = true;
      break;
    }
  }

    if (startsWithVowel){
      var translatedWord = englishWord;
    }else{
    var translatedWord = englishWord.slice(1) + englishWord[0];
    }
    return translatedWord + 'ay';
};
