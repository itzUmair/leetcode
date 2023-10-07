/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const result = s.split(" ").map((word) => word.split("").reverse().join(""));
  return result.join(" ");
};
