let rs = require('readline-sync');

let nascimento = parseInt(rs.question("Qual e o seu ano de nascimento? "))

let ano = 2022;

if(ano - nascimento >= 16){
    console.log("Eba! Você está APTO para votar esse ano!!")
}else{(console.log("Infelizmente você está INAPTO para votar este ano."))}