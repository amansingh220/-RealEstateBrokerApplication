import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchAllBrokers } from '../redux/Index'
import RedirectToDashboard from './RedirectToDashboard';
import Button from '@material-ui/core/Button';
import Header from './Header';
import '../stylesheets/hover.css'
import LoadingScreen from './LoadingScreen'
import Footer from './Footer';

function ListAllBrokers ({ brokerData, fetchAllBrokers, ...props}) {

  useEffect(() => {
    fetchAllBrokers()
  }, [])

  function handleViewProfile(broId) {
    localStorage.setItem("broId1", broId)
    props.history.push({
      pathname: '/broker_profile1',
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
    <div className = "py-4 mt-5">
      <div className = "row">
        <table className = "table table-striped table-bordered table-hover">
          <thead>
            <tr>
              <th className="bg-success"> Broker UserId</th>
              <th className="bg-success"> Broker Name</th>
              <th className="bg-success"> Broker Email Id</th>
              <th className="bg-success"> Actions</th>
              </tr>
          </thead>
          <tbody>
            {
                brokerData.broker.map(
                    broker => 
                    <tr className="active" key = {broker.userId}>
                      <td> {broker.userId} </td>   
                      <td> {broker.broName}</td>
                      <td> {broker.email}</td>
                      {<td>
                        <Button variant="contained" color="primary" onClick={()=>handleViewProfile(broker.broId)}>
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
    <Footer/>
    </React.Fragment>
  )
}

const mapStateToProps = state => {
  return {
    brokerData: state.brokers
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAllBrokers: () => dispatch(fetchAllBrokers())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListAllBrokers)