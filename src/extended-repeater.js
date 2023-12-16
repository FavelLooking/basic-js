const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  console.debug(`str: ${str}, options: ${options}`)
  let result = '';
  let {repeatTimes, separator, addition, additionRepeatTimes, additionSeparator} = options
  console.debug(`
                repeatTimes: ${repeatTimes}, 
                separator: ${separator}, 
                addition: ${addition}, 
                additionRepeatTimes: ${additionRepeatTimes}, 
                additionSeparator: ${additionSeparator}
  `)
  if (!Boolean(repeatTimes)) {
    repeatTimes = 1;
  }
  if (!Boolean(additionRepeatTimes)) {
    additionRepeatTimes = 1;
  }
  if (typeof addition === 'boolean' || typeof addition === 'object') {
    addition = String(addition)
  }
  
  if (repeatTimes) {
    for (let i = 0; i <repeatTimes; i +=1) {
      result +=String(str);
      if (Boolean(addition)) {
        if (!!additionSeparator) {
          for (let i = 0; i <additionRepeatTimes; i +=1) {
            result +=String(addition)
            if (i === additionRepeatTimes - 1){
              break;
            }
            result +=String(additionSeparator)
          }
        } else if (!additionSeparator && additionRepeatTimes > 1)
        ////////////////////////////////
        for (let i = 0; i <additionRepeatTimes; i +=1) {
          result +=String(addition);
        if (i === additionRepeatTimes - 1){
          break;
        }
          result += '|'
        }
        ////////////////////////////////
        else result +=String(addition);

      }
      if (i === repeatTimes - 1){
        break;
      }
      
      if (!!separator) {
        result +=separator;
      } 
      else
  
      result += '+'
    }
  }
  return result;
}

module.exports = {
  repeater
};
