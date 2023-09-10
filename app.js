const yargs = require("./config/yarngs");
const { TablaMultiplicacion } = require("./src/Multiplicar");

try {
  TablaMultiplicacion(yargs.b, yargs.l, yargs.h);
  console.log(yargs.h);
} catch (error) {
  throw error;
}
