'use strict';
function formatWords(words){
  var str = '';

  // if array is empty or parameter is null
  if (!words || words.length === 0) {return '';}

  // remove all empty/non-word elements
  words = words.filter(function(elem) {
    return elem !== '';
  });

  for (var j = 0; j < words.length; j++) {
    if (words.length === 1) {str += words[j];}

    else if (words.length === 2) {str = words[0] + ' and ' + words[1];}

    else if (words.length > 2 && j < words.length - 1) {str += words[j] + ', ';}

    else if (words.length > 2 && j === words.length - 1) {
      str = str.replace(/,([^,]*)$/,'$1'); // remove last occurrence of comma
      str += 'and ' + words[j];
    }
  }
  return str;
}