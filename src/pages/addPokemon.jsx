import React from 'react';
import FormEdite from '../componenet/form-edite';
const AddPokemon = () => {
    return (
        <div className='container'>
          <h1 className='display-7'>Ajouter un Pokemon </h1>
          <FormEdite type={true}/>
        </div>
    );
}

export default AddPokemon;
