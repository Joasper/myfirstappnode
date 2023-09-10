const fs = require("fs");
const colors = require("colors");

const TablaMultiplicacion = async (number, opcion, opcion3) => {
  console.clear();

  console.log("===================".green);
  console.log(`Tabla del ${number}`.green);
  console.log("===================".green);
  let salida = "";

  for (let i = 0; i <= opcion3; i++) {
    salida += `La multiplicacion de ${number} x ${i} es: ${i * number}\n`;
  }

  fs.writeFile(`./result/tabla del ${number}.txt `, salida, (err) => {
    if (err) throw new Error("No se guardo".red);
  });

  if (opcion) {
    console.log(salida);
    console.log("File is Saved".green);
  } else {
    console.log("File is Saved".green);
  }
};

module.exports = {
  TablaMultiplicacion,
};
