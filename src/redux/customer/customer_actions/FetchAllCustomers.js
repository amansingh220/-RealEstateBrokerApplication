import axios from 'axios'
import {
  FETCH_CUSTOMERS_REQUEST,
  FETCH_CUSTOMERS_SUCCESS,
  FETCH_CUSTOMERS_FAILURE,
} from '../customer_action_types/CustomerActionTypes'

export const fetchAllCustomers = () => {
  return (dispatch)=>  {
    dispatch(fetchAllCustomersRequest())
    axios
      .get('http://localhost:9000/rba/listallcustomers')
      .then(response => {
        // response.data is the customers
        const customers = response.data
        dispatch(fetchAllCustomersSuccess(customers))
      })
      .catch(error => {
        // error.message is the error message
        dispatch(fetchAllCustomersFailure(error.message))
      })
  }
}

//Action Creator
export const fetchAllCustomersRequest = () => {
  return {
    type: FETCH_CUSTOMERS_REQUEST
  }
}

//Action Creator
export const fetchAllCustomersSuccess = customers => {
  return {
    type: FETCH_CUSTOMERS_SUCCESS,
    payload: customers
  }
}

//Action Creator
export const fetchAllCustomersFailure = error => {
  return {
    type: FETCH_CUSTOMERS_FAILURE,
    payload: error
  }
}