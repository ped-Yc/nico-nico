#! /usr/bin/env node

const chalk = import('chalk')

console.log();
console.log(
  `  ` +
  chalk.bold.yellow('nico create') +
  `is a Nico-Nico CLI` +
  require('../package.json').version +
  '.'
);


