#!/usr/bin/env node

const yargs = require("yargs");
const { inquirerPrompt } = require("./inquirer");

yargs.command(
  ["create", "c"],
  "create a template!!!",
  (yargs) => {
    yargs.option("name", {
      alias: "n",
      demandOption: true,
      describe: "模板名称",
      type: "string",
    });
  },
  (argv) => {
    inquirerPrompt(argv).then((answers) => {
      console.log(answers);
    });
  }
).argv;

console.log("welcome to nico!");
console.log('https://github.com/nico-cli/nico');

console.log('nico-cli init')

console.log('nico-cli create')
