let rs = require('readline-sync');

let numero = parseInt(rs.question("Digite um numero: "))

if ((numero % 2) === 0){
    console.log("Número PAR")
}else (console.log("Número ÍMPAR"))