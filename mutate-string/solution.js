'use strict';
function mutateMyStrings(stringOne, stringTwo){
  var arrOne = stringOne.split(''), arrTwo = stringTwo.split('');

  function changeLetter(arr,index,newLetter) {
    arr[index] = newLetter;
    return arr.join('');
  }

  var newStr = arrOne.join('') + '\n';

  arrOne.forEach(function(elem, index) {
    if (arrOne[index] !== arrTwo[index]) {
      changeLetter(arrOne,index,arrTwo[index]);
      newStr += arrOne.join('') + '\n';
    }
  });
  return newStr;
}