'use strict';

function validatePIN (pin) {
  var codeFour = /^[\d]{4}$/g.test(pin);
  var codeSix = /^[\d]{6}$/g.test(pin);
  if (codeFour || codeSix) {return true;}
  else {return false;}
}