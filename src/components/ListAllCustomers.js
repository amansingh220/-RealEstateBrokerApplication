import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchAllCustomers } from '../redux/Index'
import RedirectToDashboard from './RedirectToDashboard';
import Button from '@material-ui/core/Button';
import Header from './Header';
import '../stylesheets/hover.css'
import LoadingScreen from './LoadingScreen'

function ListAllCustomers ({ customerData, fetchAllCustomers, ...props}) {

  useEffect(() => {
    fetchAllCustomers()
  }, [])

  function handleViewProfile(custId) {
    localStorage.setItem("custId1", custId)
    props.history.push({
      pathname: '/customer_profile',
    });
  }

  return customerData.loading ? (
    <div>
     <LoadingScreen/>
    </div>
  ) : customerData.error ? (
    <React.Fragment>
    <Header/>
    <RedirectToDashboard/>
    </React.Fragment>
  ) : (
    <React.Fragment>
    <Header/>
    <div className = "py-4 mt-5">
      <div className = "row">
        <table className = "table table-striped table-bordered table-hover">
          <thead>
            <tr>
              <th className="bg-success"> Customer UserId</th>
              <th className="bg-success"> Customer Name</th>
              <th className="bg-success"> Customer Email Id</th>
              <th className="bg-success"> Actions</th>
              </tr>
          </thead>
          <tbody>
            {
                customerData.customers.map(
                    customer => 
                    <tr className="active" key = {customer.userId}>
                      <td> {customer.userId} </td>   
                      <td> {customer.custName}</td>
                      <td> {customer.email}</td>
                      {<td>
                        <Button variant="contained" color="primary" onClick={()=>handleViewProfile(customer.custId)}>
                          View Profile
                        </Button>
                      </td>}
                    </tr>
                )
            }
          </tbody>
        </table>
      </div>
    </div>
    </React.Fragment>
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