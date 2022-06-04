import React,{useContext} from 'react';
import { Outlet,Navigate } from 'react-router-dom';
import { auth } from '../componenet/helpers/configfirebase';
import { context } from '../componenet/helpers/Userglobal';
const Private = () => {
    const {user}=useContext(context);
    console.log(user)
  if(user === null){
      console.log('je suis dans')
      return <Navigate to='/'/>
  }
    return <div className='container'>
      <Outlet />;
    </div>
}

export default Private;
