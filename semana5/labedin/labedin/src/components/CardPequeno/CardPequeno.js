import React from "react";
import './CardPequeno.css';

function CardPequeno (props){
    return (
        <div className="cardpequeno">
                <img src={props.imagem}></img>
                <h4>{props.titulo}</h4>
                <p>{props.descricao}</p>
        </div>
    )
}

export default CardPequeno;