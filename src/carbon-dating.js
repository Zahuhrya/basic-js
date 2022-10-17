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
function dateSample(sampleActivity = "no-value") {
  const modernActivity = 15;
  const halfLifePeriod = 5730;
  if (sampleActivity === "no-value") return false;
  if (typeof sampleActivity !== "string") return false;
  const sampleActivityNumeric=parseFloat(sampleActivity);
  if (isNaN(sampleActivityNumeric)) return false;
  if (sampleActivityNumeric>modernActivity) return false;
  if (sampleActivityNumeric=== 0 || sampleActivityNumeric < 0) return false;
  const k= 0.693/ halfLifePeriod;
  return Math.ceil (Math. log(modernActivity / sampleActivityNumeric) / k);
}

module.exports = {
  dateSample
};
