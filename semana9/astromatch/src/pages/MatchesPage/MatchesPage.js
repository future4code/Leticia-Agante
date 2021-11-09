import React, { useState, useEffect } from "react";
import { ProfileListItem } from "../../ProfileListItem/ProfileListItem";
import { MatchesContainer, MatchesList } from './styled';
import axios from "axios";

export const MatchesPage = () => {
    const [matchesList, setMatchesList] = useState([])

    const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/leticia-agante-maryam/matches"

    useEffect(() => {
        getMatchesList()
    }, [])

    const getMatchesList = () => {
        axios.get(url)
            .then((res) => {
                setMatchesList(res.data.matches)
            })
            .catch((err) => {
                alert = "Deu erro!"
            })
    }

    // Criar um novo array de componentes usando o MatchesPage

    return (
        <MatchesContainer>
            <MatchesList>
                {matchesList && matchesList.map((perfil, index) => {
                    return (
                        <ProfileListItem name={perfil.name} photo={perfil.photo} key={index} />
                    )
                })}
            </MatchesList>
        </MatchesContainer>

    )
}