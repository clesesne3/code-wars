'use strict';

function validateUsr(username) {
  res = /[^a-z^\d^_]/g.test(username); // find any characters that break rules
  var len = username.length;
  if (res || len < 4 || len > 16) {return false;}

  else if (!res) {
    if (len > 3 && len < 16) {
      return true;
    }
  }
}