import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { updateCustomer } from '../redux/Index'

function EditCustomer ({ customerData, updateCustomer}) {
  
  useEffect(() => {

    //take the below input from the user by using form.
    let custId = 184;
    let customer = {
        custName: "Azana Thakur",
        password: "hatpagal7845",
        mobile: "9760694347",
        email: "amansthakur898562@gmail.com",
        city : "Mathura"
    }

    updateCustomer(customer, custId)
  }, [])

  
  return customerData.loading ? (
    <h2>Loading</h2>
  ) : customerData.error ? (
    <h4 className='text-danger mt-3'>Test For Edit Customer Functionality Failed With Following Message : {customerData.error}</h4>
  ) : (
    <div>
        <h4 className = 'text-success mt-3'>Test For Edit Customer Functionality Successful</h4>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    customerData: state.updatedCustomerDetails
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateCustomer: (customer, custId) => dispatch(updateCustomer(customer, custId))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditCustomer)
