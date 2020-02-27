module.exports = function getSeason(date) {
  if (date == undefined) {
    return "Unable to determine the time of year!";
  } else {
    if (!(date instanceof Date) || Object.prototype.toString.call(date) !== '[object Date]') {
      throw new Error();
    } else {
      // seasons.forEach(it => console.log(it.end.getMonth()));
      var month = date.getMonth();
      if ([11, 0, 1].includes(month)) {
        return "winter";
      } else if ([2, 3, 4].includes(month)) {
        return "spring";
      } else if ([5, 6, 7].includes(month)) {
        return "summer";
      } else
        return "autumn";
    }
  }
};