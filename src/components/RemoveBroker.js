import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { deleteBroker } from '../redux/Index'
import Header from './Header';
import Header2 from './Header2';
import AccountDeactivated from './AccountDeactivated';
import AccountDeactivationFailed from './AccountDeactivationFailed';
import LoadingScreen from './LoadingScreen'

function DeleteBroker ({ brokerData, deleteBroker, ...props}) {
  
  let loggedBroker = JSON.parse(sessionStorage.getItem("token"));

  useEffect(() => {
    let broId = loggedBroker.broId;
    deleteBroker(broId)
  }, [])

  
  return brokerData.loading ? (
    <div>
     <LoadingScreen/>
    </div>
  ) : brokerData.error ? (
    <React.Fragment>
    <Header/>
    <AccountDeactivationFailed/>
    </React.Fragment>
  ) : (
    <React.Fragment>
    <Header2/>
    <AccountDeactivated/>
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
