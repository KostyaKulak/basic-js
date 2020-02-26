module.exports = function repeater(str, options) {
    var res = [];
    var additions = [];
    var k = options.additionRepeatTimes == undefined ? 1 : options.additionRepeatTimes;
    if ("addition" in options) {
        for (let i = 0; i < k; i++) {
            var s = options.addition == null ? "null" : options.addition;
            additions.push(s);
        }
    }
    var addition = additions.join(options.additionSeparator);
    var n = options.repeatTimes == undefined ? 1 : options.repeatTimes;
    for (let i = 0; i < n; i++) {
        var s = str == null ? "null" : str;
        res.push(s + addition);
    }
    var separator = options.separator == undefined ? "+" : options.separator;
    return res.join(separator);
}
