import React, { useState } from 'react';

import './Form.scss';

const INITIAL_STATE = {
  name: '',
  address: '',
  location: '',
  image: '',
};

const Form = (props) => {
  const [state, setState] = useState(INITIAL_STATE);
  const [error, setError] = useState(null);

  const submitForm = (ev) => {
    ev.preventDefault();

    const { name, address, location, image } = state;

    if (!name || !address || !location || !image) {
      setError('Los campos son obligatorios');
      return;
    } else {
      setError(null);
    }

    console.log(state);
    props.addCharacter(state);
    setState(INITIAL_STATE);
  };

  const handleInput = (ev) => {
    const {name, value} = ev.target;
    setState({...state, [name]: value});
  };

  return (
    <form onSubmit={submitForm}>
      <fieldset>
        <label>
          <p>Nombre</p>
          <input type="text" name="name" value={state.name} onChange={handleInput} />
        </label>

        <label>
          <p>Dirección</p>
          <input type="text" name="address" value={state.address} onChange={handleInput} />
        </label>

        <label>
          <p>Ciudad</p>
          <input type="text" name="location" value={state.location} onChange={handleInput} />
        </label>

        <label>
          <p>Imagen</p>
          <input type="text" name="image" value={state.image} onChange={handleInput} />
        </label>

        <div style={{ padding: "20px" }}>
          {state.image ? (
            <img src={state.image} alt={state.name} width="200px" />
          ) : null}
        </div>

        <p className="text-error">{error}</p>

        <div>
          <button type="submit">Guardar Perfil</button>
        </div>
      </fieldset>
    </form>
  )
};

export default Form;