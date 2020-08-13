import React, { useState, useEffect } from 'react';
import Spinner from '../layout/spinner.jsx'
import { useHistory } from "react-router-dom";


export default (props) => {
    let pokemonId = window.location.pathname.split('/')[2]
    const [loading, setLoadingState] = useState(true);
    const [pokemon, setPokemonState] = useState({});
    const [NPpokemon, setNPPokemonState] = useState([]);
    let history = useHistory();
    useEffect(() => {
        window.manager.getPokemonByID(pokemonId).then(data => {
            if (!data.error) {
                setPokemonState(data.pokemon)
                setNPPokemonState(data.prePokemon);
            } else {
                setPokemonState(data)
            }
            setLoadingState(false)
        });
    }, [pokemonId]);
    const goHome = () => {
        history.push(`/`);
    }
    const changePokemon = (event, id) => {
        setLoadingState(true)
        history.push(`/detail/${id}`);
    }
    let button = (
        <button className="btn btn-primary" onClick={() => goHome()}>Go Home</button>
    )

    if (loading) {
        return <Spinner />
    }

    if (pokemon.error) {
        return (
            <div className="container-fluid mt-4 text-center">
                <h2 className="font-weight-bold">
                    Search all pokemon first
                </h2>
                {button}
            </div>
        )
    }

    return (
        <div className="container-pokemon p-2">
            <div className="arrows-pokemon">
                {NPpokemon.length > 0 &&
                    (
                        <span onClick={() => changePokemon(event, NPpokemon[0].id)}>
                            {NPpokemon[0].number}
                        </span>
                    )
                }
            </div>
            <div className="pokemon-center">
                <img src={pokemon.img} />
                <div className="p-3 text-capitalize">
                    <h3>
                        <span className="font-weight-bold">
                            {pokemon.name}
                        </span>
                        {' '}{pokemon.number}
                    </h3>
                    <div className="stats mt-4">
                        <div>
                            <h5 className="font-weight-bold">
                                Height
                            </h5>
                            <p>{pokemon.height}{' '}({pokemon.heightM}m)</p>
                        </div>
                        <div>
                            <h5 className="font-weight-bold">
                                Type
                            </h5>
                            {
                                pokemon.types.map(type => {
                                    return (
                                        <p className="type" key={type.type.name}>
                                            <span className={type.type.name}>

                                                {type.type.name}
                                            </span>
                                        </p>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <h5 className="font-weight-bold">
                                Weight
                            </h5>
                            <p>{pokemon.weight}{' '}({pokemon.weightK}kg)</p>
                        </div>
                        <div>
                            <h5 className="font-weight-bold">
                                Abilities
                            </h5>
                            {
                                pokemon.abilities.map(abilities => {
                                    return (
                                        <p key={abilities.ability.name}>{abilities.ability.name}</p>
                                    )
                                })
                            }
                        </div>

                    </div>
                    {button}
                </div>
            </div>
            <div className="arrows-pokemon">
                {NPpokemon.length > 0 &&
                    (
                        <span onClick={() => changePokemon(event, NPpokemon[1].id)}>
                            {NPpokemon[1].number}
                        </span>
                    )
                }
            </div >
        </div >
    )
}