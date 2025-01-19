import React, { useContext, useRef, useState } from 'react';
import './Auth.css'
import { Authcontext } from '../Context/Authcontext';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";

export default function Auth() {
  const [state,setState]=useState(true);
  const {signup,signin}=useContext(Authcontext);
  let emailref = useRef();
  let passwordref = useRef();
  const navigate = useNavigate()

  const handleuser = async(e)=>{
    e.preventDefault();
    
    if(state){
      try{
        await signup(emailref.current.value,passwordref.current.value);
        toast.success("Login Success!");
        emailref.current.value="";
        passwordref.current.value="";
        navigate('/')
        

      }
      catch(error){
        toast.error(`Error message!${error.message}`);

      }
      
    }else{
      try{
        await signin(emailref.current.value,passwordref.current.value);
        toast.success("Login Success!");
        emailref.current.value="";
        passwordref.current.value="";
        navigate('/')
        

      }
      catch(error){
        toast.error(`Error message!${error.message}`);

      }

    }
  }
  return (

    <div className='auth'>
        <h2>{state  ? "Create New Account" : "Sign in" }</h2>
        <form onSubmit={handleuser}>
              <input type='email' placeholder='Email' ref={emailref}></input>
              <input type='password' placeholder='Enter password' ref={passwordref}></input>
              <button>{state ?"Register":"Login"}</button>
              <p>Already have an account ?
                 <span style={{color:"blue",cursor:"pointer",marginLeft:"5px"}}
               onClick={()=>setState(!state)}>
               {state  ? "Sign in" : "Sign up" }</span>
                
                </p>

        </form>
      


    </div>
  )
}
