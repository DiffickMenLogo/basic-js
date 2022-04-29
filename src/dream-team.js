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
  
  if(!Array.isArray(members)){
    return false;
  }
  
  let result = '';
  for(let i = 0; i < members.length; i++){
    if(typeof members[i] === 'string'){
      if(members[i][0] === ' '){
        members[i] = members[i].trim();
      }
      members[i] = members[i].toUpperCase();
    }
    if(typeof members[i] === 'array'){
      members[i] = members[i].flat();
    }
  }
  let sorted = members.sort();
  
  for(let i = 0; i < sorted.length; i++){
    if(typeof sorted[i] !== 'string'){
      continue;
    }
    result += sorted[i][0].toUpperCase();
  }
  
  return result;
}

module.exports = {
  createDreamTeam
};
