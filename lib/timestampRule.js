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
}

// export the timestamp Rule class
module.exports = TimestampRule;
