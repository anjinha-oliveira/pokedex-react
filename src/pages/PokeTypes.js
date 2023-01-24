import React from "react";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";

function PokeTypes() {
  let {number} = useParams()
  return (
    <section className="content">
      <div>
          <h1>Pokemon nº{number}</h1>
        <div>
          <div class="d-flex justify-content-end">
            <Link to="/">
              <button 
                type="button" 
                className="btn btn-outline-info">
                  Voltar
              </button>    
            </Link>
            </div>    
          </div>
        </div>      
    </section>
  )
}

export default PokeTypes;