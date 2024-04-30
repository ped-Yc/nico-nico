#!/usr/bin/env node

const { program } = require("commander");

program
  .version(require("../package.json").version)
  .usage("<command>[options]")
  .command("init", "generate a new project from a tempate")
  .command("list", "list available official templates")
  .command("build", "prototype a new project")
  .command("create", "(for v3 warning only)");
program.parse(process.argv);
