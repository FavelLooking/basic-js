const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  console.debug("members: " + members)
  if (!Array.isArray(members) || members.every(a => a === !Boolean(a) )) {
    return false;
  } 
  let filteredarr = members.filter(a => typeof a === 'string')
  
  console.debug(filteredarr.map(a => a.trim().toUpperCase().split('')[0]).sort((a,b)=>a.localeCompare(b)).join(''));
  return filteredarr.map(a => a.trim().toUpperCase().split('')[0]).sort((a,b)=>a.localeCompare(b)).join('')

}

module.exports = {
  createDreamTeam
};
