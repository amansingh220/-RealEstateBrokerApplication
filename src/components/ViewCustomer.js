import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchCustomer } from '../redux/Index'
import '../rbacss/profile.css'
import profile from'../rbacss/profilepicture.jpg'
import Loading from './Loading';
import RedirectToHome2 from './RedirectToHome2';

function ViewCustomer ({customerData, fetchCustomer, ...props}) {
  
  useEffect(() => {
    let custId = 920;
    fetchCustomer(custId)
  }, [])

  function handleEditClick() {
    props.history.push({
      pathname: '/update',
      viewedCustomerDetails: customerData.customer
    });
  }

  function handleDeactivateClick() {
    props.history.push({
      pathname: '/confirm',
      customerId: customerData.customer.custId
    });
  }

  return customerData.loading ? (
    <div className='loading' style={{position: 'absolute',left: '50%', top: '50%',transform: 'translate(-50%, -50%)'}}>
      <Loading/>
    </div>
  ) : customerData.error ? (
    <RedirectToHome2/>
  ) : (
    <React.Fragment>
    <div Class="ProfileBodyCss mt-4">
      <div class="container rounded bg-white">
        <div class="row">
          <div class="col-md-4 border-right">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="" src={profile} width="220" height="380"/></div>
          </div>
          <div class="col-md-8">
            <div class="p-3 py-5">
              <div class="row mt-2">
                <div class="col-md-6">
                  <p className = "text-left">UserId
                  <input type="text" disabled = "true" className="form-control" value={customerData.customer.userId}/>
                  </p>
                </div>
                <div class="col-md-6">
                  <p className = "text-left">CustomerId
                  <input type="text" disabled = "true" class="form-control" value={customerData.customer.custId}/>
                  </p>
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-md-6">
                  <p className = "text-left">Name
                  <input type="text" disabled = "true" class="form-control" value={customerData.customer.custName}/>
                  </p>
                </div>
                <div class="col-md-6">
                  <p className = "text-left">Email Address
                  <input type="text" disabled = "true" class="form-control" value={customerData.customer.email}/>
                  </p>
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-md-6">
                  <p className = "text-left">City
                  <input type="text" disabled = "true" class="form-control" value={customerData.customer.city}/>
                  </p>
                </div>
                <div class="col-md-6">
                  <p className = "text-left">Mobile Number
                  <input type="text" disabled = "true" class="form-control" value={customerData.customer.mobile}/>
                  </p>
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-md-6">
                  <p className = "text-left">Role
                  <input type="text" disabled = "true" class="form-control" value={customerData.customer.role}/>
                  </p>
                </div>
                <div class="col-md-6">
                  <p className = "text-left">Password
                  <input type="text" disabled = "true" class="form-control" value={customerData.customer.password}/>
                  </p>
                </div>
              </div>
                <button onClick={()=>handleDeactivateClick()} className = 'btn btn-danger float-right mt-1'>Deactivate Account</button>
                <button onClick={()=>handleEditClick()} className = 'btn btn-info float-left mt-1 mr-2'>Edit Details</button>
            </div>
          </div>
        </div>
      </div> 
    </div> 
  </React.Fragment>
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