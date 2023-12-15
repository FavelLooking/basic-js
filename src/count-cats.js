const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let count = 0;
  for(let i = 0; i < matrix.length; i +=1 ) {
    for(let j = 0; j < matrix[i].length; j +=1 ) {
      // if (Array.isArray(matrix[i][j])) {
      //   console.debug(matrix[i][j])
      //   countCats(matrix[i][j])
      // }
      if (typeof matrix[i][j] === "string" && matrix[i][j].includes('^^') && matrix[i][j].length === 2) {
        count ++
      }
      //console.debug(matrix);
    }
  }
  return count;
}

module.exports = {
  countCats
};
