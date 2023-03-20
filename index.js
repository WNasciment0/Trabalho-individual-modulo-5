import readLineSync from 'readline-sync'
import ck from 'chalk'

const valores = []
let input = ""

while(input != "sair")
{
    valores.push(input)
    input = readLineSync.question(ck.yellowBright.bold("Digite uma propriedade CSS")).toLocaleLowerCase()
}
console.log(ck.blue.italic.bold.underline(valores.sort().join("\n")))