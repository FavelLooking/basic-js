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
  console.debug('n: ' + n)
  // let arr = String(n).split('')
  // console.debug('min:' + Math.min(...arr))
  // return +arr.filter(a => a > Math.min(...arr)).join('')
  let arr = String(n).split('')
  let realArr = [...arr];

  // console.debug('arr: ' + arr)
  let arrSort = arr.sort((a,b)=> a-b)
  // console.debug('arrSort: ' + arrSort)
  let index = realArr.indexOf(arrSort[0])
  // console.debug('realArr: ' + realArr)
  // console.debug('index: ' + index)

  // console.debug('arr: ' +   realArr)


  let partOne = String(n).slice(0,index);
  // console.debug('partOne: ' + partOne)
  let partTwo = String(n).slice(index+1, arr.length);
  // console.debug('partTwo: ' + partTwo)
  // console.debug('result: ' + partOne + partTwo)
  // console.debug('----------------------------')
  if(realArr[0] < realArr[1] && realArr[0] > realArr[2]){
    partOne = String(n).slice(1)
    console.debug(partOne)
    return +partOne
  }
  return +(partOne + partTwo);

}

module.exports = {
  deleteDigit
};
