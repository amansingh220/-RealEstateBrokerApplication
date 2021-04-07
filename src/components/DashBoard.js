import React from 'react';
import Header from './Header';

function DashBoard(props) {

    if(props.history.location.customerId !== undefined) {
        localStorage.setItem("custId", props.history.location.customerId);
    }

    return (
        <div>
            <Header/>
            <h1 className='mt-5 py-5'>DashBoard</h1>
        </div>
    );
}

export default DashBoard;