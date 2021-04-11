import axios from 'axios'
import{
    DELETE_BROKER_REQUEST,
    DELETE_BROKER_SUCCESS,
    DELETE_BROKER_FAILURE,
  } from '../brokerTypes/brokerActionTypes'

export const deleteBroker = (broId) => {
  /* alert(broId) */
    return (dispatch) => {
        dispatch(deleteBrokerRequest(broId))
        axios
            .delete(`http://localhost:9000/rba/removebroker/${broId}`)
            .then(response => {
                const broker = response.data
                dispatch(deleteBrokerSuccess(broker))

            })
            .catch(error => {
                dispatch(deleteBrokerFailure(error.message))
            })

            

    }
}

//Action Creator
export const deleteBrokerRequest = () => {
    return {
      type: DELETE_BROKER_REQUEST
    }
  }
  
  //Action Creator
  export const deleteBrokerSuccess = broker => {
    return {
      type: DELETE_BROKER_SUCCESS,
      payload: broker
    }
  }
  
  //Action Creator
  export const deleteBrokerFailure = error => {
    return {
      type: DELETE_BROKER_FAILURE,
      payload: error
    }
  }