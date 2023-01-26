import React, {useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
import { Link  } from "react-router-dom";
import pokeApi from "../api";


function PokeTypes() {
  let { number } = useParams()
  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
    pokeApi.getPokemonsDetail({
      'url': `https://pokeapi.co/api/v2/pokemon/${number}/`
    }).then((pokemonData = {}) => {
      setPokemon(pokemonData)
    })
  }, [])
  

  return (
    <section className="content">
      <ol>
        <nav id="barraNavegação" className="navbar bg-light m-auto">
          <a className="navbar-brand">
           <h1 className="text-capitalize">{pokemon.name}</h1>
          </a>
          <div className="d-flex justify-content-between">
          <div className="">
            <Link to="/">
              <button 
                type="button" 
                className="btn btn-outline-info">
                  Voltar
              </button>    
            </Link>
          </div>    
          </div>             
        </nav>
      </ol>
      <ol>
      <div className="row justify-content-center">
        <div className="col-4">
          <div className="row-imag">
            <img src={pokemon.photo} className="rounded float-start" alt={pokemon.name}/>
          </div>
        </div>
        <div className="col-4">
          
          <h2 className="text-capitalize">Número: #{number}</h2>
          <h2 className="text-capitalize">Tipo:</h2>
          <ol>
            {pokemon.types?.map(type => (
              <li key={type}>{type}</li>
            ))}
          </ol> 
          <h2 className="text-capitalize">Habilidades:</h2>
          <ol className="row-type">
          {pokemon.abilities?.map(ability => (
            <li className="text-capitalize"
              key={ability.slot}>
                {ability.ability.name}
            </li>
          ))} 
          </ol>    
        </div>
      </div>
      </ol>
      
    </section>
  )
}
export default PokeTypes;
