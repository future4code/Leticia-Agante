import axios from "axios";
import React, {useEffect, useState} from "react";
import {HomeContainer, Profile, ProfileImage} from './styled'

export const TelaInicial = () => {
    const [perfil, setPerfil] = useState({})

    const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/leticia-agante-maryam/person"

    useEffect(() => {
        getPerfil()
    }, [])

    const getPerfil = () => {
        axios.get(url)
        .then((res) => {
            setPerfil(res.data.profile)
            
        })
        .catch((err) => {
            console.log(err.response)
        })
    }

    const escolhePessoa = (choice) => {
        const body = {
            id: perfil.id,
            choice: choice
        }

        axios.post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/leticia-agante-maryam/choose-person", body)
        .then((res) => {
            getPerfil()
        })
        .catch()
        // console.log("Botão de escolha")
        // Saber se a escolha foi x ou <3
        // Fazer a requisição Escolhe Pessoa (POST)
        // No caso desucesso (then), pedir mais um perfil 
    }

    return(
        <HomeContainer>
            {!perfil ? <div>Acabaram os perfis! Aperte o botão limpar</div> :
            <Profile>
                <ProfileImage src={perfil.photo}/>
                <h2>{perfil.name}, {perfil.age}</h2>
                <p>{perfil.bio}</p>
                <div>
                    <button onClick={() => escolhePessoa(false)}>X</button>
                    <button onClick={() => escolhePessoa(true)}>&#128147;</button>
                </div>
            </Profile>
            }
        </HomeContainer>
    )
}