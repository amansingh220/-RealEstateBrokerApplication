import axios from 'axios'
import {
  UPDATE_BROKER_REQUEST,
  UPDATE_BROKER_SUCCESS,
  UPDATE_BROKER_FAILURE
} from '../brokerTypes/brokerActionTypes'

export const updateBroker = (broker, broId) => {
  return (dispatch)=>  {
    dispatch(updateBrokerRequest(broker, broId))
    axios
      .put(`http://localhost:9000/rba/editbroker/${broId}`,broker) //wrong url was given
      .then(response => {
        // response.data is the customers
        const broker = response.data
        dispatch(updateBrokerSuccess(broker))
      })
      .catch(error => {
        // error.message is the error message
        dispatch(updateBrokerFailure(error.message))
      })
  }
}

//Action Creator
export const updateBrokerRequest = () => {
  return {
    type: UPDATE_BROKER_REQUEST
  }
}

//Action Creator
export const updateBrokerSuccess = broker => {
  return {
    type: UPDATE_BROKER_SUCCESS,
    payload: broker
  }
}

//Action Creator
export const updateBrokerFailure = error => {
  return {
    type: UPDATE_BROKER_FAILURE,
    payload: error
  }
}