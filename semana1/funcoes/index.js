// EXERCICIOS DE INTERPRETAÇÃO DE TEXTO

/* Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil, pode rodar no seu computador **para analisar e pensar sobre o resultado.** 

1. Leia o código abaixo
    function minhaFuncao(variavel) {
    	return variavel * 5
    }

    console.log(minhaFuncao(2))
    console.log(minhaFuncao(10))
    

    a) O que vai ser impresso no console? Ele vai dar os resultados, 10 e 50

    b) O que aconteceria se no VSCode retirássemos os dois `console.log` e simplesmente invocássemos a função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console?  Ele não mostraria o resultado, pois com o console.log é impresso no console e fica visivel para ver. /*


/*2.Leia o código abaixo
    let textoDoUsuario = prompt("Insira um texto");

    const outraFuncao = function(texto) {
	    return texto.toLowerCase().includes("cenoura")
}

    const resposta = outraFuncao(textoDoUsuario)
    console.log(resposta)

a. Explique o que essa função faz e qual é sua utilidade. Ela é uma expressão de função, faz a mesma coisa se o function viesse primeiro. Ela tem a mesma utilidade que se a function viesse primeiro, ela só esta distribuidade diferente.

b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
     i.   `Eu gosto de cenoura`
     ii.  `CENOURA é bom pra vista`
     iii. `Cenouras crescem na terra`
     
Tem que criar uma array para cada uma poder ir trocando a posição da palavra cenoura */ 

// EXERCICIOS DE ESCRITA DE CÓDIGO 
//1 
/*const informacoesMinhas = function (nome, idade, cidade, profissao) {
    console.log("Eu sou " + nome + "tenho " + idade + " anos, " + "moro em " + cidade + " e sou " + profissao)
}

informacoesMinhas("Leticia ", 27, "São Paulo", "estudante")*/

//2
/*a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.*/

/*const recebeNumero = function(primeiroNumero, segundoNumero) {
    const soma = primeiroNumero + segundoNumero
    return soma
}

const somaDosNumeros = recebeNumero(3, 2)
console.log(recebeNumero(3, 2))*/ 


/*b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é maior ou igual ao segundo.

const recebeNumero = function(primeiroNumero, segundoNumero) {
    const soma = primeiroNumero + segundoNumero
    const umBoolean = primeiroNumero >= segundoNumero
    return soma, umBoolean
}

const somaDosNumeros = recebeNumero(3, 2)
console.log(recebeNumero(3, 2)) */




