/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length === 1) return false;
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (["[", "(", "{"].includes(s[i])) {
      stack.push(s[i]);
    } else {
      const removed = stack.pop();
      if (!removed) return false;
      if (
        (s[i] !== "}" && removed === "{") ||
        (s[i] !== ")" && removed === "(") ||
        (s[i] !== "]" && removed === "[")
      ) {
        return false;
      }
    }
  }
  if (stack.length > 0) {
    return false;
  }

  return true;
};
