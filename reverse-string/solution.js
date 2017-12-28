'use strict';

function solution(str){
  var newArr = [];
  for (var i = str.length - 1; i >= 0; i--) {
    newArr.push(str[i]);
  }
  return newArr.join('');
}