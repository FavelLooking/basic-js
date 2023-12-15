const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(/*domains*/) {
  // let result = {};
  // console.debug(domains);
  // let stat = domains.map(a => a.split('.').map(a=>'.'+a))
  // stat = stat.flat()
  // result[stat[0]] = 1;
  // console.debug(result);
  throw new NotImplementedError('Not implemented');
}

module.exports = {
  getDNSStats
};
