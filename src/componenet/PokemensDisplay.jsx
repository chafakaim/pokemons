import React, { useEffect, useState } from 'react';
import Helpserver from './helpers/hepl';
import CardPokemons from './CardPokemons';
import { useNavigate } from 'react-router-dom';
import SerchForm from './serchForm';
const PokemensDisplay = () => {
    const [pokemons,setPokemens]=useState([]);
    const [valeur,setValeur]=useState('');
    const navigate=useNavigate();


    useEffect(()=>{
      Helpserver.getPokemens()
      .then(data =>{
          setPokemens(data);
      })
    },[pokemons])
     
    // rederection vers la pages des details
       function handlClick(id){
           console.log(id)
      navigate(`/detail/${id}`);

     }
    function change(e){
         setValeur(e.target.value);
    }
    function handlSubmit(e){
        e.preventDefault();
        }

     function handlDelete(pokemon){
         Helpserver.deltePokemons(pokemon).then(data => console.log(data))
     }   
    return (
        <div className='row pt-4'>
            <SerchForm value={valeur} change={change} handlSubmit={handlSubmit}/>
            {pokemons.filter(e => e.name.includes(valeur)).map(e => <CardPokemons ondeletePokemon={handlDelete} key={e.id} id={e.id} onclick={handlClick} pokemon={e}/>)}            
        </div>
    );
}

export default PokemensDisplay;
