import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { deleteCustomer } from '../redux/Index'
import Loading from './Loading';
import RedirectToHome from './RedirectToHome';
import RedirectToProfile from './RedirectToProfile';

function DeleteCustomer ({ customerData, deleteCustomer, ...props}) {
  
  useEffect(() => {
    let custId = props.history.location.customerId;
    deleteCustomer(custId)
  }, [])

  
  return customerData.loading ? (
    <div className='loading' style={{position: 'absolute',left: '50%', top: '50%',transform: 'translate(-50%, -50%)'}}>
      <Loading/>
    </div>
  ) : customerData.error ? (
    <RedirectToProfile/>
  ) : (
    <RedirectToHome/>
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
