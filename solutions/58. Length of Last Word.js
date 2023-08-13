/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let word = s.split(" ").filter((word) => word !== "");
  return word[word.length - 1].length;
};
