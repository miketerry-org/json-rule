// timestampRule.js:

"use strict";

// load all necesary modules
const PropertyRule = require("./propertyRule");

class TimestampRule extends PropertyRule {
  constructor(
    name,
    title,
    required,
    minTimestamp = undefined,
    maxTimestamp = undefined
  ) {
    super(
      "timestamp",
      name,
      title,
      required,
      minTimestamp,
      maxTimestamp,
      undefined
    );
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

// export the timestamp Rule class
module.exports = TimestampRule;
