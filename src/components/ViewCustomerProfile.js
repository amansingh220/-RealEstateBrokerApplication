import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchCustomer } from '../redux/Index'
import '../stylesheets/profile.css'
import profile from'../images/profile-unknown3.jpg'
import Loading from './Loading';
import RedirectToDashboard from './RedirectToDashboard';
import Header from './Header'

function ViewCustomerProfile ({customerData, fetchCustomer, ...props}) {
  
  useEffect(() => {
    let custId = props.history.location.customerId;
    fetchCustomer(custId)
  }, [])

  function handleGoBack() {
    props.history.push({
      pathname: '/customers',
    });
  }

  return customerData.loading ? (
    <div className='loading' style={{position: 'absolute',left: '50%', top: '50%',transform: 'translate(-50%, -50%)'}}>
      <Loading/>
    </div>
  ) : customerData.error ? (
    <React.Fragment>
    <Header/>
    <RedirectToDashboard/>
    </React.Fragment>
  ) : (
    <React.Fragment>
    <Header/>
    <div Class="ProfileBodyCss mt-5">
      <div class="container rounded bg-white mt-4">
        <div class="row">
          <div class="col-md-4 border-right">
            <div class="d-flex flex-column align-items-center text-center p-3 py-1"><img class="" src={profile} width="220" height="360"/></div>
          </div>
          <div class="col-md-8">
            <div class="p-3 py-5">
              <div class="row mt-2">
                <div class="col-md-6">
                  <p className = "text-left">CustomerId
                  <input type="text" disabled = "true" className="form-control" value={customerData.customer.custId}/>
                  </p>
                </div>
                <div class="col-md-6">
                  <p className = "text-left">Name
                  <input type="text" disabled = "true" class="form-control" value={customerData.customer.custName}/>
                  </p>
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-md-6">
                  <p className = "text-left">Email Address
                  <input type="text" disabled = "true" class="form-control" value={customerData.customer.email}/>
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
                  <p className = "text-left">City
                  <input type="text" disabled = "true" class="form-control" value={customerData.customer.city}/>
                  </p>
                </div>
              </div>
                <button onClick={()=>handleGoBack()} className = 'btn btn-danger float-right mt-1'>Go Back</button>
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
)(ViewCustomerProfile)