module.exports = class DepthCalculator {
    calculateDepth(arr) {
        return arr.length == 0 ? 1 : arr.map(it => !(it instanceof Array || typeof it == "array") ? 1 : this.calculateDepth(it) + 1)
            .reduce((a, b) => a > b ? a : b);
    }
};