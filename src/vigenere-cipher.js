const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

class VigenereCipheringMachine {
    constructor(direct) {
        this.direct = direct == undefined ? true : direct;
    }

    encrypt(message, key) {
        this.verify(message, key);
        var n = message.replace(/[^a-zA-Z]/g, '').length;
        while (key.length < n) {
            key += key;
        }
        if (key.length > n) {
            key = key.substring(0, n);
        }
        var i = 0, j = 0;
        var res = "";
        message = message.toUpperCase();
        key = key.toUpperCase();
        while (i < message.length) {
            if (ALPHABET.includes(message[i])) {
                var index = (ALPHABET.indexOf(message[i]) + ALPHABET.indexOf(key[i - j])) % ALPHABET.length;
                var temp = ALPHABET[index];
                res += temp;
            }
            else {
                res += message[i];
                j++;
            }
            i++;
        }
        return this.direct ? res : res.split("").reverse().join("");
    }

    decrypt(message, key) {
        this.verify(message, key);
        var n = message.replace(/[^a-zA-Z]/g, '').length;
        while (key.length < n) {
            key += key;
        }
        if (key.length > n) {
            key = key.substring(0, n);
        }
        var i = 0, j = 0;
        var res = "";
        message = message.toUpperCase();
        key = key.toUpperCase();
        while (i < message.length) {
            if (ALPHABET.includes(message[i])) {
                var index = (ALPHABET.indexOf(message[i]) - ALPHABET.indexOf(key[i - j]) + ALPHABET.length) % ALPHABET.length;
                var temp = ALPHABET[index];
                res += temp;
            }
            else {
                res += message[i];
                j++;
            }
            i++;
        }
        return this.direct ? res : res.split("").reverse().join("");
    }

    verify(message, key) {
        if (message == undefined || key == undefined || typeof message != "string" || typeof message != "string") {
            throw new Error();
        }
    }
}

module.exports = VigenereCipheringMachine;
