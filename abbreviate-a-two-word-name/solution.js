'use strict';

function abbrevName(name){
    return `${name.split(' ')[0].slice(0,1).toUpperCase()}.${name.split(' ')[1].slice(0,1).toUpperCase()}`;
  }