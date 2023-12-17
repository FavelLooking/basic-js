const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  console.debug(`arr: ${arr}`)
  let sortArr = arr.filter(a=>a>0).sort((a,b) => a-b)
  console.debug(`sortArr: ${sortArr}`)
  for (let i = 0; i < sortArr.length; i += 1) {
    for (let j = 0; j < arr.length; j += 1) {
      console.debug(`I'm in`)
      if (arr[j] !== -1) {
        arr[j] = sortArr[i]
        i++
      }
    }
  }
  return arr
}

module.exports = {
  sortByHeight
};
