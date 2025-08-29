//importando a lib prompt-sync
let prompt = require('prompt-sync')()

//usar a lib do prompt sync 
let nome= prompt("  Qual é o seu nome? ")

//Usando o valor capturado pelo pompt 
console.log("Olá "+ nome)

//importar o modulo calculadoraDenotas
let {calcularNotaA1, calculodaNotaFinal, calcularNotaA2} = require('./calculadoraDeNotas')

//agora usar os metodos da calculadora. Perguntar as notas do exercicio, do trabalho e da prova  A1
let exerciciosA1 = parseFloat(prompt("qual a nota de exercicos A1? "))
let trabalhoA1 = parseFloat(prompt( "qual a nota de trabalhos A1? "))
let provaA1 = parseFloat( prompt("qual a nota de prova A1? "))
let notaA1 = calcularNotaA1 (exerciciosA1, trabalhoA1, provaA1)

console.log("#### calculo da nota A1 ####")
console.log("Nota exercicio A1: ", exerciciosA1)
console.log("Nota trabalho A1: ", trabalhoA1)
console.log("Nota prova A1:  ", provaA1)
console.log("NOTA CALCULADA A1 :  ", notaA1)


//nota a2
let exerciciosA2 = parseFloat(prompt("qual a nota de exercicos A2: "))
let trabalhoA2 = parseFloat(prompt( "qual a nota de trabalhos A2? "))
let provaA2 = parseFloat( prompt("qual a nota de prova A2? "))
let notaA2 = calcularNotaA2 (exerciciosA2, trabalhoA2, provaA2)

console.log("#### calculo da nota A2 ####")
console.log("Nota exercicio A2: ", exerciciosA2)
console.log("Nota trabalho A2: ", trabalhoA2)
console.log("Nota prova A2:  ", provaA2)
console.log("NOTA CALCULADA A2 :  ", notaA2)

//NOTA FINAL

let notaFinal = calculodaNotaFinal(notaA1, notaA2)
console.log("### CALCULO DA NOTA FINAL ###")
console.log("nota final: ", notaFinal)

if (notaFinal >= 5){
    console.log("Parabéns, " + nome + " voce foi aprovado ")
} else{
    console.log("sinto muito, " + nome + " voce foi reprovadoKKKKKKKKKKKKKKKKKKKK ")
}