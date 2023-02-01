import axios from 'axios';
import React, { useState } from 'react';

import './App.css';

function App() {

  const [responseData, setResponseData] = useState([]);

  const consulpokemon = async () => {
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
      setResponseData(response.data.results);
    }
    catch (error) {
      console.log(error);
    }
  };
  
  return (
    <>
      <button onClick={() => consulpokemon()} type="button" className="btn btn-secondary">Fetch Pokemon</button>
      <ol className="list-group list-group-numbered">
        {responseData.map((pokemon) =>
          <li className="list-group-item">{pokemon.name}</li>
        )}
      </ol>
    </>
  );
}

export default App;
