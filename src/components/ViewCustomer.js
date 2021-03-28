import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchCustomer } from '../redux/Index'

function ViewCustomer ({ customerData, fetchCustomer }) {
  
  useEffect(() => {
    let custId = 312;
    fetchCustomer(custId)
  }, [])

  
  return customerData.loading ? (
    <h2>Loading</h2>
  ) : customerData.error ? (
    <h4 className='text-danger mt-3'>Test For View Customer Functionality Failed With Following Message : {customerData.error}</h4>
  ) : (
    <div>
        <h4 className = 'text-success mt-3'>Test For View Customer Functionality Successful</h4>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    customerData: state.customerDetails
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCustomer: (custId) => dispatch(fetchCustomer(custId))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewCustomer)
