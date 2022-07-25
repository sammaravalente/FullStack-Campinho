let rs = require ('readline-sync');

let anonasc = parseInt(rs.question("Digite o seu ano de nascimento: "));

let ano = 2022

if (ano - anonasc >= 16){
    console.log("Você poderá votar esse ano!")
}else {console.log("Você ainda não pode votar!")}