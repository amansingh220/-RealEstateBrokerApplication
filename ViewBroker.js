import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchBroker } from '../redux/Index'
import '../RBAcss/style.css'
import Header from './Header'

function ViewBroker ({ brokerData, fetchBroker,...props }) {
    useEffect(() => {
        let broId = localStorage.getItem("broId");
        fetchBroker(broId)
      }, [])

return brokerData.loading ? (
  <div>
     {/* <LoadingScreen/> */}
    </div>
  ) : brokerData.error ? (
    <React.Fragment>
    <Header/>
    {/* <RedirectToDashboard/> */}
    </React.Fragment>
  ) : (
    <React.Fragment>
      <div Class="ProfileBodyCss">
        <div class="container rounded bg-white mt-5">
          <div class="row">
            <div class="col-md-4 border-right">
              <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" src="https://i.imgur.com/0eg0aG0.jpg" width="90"/><span class="font-weight-bold">John Doe</span><span class="text-black-50">john_doe12@bbb.com</span><span>United States</span></div>
            </div>
            <div class="col-md-8">
              <div class="p-3 py-5">
                <div class="row mt-2">
                  <div class="col-md-6"><input type="text" class="form-control" value ={brokerData.broker.broId}/></div>
                  <div class="col-md-6"><input type="text" class="form-control" value ={brokerData.broker.userId}/></div>
                </div>
                <div class="row mt-3">
                  <div class="col-md-6"><input type="text" class="form-control" value ={brokerData.broker}/></div>
                  <div class="col-md-6"><input type="text" class="form-control" value ={brokerData.broker}/></div>
                </div>
                <div class="row mt-3">
                  <div class="col-md-6"><input type="text" class="form-control" value ={brokerData.broker}/></div>
                  <div class="col-md-6"><input type="text" class="form-control" value ={brokerData.broker}/></div>
                </div>
                <div class="row mt-3">
                  <div class="col-md-6"><input type="text" class="form-control" value ={brokerData.broker}/></div>
                  <div class="col-md-6"><input type="text" class="form-control" value ={brokerData.broker}/></div>
                </div>
                <div class="mt-5 text-right">
                  <button class="btn btn-primary profile-button" type="button">Save Profile</button>
                </div>
              </div>
            </div>
          </div>
        </div> 
      </div> 
    </React.Fragment>
  );
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
  )(ViewBroker);
