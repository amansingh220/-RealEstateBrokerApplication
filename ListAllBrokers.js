import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchAllBrokers } from '../redux/Index'

function ListAllBrokers ({ brokerData, fetchAllBrokers}) {
    useEffect(() => {
        fetchAllBrokers()
      }, [])

    return brokerData.loading ? (
        <h2>Loading</h2>
      ) : brokerData.error ? (
        <h4 className='text-danger mt-3'>Test  : {brokerData.error}</h4>
      ) : (
        <div>
          <h2>{/* Users List */}</h2>
          
            <h4 className = 'text-success mt-3'>Test For List All Broker Functionality Successful</h4>
          
        </div>
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
  