import React from "react";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";

function PokeTypes() {
  let {number, name} = useParams()
  return (
    <section className="content">
      <ol>
        <nav id="barraNavegação" className="navbar bg-light m-auto">
          <a className="navbar-brand">
           <h1>Pokemon nº{name}</h1>
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
    </section>
  )
}

export default PokeTypes;