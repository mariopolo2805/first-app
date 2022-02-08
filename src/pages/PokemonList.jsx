import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const PokemonList = () => {
  const [list, setList] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then(res => res.json())
      .then((response) => {
          setIsLoaded(true);
          setList(response.results);
        }
      )
  }, []);

  if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul>
        {list.map((item, index) => (
          <li key={item.name}>
            <Link to={"./" + item.name}>
              {index} - {item.name}
            </Link>
          </li>
        ))}
      </ul>
    );
  }
}

export default PokemonList;