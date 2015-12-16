#! /usr/bin/env node

var proveit = require('../pvs');

console.log(proveit.get(proveit.clean(proveit.prove(process.argv[2]))) + "% Proven");
