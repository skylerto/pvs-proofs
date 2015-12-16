#! /usr/bin/env node

var proveit = require('./lib/proveit');

console.log(proveit.getReport(proveit.clean(proveit.prove(process.argv[2]))) + " left to prove");
