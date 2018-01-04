'use strict';

function find_average(array) {
  return array.reduce((a, b) => {return a + b;}, 0) / array.length;
}