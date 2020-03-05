"use strict";

const fs = require("fs");
const helpers = require("./helpers");

console.log(helpers);

const n = helpers.randomInt(10,20);

console.log(n);

console.log(helpers.dateFormat(new Date()));
