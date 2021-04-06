import React from 'react';

function Home(props) {
    let customerData = props.history.location.viewedCustomerDetails;
    return (
        <div>
            <h1 className='mt-5 py-5'>Home Page</h1>
        </div>
    );
}

export default Home;