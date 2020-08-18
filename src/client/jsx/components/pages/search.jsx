
import React, { useState, useEffect } from 'react';
import Main from './main.jsx'
import Spinner from '../layout/spinner.jsx'

export default () => {
    const [search, setSearchState] = useState("");
    const [loading, setLoadingState] = useState(true);
    const [pokemons, setPokemonsState] = useState([]);
    useEffect(() => {
        window.manager.findAll().then(data => {
            setPokemonsState(data)
            setLoadingState(false)
        });
    }, []);


    if (loading) {
        return <Spinner />
    }

    const handleChange = (event) => {
        setSearchState(event.target.value.toLowerCase());
    }

    return [
        <div className="input-group p-2" key="0">
            <div className="input-group-prepend">
                <span className="input-group-text" id="basic-text1">
                    <i className="fas fa-search" aria-hidden="true"></i>
                </span>
            </div>
            <input className="form-control" type="text" placeholder="Search" aria-label="Search" onChange={handleChange} />
        </div>,
        <Main key="1" search={search} pokemons={pokemons} />
    ];
}