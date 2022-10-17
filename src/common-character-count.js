const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1,s2) {
  let s3 = s1.split("").sort();
  let s4 = s2.split("").sort();
  let res = 0;
  let i = s3.length, j = s4.length, three = [];
while (i > 0 && j > 0) {
    i--;
    j--;
    if (s3[i] > s4[j]) j++;
    else if (s3[i] < s4[j]) i++;
    else res++;
}
return res
  
}

module.exports = {
  getCommonCharacterCount
};
