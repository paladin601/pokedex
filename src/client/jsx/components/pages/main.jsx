
import React from 'react';
import { useHistory } from "react-router-dom";

export default (props) => {
    let pokemons = props.pokemons.filter(obj => obj.name.includes(props.search))
    let history = useHistory();
    const detailPokemon = (event, id) => {
        history.push(`/detail/${id}`);
    }
    return (
        <div className="container-cards text-capitalize">
            {
                pokemons.map(pokemon => {
                    return (
                        <div className="card" onClick={() => detailPokemon(event, pokemon.id)} key={pokemon.id}>
                            <div className="card-img-top">
                                <img src={pokemon.img}></img>
                            </div>
                            <div className="card-body text-center">
                                <h6 className="card-text font-weight-bold">{pokemon.name}</h6>
                                <span className="card-text">{pokemon.number}</span>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}