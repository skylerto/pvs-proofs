#! /usr/bin/env node

var proveit = require('../pvs');

console.log(proveit.get(process.argv[2] + '% Proven' ));
