/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let num = digits.join("");
  return (BigInt(num) + 1n).toString();
  num = parseInt(num) + 1;
  num = num.toString();
  return num.split("");
};

var plusOne = function (digits) {
  return (BigInt(digits.join("")) + 1n).toString().split("");
};

let digits = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3];

let result = plusOne(digits);

console.log(result);
