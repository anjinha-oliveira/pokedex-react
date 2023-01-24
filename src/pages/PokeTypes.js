import React from "react";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";

function PokeTypes() {
    let {number} = useParams()
    return (
        <section className="content">
            <div>
                <Link to="/">
                <button 
                type="button" 
                className="btn btn-outline-info">
                    Voltar
                </button>    
                </Link>    
                <h1> oi</h1>
            </div>
        </section>
    )
}

export default PokeTypes;