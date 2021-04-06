import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchAllCustomers } from '../redux/Index'
import Loading from './Loading';
import RedirectToHome2 from './RedirectToHome2';
import Button from '@material-ui/core/Button';

function ListAllCustomers ({ customerData, fetchAllCustomers }) {
  useEffect(() => {
    fetchAllCustomers()
  }, [])
  return customerData.loading ? (
    <div className='loading' style={{position: 'absolute',left: '50%', top: '50%',transform: 'translate(-50%, -50%)'}}>
      <Loading/>
    </div>
  ) : customerData.error ? (
    <RedirectToHome2/>
  ) : (
    <div className = "py-4 mt-5">
      <div className = "row">
        <table className = "table table-striped table-bordered">
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
                    <tr key = {customer.userId}>
                      <td className="mt-5"> {customer.userId} </td>   
                      <td> {customer.custName}</td>
                      <td> {customer.email}</td>
                      {<td>
                        <Button variant="contained" color="primary" disabled>
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