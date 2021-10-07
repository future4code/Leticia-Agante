import React from "react";
import {ListaItemContainer, RoundImage} from './styled'

export const ProfileListItem = (props) => {
    return(
        <ListaItemContainer>
           <RoundImage src={props.photo}/>
           <h2>{props.name}</h2>
        </ListaItemContainer>
    )
}