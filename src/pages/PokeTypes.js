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
        <div className="container-img">
          <div className="row">
            <ol>
              <img src={pokemon.photo} className="rounded float-start" alt={pokemon.name}/>
            </ol>
          </div>
        </div>
      </ol>
    </section>
  )
}
export default PokeTypes;
