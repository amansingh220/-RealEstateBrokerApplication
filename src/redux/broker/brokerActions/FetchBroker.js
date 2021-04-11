import axios from 'axios' 
import {
    FETCH_BROKER_REQUEST,
    FETCH_BROKER_SUCCESS,
    FETCH_BROKER_FAILURE,
    
} from '../brokerTypes/brokerActionTypes'

export const fetchBroker  = (broId) => {
    return (dispatch) => {
        dispatch(fetchBrokerRequest(broId))
    axios
      .get(`http://localhost:9000/rba/viewbroker/${broId}`)
      .then(response => {
        // response.data is the customers
        const broker = response.data
        dispatch(fetchBrokerSuccess(broker))
      })
      .catch(error => {
        // error.message is the error message
        dispatch(fetchBrokerFailure(error.message))
      })
    }
}
//Action Creator
export const fetchBrokerRequest = () => {
    return {
      type: FETCH_BROKER_REQUEST
    }
  }
  
  //Action Creator
  export const fetchBrokerSuccess = broker => {
    return {
      type: FETCH_BROKER_SUCCESS,
      payload: broker
    }
  }
  
  //Action Creator
  export const fetchBrokerFailure = error => {
    return {
      type: FETCH_BROKER_FAILURE,
      payload: error
    }
  }