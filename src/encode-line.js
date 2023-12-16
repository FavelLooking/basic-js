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
  console.debug('str: ' + str)
  let arr = str.split('');
  console.debug('arr: ' + arr)
  let count = 0;
  let result = 0;
  for (let i = 0; i <arr.length; i += 1) {
    if (arr[i] === arr[i+1]) {
      console.debug('yes')
      console.debug('\\/')
      console.debug('i: ' + i)
      count += 1;
      console.debug('result 1 loop: ' + result)
    } else { count ++;
      result += count;
      count = 0
      console.debug('no')
      result+= arr[i]
      console.debug('result 2 loop: ' + typeof result)
    }
  }
  console.debug(result)
  console.debug('----------------------' +typeof result)
  return result.split('').filter((a)=> a!=='1').join('');
}

module.exports = {
  encodeLine
};
