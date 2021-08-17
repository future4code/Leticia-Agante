// EXERCICIOS DE INTERPRETAÇÃO DE TEXTO

// 1 
/*const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])*/


// a) O que vai ser impresso no console? 
// vou colocar na ordem: Matheus Nachtergaele, passa a começar a contar pelo 1, globo 14h. 

// 2
/*const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)*/

//a) O que vai ser impresso no console? juca, juba, jubo

//b) O que faz a sintaxe dos três pontos antes do nome de um objeto? Ela começa a partir da primeira sintaxe já criada. 

//3 
/*function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))*/

//a) O que vai ser impresso no console? false e indefinido 

//b) Explique o valor impresso no console. Você sabe por que isso aconteceu? deu false pois o valor que ele passou é falso e o altura não tem nada declarado

// EXERCICIOS DE ESCRITA DE CÓDIGO 

//1 
//a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente três apelidos). Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo: 

/*const pessoa = {
	nome: "Leticia",
	apelido: ["Lê", "Lele", "Leti"]
}


const frase = `Eu sou ${pessoa.nome}, mas pode me chamar de ${pessoa.apelido[0]}, ${pessoa.apelido[1]} ou ${pessoa.apelido[2]}.`

console.log(frase)*/


//b) Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista de três apelidos. Depois, chame a função feita no item anterior passando como argumento o novo objeto 
/*const novaLista = {
	...pessoa,
	novosApelidos: ["Leticia", "Lety", "Lee"]
}

const frase2 = `Eu sou ${novaLista.nome}, mas pode me chamar de ${novaLista.apelido[0]}, ${novaLista.apelido[1]} ou ${novaLista.apelido[2]}.`

console.log(frase2)*/

//2 

/*const pessoa1 = {
	nome: "Danilo",
	idade: 30,
	profissao: "Engenheiro" 
}

function retornaPrimeiroArray(array){
	return [pessoa1.nome, pessoa1.nome.length, pessoa1.idade, pessoa1.profissao, pessoa1.profissao.length]
}

retornaPrimeiroArray(pessoa1)

const pessoa2 = {
	nome: "Roberto",
	idade: 22,
	profissao: "Enfermeiro"
}

function retornaSegundoArray(array){
	return [pessoa2.nome, pessoa2.nome.length, pessoa2.idade, pessoa2.profissao, pessoa2.profissao.length]
}


console.log(pessoa1)
console.log(pessoa2)*/

// 3
const carrinho = []

const fruta1 = {
	nome: "Banana",
	disponibilidade: true
}

const fruta2 = {
	nome: "Melância",
	disponibilidade: true
}

const fruta3 = {
	nome: "Pêra",
	disponibilidade: true
}

carrinho.push(fruta1, fruta2, fruta3)
console.log(carrinho)