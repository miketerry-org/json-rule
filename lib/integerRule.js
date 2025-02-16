// integerRule.js:

"use strict";

// load all necessary modules
const PropertyRule = require("./propertyRule");

class IntegerRule extends PropertyRule {
  constructor(
    name,
    title,
    required,
    minInteger = undefined,
    maxInteger = undefined
  ) {
    super("integer", name, title, required, minInteger, maxInteger, undefined);
  }

  check(data) {
    // call ancestor function to check and return value
    const value = super.check(data);

    // ensure value is greater than or equal to mim
    if (this.min && value < this.min) {
      this.tooSmall(value);
    }

    // ensure value is less than or equal maximum
    if (this.max && value > this.max) {
      this.tooBig(value);
    }
  }
}

// export the integer Rule class
module.exports = IntegerRule;
