/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  strs = strs.sort();
  if (strs.length === 1) return strs[0];
  let prefix = strs[0][0];

  const smallestStrLength = Math.min(...strs.map((str) => str.length));

  if (smallestStrLength === 0) return "";

  for (let i = 0; i < smallestStrLength; i++) {
    for (let j = 0; j < strs.length; j++) {
      if (strs[j][i] !== prefix[i]) {
        if (i === 0) return "";
        return prefix.substring(0, prefix.length - 1);
      }
    }
    if (strs[0][i + 1]) {
      prefix += strs[0][i + 1];
    }
  }
  return prefix;
};
