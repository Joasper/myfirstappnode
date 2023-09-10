const yargs = require("yargs")
  .option("b", {
    alias: "base",
    demandOption: true,
    type: "number",
    describe: "Its a number",
  })
  .option("h", {
    alias: "hasta",
    demandOption: true,
    type: "number",
    default: 10,
    describe: "Its a number",
  })
  .option("l", {
    alias: "listar",
    demandOption: true,
    type: "boolean",
    default: false,
  }).argv;

module.exports = yargs;
