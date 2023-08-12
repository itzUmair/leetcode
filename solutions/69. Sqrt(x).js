/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  // using Babylonian method
  let sqrtGuess = x;
  if (x == 0) return 0;
  let accuracy = 20; // can be adjusted
  for (let i = 0; i < accuracy; i++) {
    sqrtGuess = (sqrtGuess + x / sqrtGuess) / 2;
  }
  return Math.floor(sqrtGuess);
};
