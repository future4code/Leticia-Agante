// EXERCICIOS DE INTERPRETAÇÃO DE CÓDIGO 

//1
// a) O que vai ser impresso no console?
//será impresso o nome dos 3 usuarios e o apelido

//2
//a) O que vai ser impresso no console?
// sera impresso apenas os nomes dos usuarios 

//3
//a) O que vai ser impresso no console?
// será impresso os dois primeiros usuarios, sendo que ele pede para não a parecer "Chijo"


// EXERCICIOS DE ESCRITA DE CÓDIGO

//1

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 //a) Crie um novo array que contenha apenas o nome dos doguinhos

 const nomesCachorros = pets.map((item, index, array) => {
    return item.nome
 })
 
 console.log(nomesCachorros)

 //b) Crie um novo array apenas com os cachorros salsicha

 const dogSalsicha = pets.filter((item, index, array) => {
    return item.raca === "Salsicha" 
 })
 
 console.log(dogSalsicha)

 //c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a [NOME]!"
 
 const dogPoodle = pets.filter((item, index, array) => {
    return item.raca === "Poodle" 
 }) 

 const ganhadores = dogPoodle.map((poodle) => {
    return `Você ganhou um cupom de desconto de 10% para tosar ${poodle.nome}`
 } )

 console.log(ganhadores)