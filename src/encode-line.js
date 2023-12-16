const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str.length === 0) {
    return '';
  }
  let arr = str.split('');
  let count = 0;
  let result = 0;
  for (let i = 0; i <arr.length; i += 1) {
    if (arr[i] === arr[i+1]) {
      count += 1;
    } else { count ++;
      result += count;
      count = 0
      result+= arr[i]
    }
  }
  return result.split('').filter((a)=> a!=='1').join('');
}

module.exports = {
  encodeLine
};
