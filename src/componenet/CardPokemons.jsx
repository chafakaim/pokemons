import React from 'react';

const CardPokemons = ({pokemon,onclick,id,ondeletePokemon}) => {
   
    function handlDelete (){
        ondeletePokemon(pokemon)
    }
    function handlClick(){
        onclick(id);
    }
    
    return (
        <div className='card col-sm-3 mb-4' >
            <img src={pokemon.picture} className='card-img-top' alt="pokemens" />
            <div className="card-body g-sm-3">
                <h3 className='card-title'>{pokemon.name}</h3>
                <p className='card-text'>cp : {pokemon.cp}</p>
                <p className='card-text'>hp : {pokemon.hp}</p>
                {pokemon.types.map(e => <li key={e} className='list-group-item bg-red'>{e}</li> )}
            </div>
            <div onClick={handlDelete} className="btn btn-danger">X</div>
            <div onClick={handlClick} className="btn btn-info">Edite</div>
        </div>
    );
}

export default CardPokemons;
