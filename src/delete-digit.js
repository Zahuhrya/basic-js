const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
var array = String(n).split('').map(Number)
return Math.max(...array.map((el,i)=>{
  var array2 = array.slice();
  array2.splice(i,1);
  return Number(array2.join(''))
}))
}

module.exports = {
  deleteDigit
};
