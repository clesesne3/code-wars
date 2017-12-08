'use strict';

function validateUsr(username) {
  res = /^[a-z\d_]{4,16}$/g.test(username); //search for lowercase char, numbers, or underscore, as well as string length range 4-16
  return res;
}