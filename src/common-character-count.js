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
function getCommonCharacterCount(s1, s2) {
  let sortS1 = s1.split('').sort((a,b) => a.localeCompare(b));
  let sortS2 = s2.split('').sort((a,b) => a.localeCompare(b));
  let result = 0;

  for (let i = 0; i< sortS1.length; i += 1) {
    for (let j = 0; j< sortS2.length; j += 1) {
      if (sortS1[i] === sortS2[j]) {
        sortS1[i] = undefined;
        sortS2[j] = undefined;
        result++
      }
    }
  }
  return result
}

module.exports = {
  getCommonCharacterCount
};
