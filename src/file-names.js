const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names ) {
  let result =[];
  let repeatCount = 1
  console.debug(`${names}:  + ${names}, ${typeof names}, ${Array.isArray(names)}`)
  for (let i = 0; i < names.length; i +=1) {
    repeatCount = 1;
    console.debug('names: ' + 'i=',i)
    for (let j = 1; j < names.length; j +=1 ) {
      console.debug('names: ' + 'i=',i,'j=',j)
      if (names[i] === names[j] && i !== j) {
        names[j] = names[i] + `(${repeatCount})`
        repeatCount++ 
      }
    }
  } return names;
}

module.exports = {
  renameFiles
};
//npm run test test/file-names.test.js