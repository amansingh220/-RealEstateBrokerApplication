import React from 'react';
import Loading from './Loading';
import Header from './Header'

function LoadingScreen(props) {
    return (
       <React.Fragment>
            <Header/>
            
            <div className='loading' style={{position: 'absolute',left: '50%', top: '50%',transform: 'translate(-50%, -50%)', color:'green'}}>
                
                <Loading/>
            </div>
            
       </React.Fragment>
    );
}

export default LoadingScreen;