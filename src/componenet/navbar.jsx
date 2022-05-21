import React from 'react';
import {Link} from 'react-router-dom';
const Navbar = () => {
    return (
        <div className="navbar navbar-expand bg-dark">
            <div className='container-fluid'>
                     <a href="#" className='navbar-brand'>Pokemons</a>
                     <ul className='navbar-nav'>
                         <li className='nav-item'>
                             <Link to='/'>Acceuil</Link>
                         </li>
                     </ul>

            </div>
            
        </div>
    );
}

export default Navbar;
