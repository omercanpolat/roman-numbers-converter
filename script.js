"use strict";

const check = document.querySelector(".check");
const result = document.querySelector(".roman-number");
let num = 0;

window.onload = function () {
  document.querySelector(".number-entered").focus();
};

check.addEventListener("click", function (e) {
  e.preventDefault();
  let num = Number(document.querySelector(".number-entered").value);

  if (!num) {
    alert("Please enter a number!");
    result.textContent = "";
  } else if (num < 0 || num > 3000) {
    alert("The number must be between 1 and 3000");
    result.textContent = "";
  } else {
    result.textContent = convertToRoman(num);
    e.target.closest("form").reset();
  }
});

function convertToRoman(num) {
  var roman = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  var str = "";

  for (var i of Object.keys(roman)) {
    var q = Math.floor(num / roman[i]);
    num -= q * roman[i];
    str += i.repeat(q);
  }
  return str;
}

// const num = +prompt("Please enter a number to convert to Roman Numerals:");
