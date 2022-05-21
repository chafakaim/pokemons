import React, { useEffect, useState } from 'react';
import Helpserver from './helpers/hepl';
import CardPokemons from './CardPokemons';
import { useNavigate } from 'react-router-dom';
const PokemensDisplay = () => {
    const [pokemons,setPokemens]=useState([]);
    const navigate=useNavigate();


    useEffect(()=>{
      Helpserver.getPokemens()
      .then(data =>{
          setPokemens(data);
      })
    console.log(pokemons);
        
    },[])
     
    // rederection vers la pages des details
       function handlClick(id){
           console.log(id)
      navigate(`/detail/${id}`);

     }
    
    return (
        <div className='row pt-4'>
            {pokemons.map(e => <CardPokemons key={e.id} id={e.id} onclick={handlClick} pokemon={e}/>)}            
        </div>
    );
}

export default PokemensDisplay;
