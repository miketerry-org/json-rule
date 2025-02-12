// boolean.test.js:

"use strict";

// load all necessary modules
const assert = require("assert");
const { BooleanRule } = require("../index.js");

const Rule = new BooleanRule("active", "Active", true);
let data = {};
let value = undefined;

test("BooleanRule undefined", () => {
  assert.throws(() => {
    data.active = undefined;
    value = Rule.check(data);
  });
});

test("BooleanRule null", () => {
  assert.throws(() => {
    data.active = null;
    value = Rule.check(data);
  });
});

test("BooleanRule missing", () => {
  assert.throws(() => {
    data = {};
    value = Rule.check(data);
  });
});

test("BooleanRule true", () => {
  data.active = true;
  value = Rule.check(data);
  assert.strictEqual(value, true);
});

test("BooleanRule false", () => {
  data.active = false;
  value = Rule.check(data);
  assert.strictEqual(value, false);
});

test("Boolean 0 number", () => {
  data.active = 0;
  value = Rule.check(data);
  assert.strictEqual(value, false);
});

test("BooleanRule 1 number", () => {
  data.active = 1;
  value = Rule.check(data);
  assert.strictEqual(value, true);
});

test("BooleanRule invalid number", () => {
  assert.throws(() => {
    data.active = 2;
    value = Rule.check(data);
  });
});

test("BooleanRule Yes string", () => {
  data.active = "Yes";
  value = Rule.check(data);
  assert.strictEqual(value, true);
});

test("BooleanRule No string", () => {
  data.active = "No";
  value = Rule.check(data);
  assert.strictEqual(value, false);
});

test("BooleanRule Y string", () => {
  data.active = "Y";
  value = Rule.check(data);
  assert.strictEqual(value, true);
});

test("BooleanRule N string", () => {
  data.active = "N";
  value = Rule.check(data);
  assert.strictEqual(value, false);
});

test("BooleanRule true string", () => {
  data.active = "True";
  value = Rule.check(data);
  assert.strictEqual(value, true);
});

test("BooleanRule false string", () => {
  data.active = "False";
  value = Rule.check(data);
  assert.strictEqual(value, false);
});

test("BooleanRule 1 string", () => {
  data.active = "1";
  value = Rule.check(data);
  assert.strictEqual(value, true);
});

test("BooleanRule 0 string", () => {
  data.active = "0";
  value = Rule.check(data);
  assert.strictEqual(value, false);
});

test("BooleanRule x string", () => {
  assert.throws(() => {
    data.active = "x";
    value = Rule.check(data);
  });
});
