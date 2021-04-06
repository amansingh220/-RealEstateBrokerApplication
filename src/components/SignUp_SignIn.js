import React from 'react';
import { useHistory } from 'react-router';
import Header from './Header2';

function SignUp_SignIn(props) {
    
    let history = useHistory()

    function handleLogIn() {
        history.push("/logIn")
    }

    function handleSignUp() {
        history.push("/register")
    }

    return (
        <div>
          <Header/>
          <h1 className="text-info py-5 mt-5">Log In or Register</h1>  
          <button onClick={()=>handleLogIn()} className="btn btn-primary mt-5 mr-4">Log In</button>
          <button onClick={()=>handleSignUp()} className="btn btn-primary mt-5">Sign Up</button>
        </div>
    );
}

export default SignUp_SignIn;