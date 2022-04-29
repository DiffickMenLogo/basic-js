const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '';
  if(str == ''){
    return '';
  }
  let count = 1;
  let prev = str[0];
  for (let i = 1; i < str.length; i++) {
    if (prev === str[i]) {
      count++;
    } else {
      result += (count === 1 ? '' : count) + prev;
      count = 1;
    }
    prev = str[i];
  }
  result += (count === 1 ? '' : count) + prev;
  return result;
  
}

module.exports = {
  encodeLine
};
