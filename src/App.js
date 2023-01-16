import React, { useEffect, useState } from 'react';


import './App.css';
import pokeApi from './api'

function App() {

  const limit = 5
  const offset = 0

  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    pokeApi.getPokemons(offset, limit).then((pokemonsData = []) => {
      setPokemons(pokemonsData)
    })
  }, [])
  
  console.log(pokemons)

  return (

    <section className="content">
      <h1>Pokedex</h1>
      <ol id="pokemonList" className="pokemons">
        {pokemons.map(pokemon => (
          <li className={`pokemon ${pokemon.type}`} key={pokemon.number}>
            <span className="number">#{pokemon.number}</span>
            <span className="name">{pokemon.name}</span>
          </li>
        ))}
        </ol>
        <div className="pagination">
            <button id="loadMoreButton" type="button">
                load more
            </button>
        </div>
    </section>
  );
}
export default App;
