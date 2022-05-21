import React ,{useState, useEffect} from 'react';
import  {useParams}  from 'react-router-dom'
import Helpserver from './helpers/hepl';
const Detail = () => {
   const [pokemon,setPokemen]=useState();
   const {id}=useParams();  

   useEffect(() => {
    Helpserver.getPokemensByid(id)
    .then(data => console.log(data))    
   },[]);

    return (
        <div className='card col-md-6'>
            {console.log(pokemon)}
            <img src={pokemon.picture} className="card-img-top" alt="image de pokemens" />
            <div className="card-body">
                <h2 className="card-title">{pokemon.name}</h2>
                <p className='card-text'>Les point de degat(cp) :{pokemon.cp}</p>
                <p className='card-text'>Les point de faible(hp) :{pokemon.hp}</p>
                <ul className='list-group'>
                    {pokemon.types.map(e => <li key={e} className='list-group-item bg-dark text-light mb-3'>{e}</li> )}
                </ul>
            </div>
        </div>
    );
}

export default Detail;
