module.exports = function transform(arr) {
    if (!Array.isArray(arr)) {
        throw new Error();
    } else {
        var res = [];
        for (let i = 0; i < arr.length; i++) {
            var current = arr[i];
            var type = typeof current;
            switch (current) {
                case "--discard-next":
                    i++;
                    continue;
                case "--discard-prev":
                    res.pop();
                    break;
                case "--double-next":
                    if (arr[i + 1] != undefined) {
                        res.push(arr[i + 1]);
                    }
                    break;
                case "--double-prev":
                    if (arr.length != 0 && arr[i - 1] != undefined) {
                        res.push(arr[i - 1]);
                    }
                    break;
                default:
                    res.push(current)
                    break;
            }
        }
        return res;
    }
};
