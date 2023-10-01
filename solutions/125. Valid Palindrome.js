/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s
    .split("")
    .filter((char) => /[A-Za-z0-9]/.test(char))
    .join("")
    .toLowerCase();
  return s === s.split("").reverse().join("");
};
