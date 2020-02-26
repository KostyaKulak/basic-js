const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (sampleActivity == undefined
    || !(typeof sampleActivity === 'string' || sampleActivity instanceof String)
    || isNaN(sampleActivity)
    || new Number(sampleActivity).valueOf() > 15
    || new Number(sampleActivity).valueOf() < 1) {
    return false;
  } else {
    var k = HALF_LIFE_PERIOD / 0.693;
    var log = MODERN_ACTIVITY / sampleActivity;
    var res = Math.log(log) * k;
    return res % 1 == 0 ? res : (res >> 0) + 1;
  }
};
