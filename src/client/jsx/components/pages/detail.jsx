import React from 'react';


export default (props) => {
    console.log("search", props.location);
    let pokemonId = window.location.pathname.split('/')[2]
    console.log("search", pokemonId);

    return (
        <div className="container-fluid">

        </div>
    )
}