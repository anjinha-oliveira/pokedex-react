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
        <li className="pokemon grass">
          <span className="number">#1</span>
          <span className="name">bulbasaur</span>
          <div className="detail">
              <ol className="types">
                <li className="type grass">grass</li><li className="type poison">poison</li>
              </ol>        
              <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="bulbasaur"/>
          </div>
        </li>
            <li className="pokemon grass">
              <span className="number">#2</span>
              <span className="name">ivysaur</span>
                <div className="detail">
                  <ol className="types">
                      <li className="type grass">grass</li><li className="type poison">poison</li>
                  </ol>        
                  <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg" alt="ivysaur"/>
                </div>
            </li>
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
