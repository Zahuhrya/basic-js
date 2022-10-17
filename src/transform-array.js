const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(array) {
  let index = array.findIndex(String);
  if (array[index]==='--discard-next'){
    delete array[index]
    delete array[index+1]
    return array
  }
  if (array[index]==='--discard-prev'){
    delete array[index]
    delete array[index-1]
    return array
  }
  if (array[index]==='--double-next'){
    array[index] = array[index+1]
  }
  if (array[index]==='--double-prev'){
    array[index] = array[index-1]
  }
}

module.exports = {
  transform
};
