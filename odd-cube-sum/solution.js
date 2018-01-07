'use strict';

function cubeOdd(arr) {
  var cubeArr = arr.map(num => {
    if (typeof(num) === 'number') {return Math.pow(num, 3);}
  });
  let sum = 0;
  for(var i = 0; i < cubeArr.length; i++) {
    if(cubeArr[i] % 2 !== 0 && typeof(cubeArr[i]) === 'number') {
      sum += cubeArr[i];
    } else if (typeof(cubeArr[i]) !== 'number') {
      sum = undefined;
      break;
    }
  }
  return sum;
}