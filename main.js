let moment = require("moment")

let fecha = new moment("2020/08/03", "YYYY/MM/DD")

console.log(fecha.format("DD [de] MMMM YYYY"))