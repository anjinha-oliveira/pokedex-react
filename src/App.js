import React, { useEffect, useState } from 'react';
import {BrowserRouter} from 'react-router-dom'

import './index.css';
import pokeApi from './api'
import Routes from './Routes'
import Home from './pages/Home';

function App() {
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
  <BrowserRouter>
    <Home/>
  </BrowserRouter>   
);
  }
export default App;

