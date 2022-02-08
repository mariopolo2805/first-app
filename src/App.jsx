import React, { useState } from 'react';
import { Route, Routes } from "react-router-dom";

import './App.scss';

// Componentes estáticos
import { Form } from './components';
import ProfileCard from './components/ProfileCard';

// Componentes enrutados
import PokemonList from './pages/PokemonList';
import PokemonDetail from './pages/PokemonDetail';

const App = () => {
  const [list, setList] = useState([]);

  const addItem = (item) => {
    const newList = [ ...list, item ];
    setList(newList);
  };

  return (
    <div className="app">
      <h1>Hola clase!</h1>
      <Form addCharacter={addItem} />
      <ProfileCard profiles={list} />
      <Routes>
        <Route path="/pokemon" element={<PokemonList />}/>
        <Route path="/pokemon/:pokemonName" element={<PokemonDetail />}/>
      </Routes>
    </div>
  );
}

export default App;
