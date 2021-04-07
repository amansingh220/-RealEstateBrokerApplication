import React from 'react';
import { useHistory } from 'react-router';
import Header from './Header2';

function SignUp_SignIn(props) {
    
    let history = useHistory()

    function handleLogIn() {
        history.push("/logIn")
    }

    function handleSignUpCustomer() {
        history.push("/register")
    }

    function handleSignUpBroker() {
        history.push("/register")
    }

    return (
        <div>
          <Header/>
          <h1 className="text-info py-5 mt-5">Log In or Register</h1>  
          <button onClick={()=>handleLogIn()} className="btn btn-primary mt-5 mr-4">Login</button>
          <button onClick={()=>handleSignUpCustomer()} className="btn btn-primary mt-5 mr-4">SignUp As Customer</button>
          <button onClick={()=>handleSignUpBroker()} className="btn btn-primary mt-5">SignUp As Broker</button>
        </div>
    );
}

export default SignUp_SignIn;