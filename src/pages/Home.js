import React from "react";
import { useEffect, useState } from 'react';
import { Link,  } from "react-router-dom";

import pokeApi from '../api.js'

function Home() {
  const page = 10
  const maxRecord = 151

  const [offset, setOffset] = useState(10)
  const [busca, setBusca] = useState('')
  const [allPokemons, setPokemons] = useState([]);

  let pokemons = allPokemons.filter((pokemon) => {
    return pokemon.name.toLocaleLowerCase().startsWith(busca.toLocaleLowerCase())
  })
  pokemons = pokemons.slice(0, offset)

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
          <input 
            className="form-control me-2 form-control border-success border border-secondary" 
            type="search" 
            value={busca}
            onChange={(ev => setBusca(ev.target.value))}
            placeholder="Search" 
            aria-label="Search"/>
        </form>
      </nav>
    </ol>
    <ol id="pokemonList"  className="pokemons">
    {pokemons.map(pokemon => (
      <li className={`pokemon ${pokemon.type}`} key={pokemon.number}>
        <span className="number">#{pokemon.number}</span>
        <span className="name" >
          <Link to={`/pokemon/${pokemon.number}/`}>{pokemon.name}</Link>
        </span>
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

export default Home;