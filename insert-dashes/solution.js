'use strict';

function insertDash(num) {
  var arr = String(num).split(''), newArr = [];
  arr.forEach(function(element, i) {
    newArr.push(element);
    if(arr[i] % 2 !== 0 && arr[i + 1] % 2 !== 0) {
      newArr.push('-');
    }
  });
  if(newArr[newArr.length - 1] == '-') {newArr.pop();}
  return newArr.join('');
}