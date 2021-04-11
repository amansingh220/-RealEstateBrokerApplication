// Importing customer action types.
import axios from "axios";
import {
  FETCH_CUSTOMER_REQUEST,
  FETCH_CUSTOMER_SUCCESS,
  FETCH_CUSTOMER_FAILURE,
} from "../customer_action_types/CustomerActionTypes";

// Below implemented function takes customer Id and dispatches the customer actions.
export const fetchCustomer = (custId) => {
  return (dispatch) => {
    dispatch(fetchCustomerRequest(custId));
    axios
      .get(`http://localhost:9000/rba/viewcustomer/${custId}`)
      .then((response) => {
        // Storing the response returned from api.
        const customer = response.data;
        dispatch(fetchCustomerSuccess(customer));
      })
      .catch((error) => {
        // Dispatching deleteCustomerFailure if any error occurs while api calling.
        dispatch(fetchCustomerFailure(error.response.data));
      });
  };
};

//Action Creator
export const fetchCustomerRequest = () => {
  return {
    type: FETCH_CUSTOMER_REQUEST,
  };
};

//Action Creator
export const fetchCustomerSuccess = (customer) => {
  return {
    type: FETCH_CUSTOMER_SUCCESS,
    payload: customer,
  };
};

//Action Creator
export const fetchCustomerFailure = (error) => {
  return {
    type: FETCH_CUSTOMER_FAILURE,
    payload: error,
  };
};
