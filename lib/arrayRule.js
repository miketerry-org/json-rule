// arrayRule.js:

"use strict";

// load all necessary modules
const PropertyRule = require("./propertyRule");

class ArrayRule extends PropertyRule {
  constructor(
    name,
    title,
    required,
    minlength = undefined,
    maxLength = undefined
  ) {
    super("array", name, title, required, minLength, maxLength);
  }

  check(data) {
    // call ancestor method to validate and return value
    const value = super.check(data);

    // ensure the value is an array
    if (!value || typeof value !== "array") {
      throw new Error(`"${this.label} must be type of "Array"`);
    }

    // ensure value has length greater than or equal to mim
    if (this.min && value.length < this.min) {
      this.tooSmall(value);
    }

    // ensure value has length less than or equal maximum
    if (this.max && value.length > this.max) {
      this.tooBig(value);
    }
  }
}

// export the array rule  class
module.exports = ArrayRule;
