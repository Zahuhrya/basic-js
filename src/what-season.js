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
function getSeason(i = 'no-value') {
  if (i === 'no-value') return 'Unable to determine the time of year!';

  if(i instanceof Date){
    if (Object.prototype.toString.call(i) !== '[object Date]') throw new Error('Invalid date!');

    let month = i.getMonth();

    if (month<=1){
      return "winter"
    }
    if (month>1 && month<=4){
      return "spring"
    }
    if (month>=5 && month<8){
      return "summer"
    }
    if (month>=8 && month<11){
      return "autumn"
    }
    if(month>=11){
      return 'winter'
    }
  }

  throw new Error('Invalid date!');

}

module.exports = {
  getSeason
};
