// arrayRule.js:

"use strict";

// load all necessary modules
const PropertyRule = require("./propertyRule");

class ArrayRule extends PropertyRule {
  #elementRule = undefined;

  constructor(name, title, Rule, required, min = undefined, max = undefined) {
    super("array", name, title, required, min, max);
    this.#elementRule = Rule;
  }

  check(data) {
    throw new Error(
      `"ArrayRule.check" function will be implemented in a later release!`
    );
  }
}

// export the array rule  class
module.exports = ArrayRule;
