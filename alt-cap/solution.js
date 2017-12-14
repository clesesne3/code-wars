'use strict';
function capitalize(s){
  var result = [];
  function capEven(arr) {
    for (var i = 0; i < arr.length; i++) {
      if(i % 2 === 0) {
        arr[i] = arr[i].toUpperCase();
      }
    }
    result.push(arr.join(''));
  }

  function capOdd(arr) {
    for (var i = 1; i < arr.length; i++) {
      if(i % 2 !== 0) {
        console.log(i);
        arr[i] = arr[i].toUpperCase();
      }
    }
    result.push(arr.join(''));
  }
  capEven(s.split(''));
  capOdd(s.split(''));
  return result;
};