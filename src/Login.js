// Login.js
import React, { useState } from "react";
//import css
import './Login.css';
import {Link} from "react-router-dom";

function Login() {

const [email, setEmail] =useState('');
const [password, setPassword] =useState('');


const signIn = e => {
    e.preventDefault();
    //some fansy firebase login
}

const regiser = e => {
  e.preventDefault();
  //do some fancy firebase register

  

}

  return (
    <div className='login'>
         <Link to='/'>
         <img
          className="login__logo" 
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' alt="" srcset="" />
         
         </Link>

         <div className="login__container">
               <h1>Sign in</h1>
               <form action="">

                  <h5>E-mail</h5>
                  <input type='text'  value={email} onChange=
                  {e => setEmail(e.target.value)}/>

                  <h5>Password</h5>
                  <input type='password'  value={password} onChange=
                  {e => setPassword(e.target.value)} />

                  <button  
                  type='submit'
                  onClick={signIn}
                  className="login__signInButton">
                    Signin
                  </button>  
               </form>


               <p>
                By signing-in you agrees amazons Fake clones terms and conditions 
               </p>

               <button 
               onClick={regiser}
               className="login__registerButton">Create amazon account</button>
         </div>
         
      {/* Add your login form here */}
    </div>
  );
}

export default Login;
