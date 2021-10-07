import React, { useState } from "react";
import { MatchesPage } from "./pages/MatchesPage/MatchesPage";
import { TelaInicial } from "./TelaInicial/TelaInicial";
import axios from "axios";


const App = () => {
//Renderização Condicional
//Precisa do estado que diz qual é a tela que está aparecendo
//Função pra mudar de tela
const [paginaAtual, setPaginaAtual] = useState()

const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/leticia-agante-maryam/clear"


const escolherTela = () => {
  if (paginaAtual === "home"){
    setPaginaAtual("matches")
  }else{
    setPaginaAtual("home")
  }
}

const limpaMatches = () => {
  axios.put(url)
        .then((res) => {
            //setPerfil(res.data.profile)
            
        })
        .catch((err) => {
            console.log(err.response)
        })
}


  return(
    <div>
     {paginaAtual === "home" ? <TelaInicial /> : <MatchesPage />}
     <button onClick={escolherTela}>{paginaAtual === "home" ? "Ir para Matches" : "Ir para Home"}</button>
     <button onClick={limpaMatches}>Limpar Matches</button>
    </div>
  )
}

export default App