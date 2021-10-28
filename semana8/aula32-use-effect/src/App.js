import React, { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";
import PokeCard from "./components/PokeCard/PokeCard";

function App () {
  const [pokeId, setPokeId] = useState();
  const [pokeList, setPokeList] = useState([]);
  const [pokeName, setPokeName] = useState(); 

  
  const getPoke = () => {
    // função axios que está batendo na API e buscando 151 pokemons
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/?limit=151/${pokeId}`)
      .then(response => {
        // função que está setando no estado os 151 pokemons
        setPokeList( response.data.results );
        // setPokeName(response.data.name);
        // console.log(response.data)
      })
      .catch(err => {
        console.log(err.data);
      });
  };

  useEffect(() => {
    getPoke();
  }, [pokeId]);

  const NomePokemon = (event) => {
    setPokeName(event.target.value);
  };

    return (
      <div>
        {/* evento onChange chama função toda vez que o usuário 
        escolhe um novo pokemon no dropdown */}
        <select onChange={NomePokemon}>
          <option value={""}>Nenhum</option>
          {/* renderizando a lista de pokemons como opções do select */}
          {pokeList.map(pokemon => {
            return (
              <option key={pokemon.name} value={pokemon.name}>
                {pokemon.name}
              </option>
            );
          })}
        </select> 
        {/* {console.log(pokeList)} */}
        {/* expressão booleana que renderiza o componente PokeCard,
        caso o valor de pokeName, no estado, seja true */}
        {pokeName && <PokeCard pokemon={pokeName} />}
      </div>
    );
  }


export default App;