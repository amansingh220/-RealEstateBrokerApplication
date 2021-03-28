import axios from 'axios'
import {
    DELETE_CUSTOMER_REQUEST,
    DELETE_CUSTOMER_SUCCESS,
    DELETE_CUSTOMER_FAILURE
} from '../customer_action_types/CustomerActionTypes'

export const deleteCustomer = (custId) => {
  return (dispatch)=>  {
    dispatch(deleteCustomerRequest(custId))
    axios
      .delete(`http://localhost:9000/rba/removecustomer/${custId}`)
      .then(response => {
        // response.data is the customers
        const customer = response.data
        dispatch(deleteCustomerSuccess(customer))
      })
      .catch(error => {
        // error.message is the error message
        dispatch(deleteCustomerFailure(error.message))
      })
  }
}

//Action Creator
export const deleteCustomerRequest = () => {
  return {
    type: DELETE_CUSTOMER_REQUEST
  }
}

//Action Creator
export const deleteCustomerSuccess = customer => {
  return {
    type: DELETE_CUSTOMER_SUCCESS,
    payload: customer
  }
}

//Action Creator
export const deleteCustomerFailure = error => {
  return {
    type: DELETE_CUSTOMER_FAILURE,
    payload: error
  }
}