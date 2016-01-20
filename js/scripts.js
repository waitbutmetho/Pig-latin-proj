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
    if (englishWord[0] === 'a' || englishWord[0] === 'e' || englishWord[0] === 'i' || englishWord[0] === 'o' || englishWord[0] === 'u'){
return englishWord + "ay";
    }else{
    return  englishWord.slice(1) + englishWord[0] + 'ay'
    }

};
