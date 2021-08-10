// EXERCICIOS DE INTERPRETAÇÃO DE CÓDIGO

//1 Leia o código abaixo. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.

/*const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)  //false

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) //false

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado) // true */

//2 Seu colega se aproxima de você falando que o código dele não funciona como devia.  Vamos ajudá-lo: consegue perceber algum problema? O que será impresso no console?

/*let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma) //precisa  colocar Number antes do prompt, para saber que são números*/

//3 Para o exercício anterior, sugira ao seu colega uma solução para que o valor impresso no console seja, de fato, a soma dos dois números.

/*let primeiroNumero = Number (prompt("Digite um numero!"))
let segundoNumero = Number (prompt("Digite outro numero!"))


let soma = primeiroNumero + segundoNumero

console.log("A soma dos dois é: ", soma)*/

//EXERCICIOS DE ESCRITA DE CÓDIGO

//1
/*let idadeUsuario = Number(prompt("Qual a sua idade? "))
let idadeMelhorAmigo = Number(prompt("Qual a idade do seu melhor amigo? "))

console.log("Sua idade é maior do que a do seu melhor amigo?", idadeUsuario === idadeMelhorAmigo)*/

//2
/*let numeroUsuario = Number(prompt("Insira um número par: "))

console.log(numeroUsuario % 2)*/

/*c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.*/
//Notei que o resultado é sempre 0 

/*d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código*/
//O resultado é sempre 1

//3
/*let idadeUsuarioMeses = Number(prompt("Qual a sua idade em meses? "))
let idadeUsuarioDia = Number(prompt("Qual sua idade em dias? "))
let idadeUsuarioHoras = Number(prompt("Qual a sua idade em horas? "))

console.log(idadeUsuarioMeses, idadeUsuarioDia, idadeUsuarioHoras)*/

//4
const numeroUsuario = Number(prompt("Escreva um número: "))
const segundoNumero = Number(prompt("Escreva mais um número: "))

console.log("O primeiro número é maior que segundo?", numeroUsuario > segundoNumero)

console.log("O primeiro número é igual ao segundo? ", numeroUsuario === segundoNumero)

console.log("O primeiro numero é divisível pelo segundo? ", numeroUsuario === segundoNumero)

console.log("O segundo numero é divisível pelo primeiro? ", segundoNumero === numeroUsuario)

