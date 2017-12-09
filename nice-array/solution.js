'use strict';
function isNice(arr){
  var passed = 0;
  arr.forEach(function(num, index) {
    var plus = num + 1, minus = num - 1;
    for (var i = 0; i < arr.length; i++) {
      if (i !== index && (arr[i] === plus || arr[i] === minus)) {
        passed++;
        break;
      }
    }
  });
  if (passed < arr.length || arr.length === 0) {return false;}
  else {return true;}
}