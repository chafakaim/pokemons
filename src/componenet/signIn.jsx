import React,{useState,useContext} from 'react';
import {context} from '../componenet/helpers/Userglobal';
import {useNavigate} from 'react-router-dom';
let state={

    email:{
        valeur:'',
        error:'',
        isvalid:true
    },
    password:{
        valeur:'',
        error:'',
        isvalid:true
    }
}
const SignIn = () => {
       const [form,setForm]=useState(state)
       const [validator,setValidator]=useState(false)
       const {SignIn} =useContext(context)
      const navigate=useNavigate();
      
       function handlchange(e){
        let name=e.target.name;
        let value=e.target.value;

        setForm(form => ({...form,[name]:{
          valeur:value,
          error:'',
          isvalid:true       
        }})) 

       }
    // fonction de validatio des donner du formulaire 

     function validation(){
         if(form.email.valeur.length >= 5 ){
           let newform={...form};
           setForm(newform)
         }else{
             let newform={
                 email:{
                     valeur:form.email.valeur,
                     error:'email and/or password incorrect',
                     isvalid:false
                 }
             }
             setForm(form => ({...form,...newform}))
         }

         if( /[a-zA-Z0-9]/g.test(form.password.valeur) && form.password.valeur.length >= 5 ){
            let newform={...form};
            setForm(newform)
          }else{
              let newform={
                password:{
                      valeur:form.password.valeur,
                      error:'email and/or password incorrect',
                      isvalid:false
                  }
              }
              setForm(form => ({...form,...newform}))
          }

          return form.email.isvalid && form.password.isvalid; 
     }
    
     async function handlsubmit(e){
      e.preventDefault();

      let valid=validation();

      if(valid){

        try{
           const sign=await SignIn(form.email.valeur,form.password.valeur)  
           setForm(state);
           setValidator(false);
           navigate('/Private/home')
        
        }catch(err){
           setValidator(err.code)
        }

      }
     }

    return (
        <div className='row'>
            <form onSubmit={handlsubmit} action="" className='form-group'>
            {validator && <div className='alert alert-danger'>{validator}</div> }
            <div className="form-group">
                    {!form.email.isvalid && form.email.error && <div className='alert alert-danger mt-3'>{form.email.error}</div> }
                    <label htmlFor="" className='form-group-label display-6 me-4'>Email</label>
                    <input name='email' value={form.email.valeur} onChange={handlchange} type="text" className='form-control' placeholder='Votre Email' />
                </div>
                <div className="form-group">
                {!form.password.isvalid && form.password.error && <div className='alert alert-danger mt-3'>{form.password.error}</div> }
                    <label className='form-control-label display-6 me-4' htmlFor="">Password</label>
                    <input type="password" onChange={handlchange} name='password' value={form.password.valeur} className='form-control' placeholder='Votre Password' />
                </div>
                <div className="form-group">
                    <button className='btn btn-primary mt-4' type='submit'>s'inscrire</button>
                </div>
            </form>
        </div>
    );
}

export default SignIn;
