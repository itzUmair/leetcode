/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  const needlelength = needle.length;
  for (let i = 0; i < haystack.length; i++) {
    let curWord = haystack.split("").splice(i, needlelength).join("");
    if (curWord.legnth < needlelength) return -1;
    if (curWord === needle) {
      return i;
    }
  }
  return -1;
};
