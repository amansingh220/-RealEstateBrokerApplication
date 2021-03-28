import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { deleteCustomer } from '../redux/Index'

function DeleteCustomer ({ customerData, deleteCustomer }) {
  
  useEffect(() => {
    let custId = 499;
    deleteCustomer(custId)
  }, [])

  
  return customerData.loading ? (
    <h2>Loading</h2>
  ) : customerData.error ? (
    <h4 className='text-danger mt-3'>Test For Delete Customer Functionality Failed With Following Message : {customerData.error}</h4>
  ) : (
    <div>
        <h4 className = 'text-success mt-3'>Test For Delete Customer Functionality Successful</h4>
    </div>
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
