import React, { useState } from 'react';
import Header from './Header2';

function Login(props) {

    let [custId, setCustId] = useState(0);

    function handleSubmit() {
        props.history.push({
            pathname: '/dashboard',
            customerId: custId
        });
    }

    return (
        <div>
            <Header/>
            <h1 className="py-5  mt-5">Login Page</h1>
            <h4 className="py-5  mt-5">Enter The Customer Id</h4>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="form-group container">
              <label>Customer Id</label>
              <input
                onChange={(e) => setCustId(e.target.value)}
                className="form-control"
              />
            </div>
            <button className="btn btn-primary">Login</button>
          </form>
    
          <hr />
    
          <h5>Name : {custId}</h5>
            </div>
        </div>
    );
}

export default Login;