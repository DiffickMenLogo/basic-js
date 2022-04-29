const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  // let month = date.getMonth();
  // if(month < 12 && month > 8){
  //   return 'autumn';
  // }
  // if(month < 6 && month > 2){
  //   return 'spring';
  // }
  // if(month < 9 && month > 5){
  //   return 'summer';
  // }
  // return 'winter'
}

module.exports = {
  getSeason
};
