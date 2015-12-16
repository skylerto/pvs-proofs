#! /usr/bin/env node

var proveit = require('../index');

console.log(proveit.get(process.argv[2] + '% Proven' ));
