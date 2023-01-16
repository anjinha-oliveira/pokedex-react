import React, { useEffect, useState, useCallback } from 'react';

import './App.css';
import pokeApi from './api'

function App() {

  const limit = 10

  const [offset, setOffset] = useState(0)
  const [pokemons, setPokemons] = useState([]);

  const incrementPokemons = useCallback((pokemonsData) => {
    debugger
    setPokemons((previousState) => (pokemonsData))
  }, [])

  useEffect(() => {
    pokeApi.getPokemons(offset, limit).then((pokemonsData = []) => {
      incrementPokemons(pokemonsData)
    })
  }, [offset, incrementPokemons])
  
  console.log(offset)

  return (
    <section className="content">
      <h1>Pokedex</h1>
      <ol id="pokemonList" className="pokemons">
        {pokemons.map(pokemon => (
          <li className={`pokemon ${pokemon.type}`} key={pokemon.number}>
            <span className="number">#{pokemon.number}</span>
            <span className="name">{pokemon.name}</span>
            <div className="detail">
              <ol className="types">
                {pokemon.types.map(type => (
                  <li className={`type ${type}`} key={type}>
                    {type}
                  </li>
                ))}             
              </ol>
              <img src={pokemon.photo} alt={pokemon.name}/>
            </div>
          </li>
        ))}
      </ol>

      <div className="pagination">
        <button
          id="loadMoreButton" 
          type="button" 
          onClick={
            (e) => {
              setOffset(offset + limit)
            }
          }
        >
          load more
        </button>
      </div>
    </section>
  );
}
export default App;
