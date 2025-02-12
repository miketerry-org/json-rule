// floatRule.js:

"use strict";

// load all necessary modules
const PropertyRule = require("./propertyRule");

class FloatRule extends PropertyRule {
  constructor(name, title, required, minFloat, maxFloat) {
    super("float", name, title, required, minFloat, maxFloat, undefined);
  }
}

// export the float Rule class
module.exports = FloatRule;
