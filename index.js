// index.js:

// load all necessary modules
const PropertyRule = require("./lib/propertyRuleRule");
const ObjectRuleRule = require("./lib/objectRuleRule");
const ArrayRuleRule = require("./lib/arrayRuleRule");
const BooleanRuleRule = require("./lib/booleanRuleRule");
const DateRuleRule = require("./lib/dateRuleRule");
const EmailRuleRule = require("./lib/emailRuleRule");
const EnumerationRuleRule = require("./lib/enumerationRuleRule");
const FloatRuleRule = require("./lib/floatRuleRule");
const IntegerRuleRule = require("./lib/integerRuleRule");
const StringRuleRule = require("./lib/stringRuleRule");
const TimeRuleRule = require("./lib/timeRuleRule");
const TimestampRuleRule = require("./lib/timestampRuleRule");

// export all property rule  classes
module.exports = {
  ArrayRuleRule,
  BooleanRuleRule,
  DateRuleRule,
  EmailRuleRule,
  EnumerationRuleRule,
  FloatRuleRule,
  IntegerRuleRule,
  ObjectRuleRule,
  PropertyRuleRule,
  StringRuleRule,
  TimeRuleRule,
  TimestampRuleRule,
};
