import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { deleteCustomer } from '../redux/Index'
import Header from './Header';
import Header2 from './Header2';
import AccountDeactivated from './AccountDeactivated';
import AccountDeactivationFailed from './AccountDeactivationFailed';
import LoadingScreen from './LoadingScreen'

function DeleteCustomer ({ customerData, deleteCustomer, ...props}) {
  
  let loggedCustomer = JSON.parse(sessionStorage.getItem("token"));

  useEffect(() => {
    let custId = loggedCustomer.custId;
    deleteCustomer(custId)
  }, [])

  
  return customerData.loading ? (
    <div>
     <LoadingScreen/>
    </div>
  ) : customerData.error ? (
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
    customerData: state.deletedCustomerDetails
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteCustomer: (custId) => dispatch(deleteCustomer(custId))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteCustomer)
