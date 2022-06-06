import React ,{useContext}from 'react';
import {Link,useNavigate} from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from './helpers/configfirebase';
import { context } from './helpers/Userglobal';
const Navbar = () => {
    const {user} =useContext(context)
    const navigate=useNavigate();
    async function handlclick(){
     try{
         await signOut(auth);
         navigate('/');
     }catch(err){
       console.log(err);

     }

        

    }
    return (
        <div className="navbar navbar-expand bg-dark">
            <div className='container-fluid'>
                     <button className='navbar-brand'>Pokemons</button>
                     <ul className='navbar-nav'>
                         <li className='nav-item'>
                             <Link to='/Private/home' className='btn btn-info me-4'>Acceuil</Link>
                         </li>
                         <li className='nav-item'>
                             <Link to='/addPokemon' className='btn btn-info me-4 '>Add new Pokemon</Link>
                         </li>
                         <li className='nav-item'>
                             <Link to='/signIn' className='btn btn-info me-4 '>signIn</Link>
                         </li>
                         <li className='nav-item'>
                             <Link to='/SignUp' className='btn btn-info me-4 '>SignUp</Link>
                         </li>
                         {user && <li className='nav-item'>
                          <div className="btn btn-danger" onClick={handlclick}>signOut</div>     
                        </li>}
                     </ul>
            </div>
            
        </div>
    );
}

export default Navbar;
