import React ,{useState, useEffect} from 'react';
import  {useParams,Link}  from 'react-router-dom'
import Helpserver from '../componenet/helpers/hepl.js';
const Detail = () => {
   const [pokemon,setPokemen]=useState({});
   let {id}=useParams();  
   useEffect(() => {
        Helpserver.getPokemensByid(id)
        .then(data => setPokemen(data))
   },[]);

    return (<div className='card col-md-6'>

            <img src={pokemon.picture} className="card-img-top" alt="pokemens" />
            <div className="card-body">
                <h2 className="card-title">{pokemon.name}</h2>
                <p className='card-text'>Les point de degat(cp) :{pokemon.cp}</p>
                <p className='card-text'>Les point de faible(hp) :{pokemon.hp}</p>
                <ul className='list-group'>
                    {pokemon.types && pokemon.types.map(e => <li key={e} className='list-group-item bg-dark text-light mb-3'>{e}</li> )}
                </ul>
            </div>
            <div className="alert alert-info">
                <Link to={`/edite/${pokemon.id}`} className='btn btn-info'>Edité le Pokemon</Link>
            </div>
        </div>
    );
}

export default Detail;
