// integerRule.js:

"use strict";

// load all necessay modules
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
}

// export the integer Rule class
module.exports = IntegerRule;
