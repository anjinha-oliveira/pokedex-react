import React, { useEffect, useState, useCallback } from 'react';

import './App.css';
import pokeApi from './api'

function App() {
  const limit = 10
  const maxRecord = 141

  const [offset, setOffset] = useState(0)
  const [pokemons, setPokemons] = useState([]);

  const incrementPokemons = useCallback((pokemonsData) => {
    setPokemons((previousState) => (pokemonsData))
  }, [])

  useEffect(() => {
    pokeApi.getPokemons(offset, limit).then((pokemonsData = []) => {
      setPokemons([...pokemons, ...pokemonsData])
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offset])
  
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

      {
        // 10 + 20 <= 30
        (limit + offset < maxRecord) ? (
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
        ) : null
      }
    </section>
  );
}
export default App;

