let rs = require('readline-sync');

let senha = parseInt(rs.question("Digite a senha: "));

let senhaValida = 1234;

if (senha === senhaValida){
    console.log("ACESSO PERMITIDO.")
}else {(console.log("ACESSO NEGADO."))}