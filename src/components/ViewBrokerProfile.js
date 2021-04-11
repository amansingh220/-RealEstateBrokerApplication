import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchBroker } from '../redux/Index'
import '../stylesheets/profile.css'
import profile from'../images/profile-unknown3.jpg'
import RedirectToDashboard from './RedirectToDashboard';
import Header from './Header'
import LoadingScreen from './LoadingScreen'
import Button from '@material-ui/core/Button';
import Footer from './Footer'

function ViewBrokerProfile ({brokerData, fetchBroker, ...props}) {
  
  useEffect(() => {
    let broId = localStorage.getItem("broId1")
    fetchBroker(broId)
  }, [])

  function handleGoBack() {
    props.history.push({
      pathname: '/brokers',
    });
  }

  return brokerData.loading ? (
    <div>
     <LoadingScreen/>
    </div>
  ) : brokerData.error ? (
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
            <div class="d-flex flex-column align-items-center text-center p-3 py-1"><img class="img-fluid" src={profile} width="220" height="360"/></div>
          </div>
          <div class="col-md-8">
            <div class="p-3 py-5">
              <div class="row mt-2">
                <div class="col-md-6">
                  <p className = "text-left">BrokerId
                  <input type="text" disabled = "true" className="form-control" value={brokerData.broker.broId}/>
                  </p>
                </div>
                <div class="col-md-6">
                  <p className = "text-left">Name
                  <input type="text" disabled = "true" class="form-control" value={brokerData.broker.broName}/>
                  </p>
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-md-6">
                  <p className = "text-left">Email Address
                  <input type="text" disabled = "true" class="form-control" value={brokerData.broker.email}/>
                  </p>
                </div>
                <div class="col-md-6">
                  <p className = "text-left">Mobile Number
                  <input type="text" disabled = "true" class="form-control" value={brokerData.broker.mobile}/>
                  </p>
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-md-6">
                  <p className = "text-left">Role
                  <input type="text" disabled = "true" class="form-control" value={brokerData.broker.role}/>
                  </p>
                </div>
                <div class="col-md-6">
                  <p className = "text-left">City
                  <input type="text" disabled = "true" class="form-control" value={brokerData.broker.city}/>
                  </p>
                </div>
              </div>
                <Button className="float-right mt-5" onClick={()=>handleGoBack()} variant="contained" color="secondary" style={{backgroundColor: "#d13333", textTransform: 'none'}}>Go Back</Button>
            </div>
          </div>
        </div>
      </div> 
    </div> 
    <Footer/>
  </React.Fragment>
  )
}

const mapStateToProps = state => {
  return {
    brokerData: state.brokerDetails
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchBroker: (broId) => dispatch(fetchBroker(broId))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewBrokerProfile)