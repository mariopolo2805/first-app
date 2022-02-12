import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const PokemonList = () => {
  const [offset, setOffset] = useState(0);
  const [list, setList] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=25&offset=${offset}`)
      .then(res => res.json())
      .then((response) => {
          setIsLoaded(true);
          setList(response.results);
        }
      )
  }, [offset]);

  const handlePrev = () => {
    if (offset >= 50) {
      setOffset(offset - 50);
    }
  };

  const handleNext = () => {
    if (offset < 1118) {
      setOffset(offset + 50);
    }
  };

  if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul>
        {list.map((item) => (
          <li key={item.name}>
            <Link to={"./" + item.name}>
              {item.name}
            </Link>
          </li>
        ))}
        <div>
          <button onClick={handlePrev}>Prev</button>
          <button onClick={handleNext}>Next</button>
        </div>
      </ul>
    );
  }
}

export default PokemonList;