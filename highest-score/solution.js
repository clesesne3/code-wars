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
  // store words and scores in object
  for (word in xArr) {
    console.log(xArr[word]);
    var currentWord = xArr[word];
    var currentPoints = wordPoints(currentWord)
    obj[currentWord] = currentPoints; 
  }
  // filter out highest scoring word
  var highWord =  Object.keys(obj).reduce((a,b) => {
    return obj[a] > obj[b] ? a : b;
  });
  
  // return earliest/first word if multiple high scores
  for (prop in obj) {
    if (obj[prop] === obj[highWord]) {
      return prop;
      break;
    }
  }
}