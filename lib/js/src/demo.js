// Generated by BUCKLESCRIPT VERSION 1.9.3, PLEASE EDIT WITH CARE
'use strict';

var Caml_int32 = require("bs-platform/lib/js/caml_int32.js");

function isVowel(theChar) {
  var switcher = theChar - 97 | 0;
  if (switcher > 24 || switcher < 0) {
    return /* false */0;
  } else {
    switch (switcher) {
      case 1 : 
      case 2 : 
      case 3 : 
      case 5 : 
      case 6 : 
      case 7 : 
      case 9 : 
      case 10 : 
      case 11 : 
      case 12 : 
      case 13 : 
      case 15 : 
      case 16 : 
      case 17 : 
      case 18 : 
      case 19 : 
      case 21 : 
      case 22 : 
      case 23 : 
          return /* false */0;
      case 0 : 
      case 4 : 
      case 8 : 
      case 14 : 
      case 20 : 
      case 24 : 
          return /* true */1;
      
    }
  }
}

isVowel(/* "a" */97);

isVowel(/* "b" */98);

var area = Caml_int32.imul;

var data = "Good morning!";

function getTuple() {
  return /* tuple */[
          1,
          "hello"
        ];
}

var isMorning = /* true */1;

exports.isVowel   = isVowel;
exports.area      = area;
exports.isMorning = isMorning;
exports.data      = data;
exports.getTuple  = getTuple;
/*  Not a pure module */
