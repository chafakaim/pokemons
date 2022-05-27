import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Helpserver from '../componenet/helpers/hepl';
import FormEdite from '../componenet/form-edite';
const Edite = () => {
   const [pokemon,setPokemon]=useState({});
   const {id}=useParams();
   useEffect(()=> {

     Helpserver.getPokemensByid(id)
     .then(data=> setPokemon(data) );

   },[])


    return (<div className='container-fluid'>
            <FormEdite pokemon={pokemon}/>
        </div>
    );
}

export default Edite;
