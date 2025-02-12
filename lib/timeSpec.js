// timeRule.js:

"use strict";

// load all necessary modules
const PropertyRule = require("./propertyRule");

class TimeRule extends PropertyRule {
  constructor(name, title, required, minTime = undefined, maxTime = undefined) {
    super("time", name, title, required, minTime, maxTime, undefined);
  }
}

// export the time Rule class
module.exports = TimeRule;
