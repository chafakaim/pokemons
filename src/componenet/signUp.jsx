import React,{useContext,useState} from 'react';
import { context } from './helpers/Userglobal';
import { useNavigate } from 'react-router-dom';
const state={
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

const SignUp = () => {
    const navigate=useNavigate()
    const {createUser,toggleUser,user} =useContext(context)
     const [form,setForm] = useState(state);
     const [validation,setValidation]=useState(false)
     function handlchange(e){
        let type=e.target.name;
        let value=e.target.value;

        setForm(form => ({...form,[type]:{
            valeur:value,
            error:'',
            isvalid:true
        }}))
    }
    function validateForm(){
        if( form.email.valeur.length <= 5){
            let erreur='email and/or password is incorrect'
            let newform={email:{
                valeur:form.email.valeur,
                error:erreur,
                isvalid:false
            }}
            setForm(form =>({...form,...newform}));
        }else{
            let newform={...form};
            setForm(newform);
        }
        if( /(\w+\d+)/g.test(form.password.valeur) && form.password.valeur.length >=4  ){
            let newform={...form}
            setForm(newform)
        }else{
           let newform={...form,...{password:{
            valeur:form.password.valeur,
            error:'email and/or password incorect (le mot de pass doit contenir des nombre)',
            isvalid:false
        }}}
            setForm(newform);
        }
     return form.email.isvalid && form.password.isvalid
    }
    async function handlSubmit(e){
        e.preventDefault();
        setValidation(false)
        let valid=validateForm();
        if(valid){
          try{
            const cred=await createUser(form.email.valeur,form.password.valeur);
            setValidation(false);
            setForm(state);
            navigate('/Private/home');
          }catch(err){
               let code=err.code;
               setValidation(code);
          }
        }
    }
    return (
        <div className="row">
            {validation && <div className='alert alert-danger'>{validation}</div>}
            <form onSubmit={handlSubmit} className='form-group p-4'>
                <div className="form-group">
                    {!form.email.isvalid && form.email.error && <div className='alert alert-danger'>{state.email.error}</div> }
                    <label htmlFor="" className='form-group-label display-6 me-4'>Email</label>
                    <input name='email' value={form.email.valeur} onChange={handlchange} type="text" className='form-control' placeholder='Votre Email' />
                </div>
                <div className="form-group">
                {!form.password.isvalid && form.password.error && <div className='alert alert-danger'>{form.password.error}</div> }
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

export default SignUp;
