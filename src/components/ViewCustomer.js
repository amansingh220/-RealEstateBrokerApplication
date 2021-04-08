import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchCustomer } from '../redux/Index'
import '../stylesheets/profile.css'
import profile from'../images/profilepicture.jpg'
import RedirectToDashboard from './RedirectToDashboard';
import Header from './Header'
import LoadingScreen from './LoadingScreen'
import Button from '@material-ui/core/Button';

function ViewCustomer ({customerData, fetchCustomer, ...props}) {
  
  useEffect(() => {
    let custId = localStorage.getItem("custId");
    fetchCustomer(custId)
  }, [])

  function handleEditClick() {
    localStorage.setItem("customer", JSON.stringify(customerData.customer));
    props.history.push({
      pathname: '/update',
    });
  }

  function handleDeactivateClick() {
    props.history.push({
      pathname: '/confirm',
      customerId: customerData.customer.custId
    });
  }

  function handleLogOutClick() {
    props.history.push({
      pathname: '/confirm_logout',
    });
  }

  function handleViewPropertyClick() {
    if(customerData.customer.properties.length !== 0) {
      localStorage.setItem("properties", JSON.stringify(customerData.customer.properties));
      props.history.push({
        pathname: '/customer_properties',
      });
    } else {
      props.history.push({
        pathname: '/no_property_bought',
      });
    }
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
                <Button className="float-right mt-2 mr-2" onClick={()=>handleDeactivateClick()} variant="contained" color="secondary" style={{backgroundColor: "#d13333", textTransform: 'none'}}>Deactivate Account</Button>
                <Button className="float-left mt-2 mr-2" onClick={()=>handleEditClick()} variant="contained" color="secondary" style={{backgroundColor: "#236aad", textTransform: 'none'}}>Edit Details</Button>
                <Button className="float-left mt-2 mr-2" onClick={()=>handleViewPropertyClick()} variant="contained" color="secondary" style={{backgroundColor: "#2b9134", textTransform: 'none'}}>View Your Properties</Button>
                <Button className="float-right mt-2 mr-2" onClick={()=>handleLogOutClick()} variant="contained" color="secondary" style={{backgroundColor: "#ca862c", textTransform: 'none'}}>Logout</Button>
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