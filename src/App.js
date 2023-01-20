import React, { useEffect, useState } from 'react';

import './index.css';
import pokeApi from './api'
import PokeButton from './images/poke-bola-button.jpg'

function App() {
  const page = 10
  const maxRecord = 151

  const [offset, setOffset] = useState(10)
  const [allPokemons, setPokemons] = useState([]);
  //const [pokemons, copyPokemons] = useState([])
  const pokemons = allPokemons.slice(0, offset)
  console.log(pokemons)

  useEffect(() => {
    pokeApi.getPokemons(0, 151).then((pokemonsData = []) => {
      setPokemons([...allPokemons, ...pokemonsData])
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
  <section className="content">
    <ol>
      <nav id="barraNavegação" className="navbar bg-light m-auto">
          <a className="navbar-brand">
            <h1>Pokedex</h1>
          </a>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button type="button"> 
          <img src={PokeButton} alt="bolaPokemon" height ="30" width="auto"/>
          </button>
        </form>
      </nav>
      </ol>
    <ol id="pokemonList" className="pokemons">
    {pokemons.map(pokemon => (
      <li className={`pokemon ${pokemon.type}`} key={pokemon.number}>
        <span className="number">#{pokemon.number}</span>
        <span className="name">{pokemon.name}</span>
        <div className="detail">
          <ol className="types">
          {pokemon.types.map(type => (
            <li 
            className={`type ${type}`} 
            key={type}>
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
        (offset + page < maxRecord) ? (
          <div className="pagination">
            <button
              id="loadMoreButton" 
              type="button" 
              onClick={
                (e) => {
                  setOffset(page + offset)
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

