// stringRule.js:

"use strict";

// load all necesary modules
const PropertyRule = require("./propertyRule");

class StringRule extends PropertyRule {
  constructor(name, title, required, minLength = 0, maxLength = undefined) {
    super("string", name, title, required, minLength, maxLength, undefined);
  }
}

// export the string Rule class
module.exports = StringRule;
