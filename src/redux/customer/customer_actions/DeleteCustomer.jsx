// Importing customer action types.
import axios from "axios";
import {
  DELETE_CUSTOMER_REQUEST,
  DELETE_CUSTOMER_SUCCESS,
  DELETE_CUSTOMER_FAILURE,
} from "../customer_action_types/CustomerActionTypes";

// Below implemented function takes customer Id and dispatches the customer actions.
export const deleteCustomer = (custId) => {
  return (dispatch) => {
    dispatch(deleteCustomerRequest(custId));
    axios
      .delete(`http://localhost:9000/rba/removecustomer/${custId}`)
      .then((response) => {
        // Storing the response returned from api.
        const customer = response.data;
        dispatch(deleteCustomerSuccess(customer));
      })
      .catch((error) => {
        // Dispatching deleteCustomerFailure if any error occurs while api calling.
        dispatch(deleteCustomerFailure(error.response.data));
      });
  };
};

//Action Creator.
export const deleteCustomerRequest = () => {
  return {
    type: DELETE_CUSTOMER_REQUEST,
  };
};

//Action Creator
export const deleteCustomerSuccess = (customer) => {
  return {
    type: DELETE_CUSTOMER_SUCCESS,
    payload: customer,
  };
};

//Action Creator
export const deleteCustomerFailure = (error) => {
  return {
    type: DELETE_CUSTOMER_FAILURE,
    payload: error,
  };
};
