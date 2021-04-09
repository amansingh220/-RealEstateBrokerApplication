import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { deleteBroker } from '../redux/Index'
import Loading from './Loading';
    
function DeleteBroker ({ deleteBroker,brokerData,...props})
{
    useEffect(() => {
        let broId =  263;
        deleteBroker(broId)
    },[])

   return brokerData.loading ?(
         <div className='loading' style={{position: 'absolute',left: '50%', top: '50%',transform: 'translate(-50%, -50%)'}}>
         {/* <Header/> */}
         <Loading/>
       </div>
     ) : brokerData.error ? (
       <React.Fragment>
       {/* <Header/> */}
       {/* <RedirectToProfile/> */}
       </React.Fragment>
     ) : (
       <React.Fragment>
       {/* <Header2/> */}
       {/* <RedirectToHome/> */}
       </React.Fragment>
    
     )
}
const mapStateToProps = state => {
    return {
      brokerData: state.deletedBrokerDetails
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      deleteBroker: (broId) => dispatch(deleteBroker(broId))
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(DeleteBroker)