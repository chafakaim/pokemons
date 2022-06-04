import React, {useState} from 'react';
import Helpserver from '../componenet/helpers/hepl';
import { useNavigate } from 'react-router-dom';
import Pokemon from './helpers/Pokemon';
const FormEdite = ({pokemon={},type}) => {
   const tab=["Plante", "Poison","Feu","Eau","Normal", "Vol","Insecte", "Poison","Electrik","Fée"]
   const navigate=useNavigate()
   const [state,setState] =useState({
    name:{
        valeur:pokemon.name ? pokemon.name:' ',
        error:'',
        isvalid:true
    },
    picture:{
        valeur:'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/...',
        error:'',
        isvalid:true
    },
    hp:{
        valeur:pokemon.hp,
        error:'',
        isvalid:true
    },
    cp:{
       valeur:pokemon.cp,
       error:'',
       isvalid:true
    },
    types:{
        valeur:pokemon.types ? [...pokemon.types]: [],
        error:'',
        isvalid:true
    }
})
   function validationForm(){
     if(/[a-zA-Z0-9]/ig.test(state.name.valeur) === false || state.name.valeur === ''  || state.name.valeur === undefined){
        let newstate={...state,name:{
                valeur:state.name.valeur,
                error:'le champ doit contenir ou moin 3caratére ou plus',
                isvalid:false
            }
        }
        setState(newstate)     
    }else{
        setState(state =>({...state,name:{
            valeur:state.name.valeur,
            error:'',
            isvalid:true
        }}));
     }
     if(/[0-9]/g.test(state.hp.valeur) === false || state.hp.valeur === '' || state.hp.valeur === undefined){
         setState({...state,hp:{
             valeur:state.hp.valeur,
             error:'se champs n accepte pas des caractere juste des nombre',
             isvalid:false
         }})
        console.log('error hp')
           
    }else{
        setState(state =>({...state,hp:{
            valeur:state.hp.valeur,
            error:'',
            isvalid:true
        }}));
    }
    if(/[0-9]/g.test(state.cp.valeur) === false || state.cp.valeur === ''  || state.cp.valeur === undefined){
            setState({...state,cp:{
                valeur:state.cp.valeur,
                error:'se champs n accepte pas des caractere juste des nombre',
                isvalid:false
            }})        
        console.log('error cp')

        }else{
            setState(state =>({...state,cp:{
                valeur:state.cp.valeur,
                error:'',
                isvalid:true
            }}));
        }
    return state.name.isvalid && state.hp.isvalid && state.cp.isvalid;
   }
   
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
     
     let valid=validationForm();

     let newPokemons={
         id:pokemon.id,
         picture:pokemon.picture,
         name:state.name.valeur,
         hp:state.hp.valeur,
         cp:state.cp.valeur,
         types:state.types.valeur
     }
     if(valid && !type){
        Helpserver.setPokemonbyId(newPokemons).then(e => navigate(`/detail/${pokemon.id}`)         )
        return
     }
   if(valid && type){
        let pokemonPost=new Pokemon(new Date().getTime(),state.name.valeur,state.picture.valeur,state.hp.valeur,state.cp.valeur,state.types.valeur)
         Helpserver.insertPokemon(pokemonPost).then(e => navigate('/'));
        return
      }
   }
    return (
        <form className='form-group' onSubmit={handlSubmit}>
            {type && 
            <div className="form-group">
                <input type="text" name="picture" id="file" className='form-control' value={state.picture.valeur} onChange={handlchange} />
            </div>
            }
            <div className="form-group">
                <label className="form-label display-5 ">Name :</label>
                <input type="text" className='form-control' onChange={handlchange} id='name' value={state.name.valeur || ''} name='name'  />
               {!state.name.isvalid? <div className='alert alert-danger'>{state.name.error}</div>:'' }
            </div>
            <div className="form-group">
                <label className="form-label display-5 ">Cp :</label>
                <input type="text" className='form-control' onChange={handlchange} id='cp' value={state.cp.valeur || ' '} name='cp'  />
                {!state.cp.isvalid? <div className='alert alert-danger'>{state.cp.error}</div>:'' }
            
            </div>
            <div className="form-group">
                <label className="form-label display-5 ">Hp :</label>
                <input type="text" className='form-control' onChange={handlchange} id='hp' value={state.hp.valeur || ' '} name='hp'  />
                {!state.hp.isvalid ? <div className='alert alert-danger'>{state.hp.error}</div>:'' }
            
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
