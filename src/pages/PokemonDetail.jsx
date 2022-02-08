import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

const PokemonDetail = () => {
  let { pokemonName } = useParams();

  const [pokemon, setPokemon] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then(res => res.json())
      .then((response) => {
        setPokemon(response);
        setIsLoaded(true);
      }
    )
  }, [pokemonName]);

  if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <p>{pokemon.name}</p>
        <p>{pokemon.order}</p>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} width="200px" />
      </>
    );
  }
}

export default PokemonDetail;