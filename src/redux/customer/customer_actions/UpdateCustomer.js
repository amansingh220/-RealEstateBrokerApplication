import axios from 'axios'
import {
  UPDATE_CUSTOMER_REQUEST,
  UPDATE_CUSTOMER_SUCCESS,
  UPDATE_CUSTOMER_FAILURE
} from '../customer_action_types/CustomerActionTypes'

export const updateCustomer = (customer, custId) => {
  return (dispatch)=>  {
    dispatch(updateCustomerRequest(customer, custId))
    axios
      .put(`http://localhost:9000/rba/editcustomer/${custId}`,customer)
      .then(response => {
        // response.data is the customers
        const customer = response.data
        dispatch(updateCustomerSuccess(customer))
      })
      .catch(error => {
        // error.message is the error message
        dispatch(updateCustomerFailure(error.message))
      })
  }
}

//Action Creator
export const updateCustomerRequest = () => {
  return {
    type: UPDATE_CUSTOMER_REQUEST
  }
}

//Action Creator
export const updateCustomerSuccess = customer => {
  return {
    type: UPDATE_CUSTOMER_SUCCESS,
    payload: customer
  }
}

//Action Creator
export const updateCustomerFailure = error => {
  return {
    type: UPDATE_CUSTOMER_FAILURE,
    payload: error
  }
}