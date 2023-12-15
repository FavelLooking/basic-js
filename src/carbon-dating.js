const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  //console.debug("sample " + sampleActivity);
  //console.debug("HL" + HALF_LIFE_PERIOD);
  if (typeof sampleActivity !== "string" || isNaN(+sampleActivity) || !Boolean(sampleActivity) || sampleActivity <= 0 || sampleActivity >= 15){
    return false
  }
  let time;
  let k = 0.693/HALF_LIFE_PERIOD;
  //console.debug("k: " + k);
  time =  Math.log(15/sampleActivity) / k;
  //console.debug("time: " + Math.ceil(time));
  //console.debug("-------------------------")
  return Math.ceil(time);
}

module.exports = {
  dateSample
};
