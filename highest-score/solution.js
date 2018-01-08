'use strict';

function high(x){
  //var alpha = 'z'; //a = 97, z = 122...subtract 96 for 1 to 26
  var obj = {};
  var xArr = x.split(' ');
  function wordPoints(word) {
    var points = 0;
    for (char in word) {
      points += (word.charAt(char).charCodeAt(0) - 96);
    }
    return points;
  }
  for (word in xArr) {
    console.log(xArr[word]);
    var currentWord = xArr[word];
    var currentPoints = wordPoints(currentWord)
    obj[currentWord] = currentPoints; 
  }
  return Object.keys(obj).reduce((a,b) => {
    return obj[a] > obj[b] ? a : b;
  });
}