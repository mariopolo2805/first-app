import React from 'react';
import { Route, Routes } from "react-router-dom";

import './App.scss';

// Componentes estáticos
// import { Form } from './components';
// import ProfileCard from './components/ProfileCard';
import Header from './components/Header/Header';

// Componentes enrutados
import PokemonList from './pages/PokemonList';
import PokemonDetail from './pages/PokemonDetail';

const App = () => {
  // const [list, setList] = useState([]);

  // const addItem = (item) => {
  //   const newList = [ ...list, item ];
  //   setList(newList);
  // };

  return (
    <div className="app">
      {/* <Form addCharacter={addItem} />
      <ProfileCard profiles={list} /> */}
      <Header />
      <Routes>
        <Route path="/" element={<h1>Soy la Home</h1>} />
        <Route path="/pokemon" element={<PokemonList />}/>
        <Route path="/pokemon/:pokemonName" element={<PokemonDetail />}/>
      </Routes>
    </div>
  );
}

export default App;
