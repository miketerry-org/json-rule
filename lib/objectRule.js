// objectRule.js:

"use strict";

// load all necessary modules
const PropertyRule = require("./propertyRule");

class ObjectRule extends PropertyRule {
  // private values
  #propertyRules = undefined;

  constructor(name, title, required = true, propertyRules = []) {
    super("object", name, title, required);

    // ensure at least one property Ruleification is defined
    if (propertyRules.length === 0) {
      throw new Error(
        `The "${this.constructor.name}" must have at least one property Ruleification`
      );
    }

    // keep track of  the array of property Ruleifications
    this.#propertyRules = propertyRules;
  }

  check(data) {
    // if object Rule has a name then it is a nested property
    let isNested = this.name !== "";
    if (isNested) {
      data = data[this.name];
    }

    // loop thru all properties validating each property Rule
    let newData = {};
    this.#propertyRules.forEach((property) => {
      newData[property.name] = property.check(data);
    });
    return newData;
  }
}

// export object Rule class
module.exports = ObjectRule;
