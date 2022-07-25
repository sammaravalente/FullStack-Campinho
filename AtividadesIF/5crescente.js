const rs = require('readline-sync')
const list = []

const firstValue = rs.questionInt('Digite o primeiro numero: ');
list.push(firstValue)
const secondValue = rs.questionInt('Digite o segundo numero: ')
list.push(secondValue)
const thirdValue = rs.questionInt('Digite o terceiro numero: ')
list.push(thirdValue)

list.sort((a, b) => a - b);
console.log(list)