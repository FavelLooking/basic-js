const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  console.debug("matrix " + matrix[0])
  console.debug("matrix " + matrix[1])
  console.debug("matrix " + matrix[2])
  let count = 0;
  let newMatrix = matrix.map(row => [...row]) 
  

  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix[i].length; j += 1) {
  
      if (i >= 0 && i < matrix.length && j + 1 >= 0 && j + 1 < matrix[i].length && matrix[i][j + 1]) {
        count++;
        console.debug(`i=${i} j=${j}`+ " count 1: " + count);      
      }  
      if (i+1 >= 0 && i+1 < matrix.length && j + 1 >= 0 && j + 1 < matrix[i].length && matrix[i+1][j+1]) {
        count++;
        console.debug(`i=${i} j=${j}`+ " count 2: " + count);      
      }
      if (i+1 >= 0 && i+1 < matrix.length && j >= 0 && j < matrix[i].length && matrix[i+1][j]) {
        count++;
        console.debug(`i=${i} j=${j}`+ " count 3: " + count);     
      }
      if (i+1 >= 0 && i+1 < matrix.length && j - 1 >= 0 && j - 1 < matrix[i].length && matrix[i+1][j-1]) {
        count++;
        console.debug(`i=${i} j=${j}`+ " count 4: " + count);    
      }
      if (i >= 0 && i < matrix.length && j - 1 >= 0 && j - 1 < matrix[i].length && matrix[i][j-1]) {
        count++;
        console.debug(`i=${i} j=${j}`+ " count 5: " + count);         
      }
      if (i-1 >= 0 && i-1 < matrix.length && j-1 >= 0 && j-1 < matrix[i].length && matrix[i-1][j-1]) {
        count++;
        console.debug(`i=${i} j=${j}`+ " count 6: " + count); 
      }
      if (i-1 >= 0 && i-1 < matrix.length && j >= 0 && j < matrix[i].length && matrix[i-1][j]) {
        count++;
        console.debug(`i=${i} j=${j}`+ " count 7: " + count); 
      }
      if (i-1 >= 0 && i-1 < matrix.length && j+1 >= 0 && j+1 < matrix[i].length && matrix[i-1][j+1]) {
        count++;
        console.debug(`i=${i} j=${j}`+ " count 8: " + count); 
      }
      newMatrix[i][j] = count;
      count = 0;
      console.debug("matrix[" + i + "][" + j + "]: " + newMatrix[i][j]);
    }
  }
  //console.debug("matrix" + matrix)
  console.debug('--------------------------------------')
  console.debug("matrix " + newMatrix[0])
  console.debug("matrix " + newMatrix[1])
  console.debug("matrix " + newMatrix[2])
  return newMatrix
}

module.exports = {
  minesweeper
};
