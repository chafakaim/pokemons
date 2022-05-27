import React, {useState} from 'react';
import Helpserver from '../componenet/helpers/hepl';
import { useNavigate } from 'react-router-dom';
const FormEdite = ({pokemon={},type}) => {
   const tab=["Plante", "Poison","Feu","Eau","Normal", "Vol","Insecte", "Poison","Electrik","Fée"]
   const navigate=useNavigate()
   const [state,setState] =useState({
    'name':{
        valeur:pokemon.name ? pokemon.name: '',
        error:'',
        isvalid:true
    },
    'hp':{
        valeur:pokemon.hp,
        error:'',
        isvalid:true
    },
    'cp':{
       valeur:pokemon.cp,
       error:'',
       isvalid:true
    },
    'types':{
        valeur:pokemon.types ? [...pokemon.types]: [],
        error:'',
        isvalid:true
    }
})

   
   function handlchange(e){
    let type=e.target.name;
    let value=e.target.value;
    setState(state=> state={...state,[type]:{
        valeur:value
    }})
   }
   

   function handlChecked(e){
       let newChecked=[].concat(e.target.name)
       setState(state=> state={...state,'types':{
           valeur:[...state.types.valeur,...newChecked]
       }})
   }

   function handlSubmit(e){
     e.preventDefault();

     let newPokemons={
         id:pokemon.id,
         picture:pokemon.picture,
         name:state.name.valeur,
         hp:state.hp.valeur,
         cp:state.cp.valeur,
         types:state.types.valeur
     }
     Helpserver.setPokemonbyId(newPokemons).then(e => e)
     navigate(`/detail/${pokemon.id}`)
   }
    return (
        <form className='form-group' onSubmit={handlSubmit}>
            {type && 
            <div className="form-group">
                <input type="file" name="file" id="file" accept='.png,.jpg,.gif' className='form-control' />
            </div>
            }
            <div className="form-group">
                <label className="form-label display-5 ">Name :</label>
                <input type="text" className='form-control' onChange={handlchange} id='name' value={state.name.valeur || ''} name='name'  />
            </div>
            <div className="form-group">
                <label className="form-label display-5 ">Cp :</label>
                <input type="text" className='form-control' onChange={handlchange} id='cp' value={state.cp.valeur || ' '} name='cp'  />
            </div>
            <div className="form-group">
                <label className="form-label display-5 ">Hp :</label>
                <input type="text" className='form-control' onChange={handlchange} id='hp' value={state.hp.valeur || ' '} name='hp'  />
            </div>
            {tab.map((e,index)=>{   
                return <label key={index}  className='form-check-label'>{e}<input name={e} key={index} className='form-check' checked={state.types.valeur && state.types.valeur.includes(e)} onChange={handlChecked} type='checkbox'/></label>
                })}
            <div className='form-group'>
                 <button type='submit' className='btn btn-primary'>Valider</button>
            </div>
        </form>
    );
}

export default FormEdite;
