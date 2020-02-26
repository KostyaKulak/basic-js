const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    if (!(typeof position == "number")) {
      this.chain = [];
      throw new Error();
    }
    var index = position - 1;
    if (index < 0 || index > this.chain.length - 1) {
      this.chain = [];
      throw new Error();
    }
    this.chain = this.chain.filter((it, i) => i != index);
    return this;
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },
  finishChain() {
    var res = this.chain.map(it => "( " + it + " )").join("~~");
    this.chain = [];
    return res;
  }
};

module.exports = chainMaker;
