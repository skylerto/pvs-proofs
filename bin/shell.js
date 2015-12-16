#! /usr/bin/env node

var proveit = require('../pvs');

console.log(proveit.getReport(proveit.clean(proveit.prove(process.argv[2]))) + " left to prove");
