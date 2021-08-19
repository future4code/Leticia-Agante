// EXERCICIOS DE INTERPRETAÇÃO DE CÓDIGO 

//1
//a) ele realiza o teste de saber se o número passado pelo usurio %2 é igual a zero.
//b) caso o valor seja igual a zero
//c) se o número não for igual a zero

//2
//a) para a pessoa saber o valor das frutas
//b) O preço da fruta maça é R$ 2.25
//c) ele imprimiria o valor de todas as frutas

//3
//a) está pedindo um número para o usuario com o prompt
//b) se o usuria digitar o numero 10 sera impresso, "Esse número passou no teste". se o usuario digitar -10 sera impresso, não sera impresso nada, pois não tem um else
//c) no escopo local não se tem um else, para o if, não tendo como mostrar o resultado se for menor que zero.

//EXERCICIOS DE ESCRITA DE CÓDIGO

//1
/*const idadeUsuario = Number(prompt("Qual a sua idade? "))
const idadePermitida = 18


const dirigir = (idadeUsuario, idadePermitida) => {
    if(idadeUsuario > idadePermitida){
        console.log("Você pode dirigir")
    }else if(idadeUsuario < idadePermitida){
        console.log("Você não pode dirigir")
    }
}

dirigir(idadeUsuario, idadePermitida)*/

//2
/*const turnoAluno = prompt("Em qual turno você estuda ? Digite M para manhã, V para tarde e N para noite").toLowerCase()

const horarios = (turnoAluno) =>{
    if (turnoAluno === "m"){
        console.log("Bom dia")
    }else if (turnoAluno === "v"){
        console.log("Boa tarde")
    }else if (turnoAluno === "n"){
        console.log("Boa noite")
    }else {
        console.log("Digite um turno válido")
    }
}

horarios(turnoAluno)*/

//3
/*const turnoAluno = prompt("Em qual turno você estuda ? Digite M para manhã, V para tarde e N para noite").toLowerCase()

const horarios = (turnoAluno) =>{
    switch (turnoAluno) {
        case "m"
            console.log("Bom dia")
            break
        case "v"
            console.log("Boa tarde")
            break
        case "n"
            console.log("Boa noite")
        default:
            console.log("Digite um turno válido")
        
    }
}


horarios(turnoAluno)*/


//4

/*const generoFilme = prompt("Qual o gênero do filme que vocês vão assistir?").toLowerCase()
const valorIngresso = Number(prompt("Qual o valor do ingresso?"))

if(generoFilme === "fantasia" && valorIngresso <= 15){
    console.log("Bom filme")
} else (
    console.log("Escolha outro gênero")
)*/