/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

// coded by me
var addBinary = function (a, b) {
  let carry = 0;
  let result = [];
  let a2 = a.split("").reverse();
  let b2 = b.split("").reverse();
  let d1, d2;
  let maxlength = Math.max(a2.length, b2.length);

  for (let i = 0; i < maxlength; i++) {
    d1 = a2[i];
    d2 = b2[i];

    if (i === 0) {
      if (d1 === d2 && d1 === "1") {
        result.push(0);
        carry = 1;
      } else if (d1 === "1" && d2 === "0") {
        result.push(1);
      } else if (d1 === "0" && d2 === "1") {
        result.push(1);
      } else {
        result.push(0);
      }
    } else {
      if (d1 === d2 && d1 === "1" && carry === 1) {
        result.push(1);
        carry = 1;
      } else if (d1 === "1" && d2 === "0" && carry === 1) {
        result.push(1);
        carry = 1;
      } else if (d1 === "0" && d2 === "1" && carry === 1) {
        result.push(1);
        carry = 1;
      } else if (d1 === "0" && d2 === "1" && carry === 0) {
        result.push(1);
        carry = 0;
      } else if (d1 === "1" && d2 === "0" && carry === 0) {
        result.push(1);
        carry = 0;
      } else if (d1 === d2 && d1 === "0" && carry === 1) {
        result.push(1);
        carry = 0;
      } else if (d1 === d2 && d1 === "1" && carry === 0) {
        result.push(0);
        carry = 1;
      } else if (d1 === d2 && d1 === "0" && carry === 0) {
        result.push(0);
        carry = 0;
      } else {
        if (d1 !== undefined && d1 === "1" && carry === 1) {
          result.push(0);
          carry = 1;
        } else if (d1 !== undefined && d1 === "0" && carry === 1) {
          result.push(1);
          carry = 0;
        } else if (d1 !== undefined && d1 === "1" && carry === 0) {
          result.push(1);
          carry = 0;
        } else if (d1 !== undefined && d1 === "0" && carry === 0) {
          result.push(0);
          carry = 0;
        }
        if (d2 !== undefined && d2 === "1" && carry === 1) {
          result.push(0);
          carry = 1;
        } else if (d2 !== undefined && d2 === "0" && carry === 1) {
          result.push(1);
          carry = 0;
        } else if (d2 !== undefined && d2 === "1" && carry === 0) {
          result.push(1);
          carry = 0;
        } else if (d2 !== undefined && d2 === "0" && carry === 0) {
          result.push(0);
          carry = 0;
        }
      }
    }
  }
  if (carry !== 0) {
    result.push(carry);
  }
  return result.reverse().join("");
};

// after some research found this concise version
var addBinary = function (a, b) {
  let carry = 0;
  let result = [];

  const a2 = a.split("").reverse();
  const b2 = b.split("").reverse();
  const maxLength = Math.max(a2.length, b2.length);

  for (let i = 0; i < maxLength; i++) {
    const d1 = parseInt(a2[i]) || 0;
    const d2 = parseInt(b2[i]) || 0;

    const sum = d1 + d2 + carry;
    result.push(sum % 2);
    carry = Math.floor(sum / 2);
  }

  if (carry !== 0) {
    result.push(carry);
  }

  return result.reverse().join("");
};
