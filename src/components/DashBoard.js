import React from 'react';
import Footer from './Footer';
import Header from './Header';

function DashBoard(props) {

    if(props.history.location.customerId !== undefined) {
        localStorage.setItem("custId", props.history.location.customerId);
    }

    return (
        <div>
            <Header/>
            <h1 className='mt-5 py-5'>DashBoard</h1>
            <Footer/>
        </div>
    );
}

export default DashBoard;