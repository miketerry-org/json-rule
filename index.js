// index.js:

"use strict";

// load all necessary modules
const ArrayRule = require("./lib/arrayRule");
const BooleanRule = require("./lib/booleanRule");
const DateRule = require("./lib/dateRule");
const EmailRule = require("./lib/emailRule");
const EnumerationRule = require("./lib/enumerationRule");
const FloatRule = require("./lib/floatRule");
const IntegerRule = require("./lib/integerRule");
const ObjectRule = require("./lib/objectRule");
const PropertyRule = require("./lib/propertyRule");
const StringRule = require("./lib/stringRule");
const TimeRule = require("./lib/timeRule");
const TimestampRule = require("./lib/timestampRule");

// export all property rule  classes
module.exports = {
  ArrayRule,
  BooleanRule,
  DateRule,
  EmailRule,
  EnumerationRule,
  FloatRule,
  IntegerRule,
  ObjectRule,
  PropertyRule,
  StringRule,
  TimeRule,
  TimestampRule,
};
