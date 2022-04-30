const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain : [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if(value == null) {
      this.chain.push(`( null )`);
      return this;
    }
    if(value == undefined) {
      this.chain.push(`( undefined )`);
      return this;
    }
    this.chain.push(`( ${value.toString()} )`);
    return this;
  },
  removeLink(position) {
    position--;
    if(!Number.isInteger(position) || position < 0 || position >= this.chain.length) {
      this.chain = [];
      throw new Error('You can\'t remove incorrect link!');
    }
    this.chain.splice(position, 1);
    return this;
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },
  finishChain() {
    let res = this.chain.join('~~');
    this.chain = [];
    return res;
  }
};

module.exports = {
  chainMaker
};
