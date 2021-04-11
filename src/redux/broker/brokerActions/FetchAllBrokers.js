import axios from 'axios' 
import {
    FETCH_BROKERS_REQUEST,
    FETCH_BROKERS_SUCCESS,
    FETCH_BROKERS_FAILURE,
    
} from '../brokerTypes/brokerActionTypes'

export const fetchAllBrokers  = () => {
    return (dispatch) => {
        dispatch(fetchAllBrokerRequest())
    axios
      .get(`http://localhost:9000/rba/listallbrokers`)
      .then(response => {
        // response.data is the customers
        const brokers = response.data
        dispatch(fetchAllBrokerSuccess(brokers))
      })
      .catch(error => {
        // error.message is the error message
        dispatch(fetchAllBrokerFailure(error.message))
      })
    }
}
//Action Creator
export const fetchAllBrokerRequest = () => {
    return {
      type: FETCH_BROKERS_REQUEST
    }
  }
  
  //Action Creator
  export const fetchAllBrokerSuccess = brokers => {
    return {
      type: FETCH_BROKERS_SUCCESS,
      payload: brokers
    }
  }
  
  //Action Creator
  export const fetchAllBrokerFailure = error => {
    return {
      type: FETCH_BROKERS_FAILURE,
      payload: error
    }
  }