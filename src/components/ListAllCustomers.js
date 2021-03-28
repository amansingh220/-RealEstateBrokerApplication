import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchAllCustomers } from '../redux/Index'

function ListAllCustomers ({ customerData, fetchAllCustomers }) {
  useEffect(() => {
    fetchAllCustomers()
  }, [])
  return customerData.loading ? (
    <h2>Loading</h2>
  ) : customerData.error ? (
    <h4 className='text-danger mt-3'>Test For List All Customers Functionality Failed With Following Message : {customerData.error}</h4>
  ) : (
    <div>
      <h2>{/* Users List */}</h2>
      <div>
       {/*  {customerData &&
          customerData.customers &&
          customerData.customers.map(customer =>
            <ul>
              <li>Username :{customer.custName}</li>
              <li>Email :{customer.email}</li>
            </ul> 
          )} */}

        <h4 className = 'text-success mt-3'>Test For List All Customers Functionality Successful</h4>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    customerData: state.customers
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAllCustomers: () => dispatch(fetchAllCustomers())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListAllCustomers)
