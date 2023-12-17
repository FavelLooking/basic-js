const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  //console.debug(`e-mail: ${email} type: ${typeof email}, Array: ${Array.isArray(email)}`)
  let index = email.lastIndexOf('@');
  let trimMail = email.slice(index+1)
  // console.debug(`index: ${index+1}`);
  // if (index === -1) {
    return trimMail;
  // }
  // console.debug(`trimMail: ${trimMail}`);
  // getEmailDomain(trimMail)
  
}

module.exports = {
  getEmailDomain
};
