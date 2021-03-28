import axios from 'axios'
import {
  INSERT_CUSTOMER_REQUEST,
  INSERT_CUSTOMER_SUCCESS,
  INSERT_CUSTOMER_FAILURE
} from '../customer_action_types/CustomerActionTypes'

export const insertCustomer = (customer) => {
  return (dispatch)=>  {
    dispatch(insertCustomerRequest(customer))
    axios
      .post(`http://localhost:9000/rba/addcustomer`,customer)
      .then(response => {
        // response.data is the customers
        const customer = response.data
        dispatch(insertCustomerSuccess(customer))
      })
      .catch(error => {
        // error.message is the error message
        dispatch(insertCustomerFailure(error.message))
      })
  }
}

//Action Creator
export const insertCustomerRequest = () => {
  return {
    type: INSERT_CUSTOMER_REQUEST
  }
}

//Action Creator
export const insertCustomerSuccess = customer => {
  return {
    type: INSERT_CUSTOMER_SUCCESS,
    payload: customer
  }
}

//Action Creator
export const insertCustomerFailure = error => {
  return {
    type: INSERT_CUSTOMER_FAILURE,
    payload: error
  }
}