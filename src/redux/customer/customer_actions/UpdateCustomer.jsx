// Importing customer action types.
import axios from "axios";
import {
  UPDATE_CUSTOMER_REQUEST,
  UPDATE_CUSTOMER_SUCCESS,
  UPDATE_CUSTOMER_FAILURE,
} from "../customer_action_types/CustomerActionTypes";

// Below implemented function takes customer object, customer Id and dispatches the customer actions.
export const updateCustomer = (customer, custId) => {
  return (dispatch) => {
    dispatch(updateCustomerRequest(customer, custId));
    axios
      .put(`http://localhost:9000/rba/editcustomer/${custId}`, customer)
      .then((response) => {
        // Storing the response returned from api.
        const customer = response.data;
        dispatch(updateCustomerSuccess(customer)); 
      })
      .catch((error) => {
        // Dispatching deleteCustomerFailure if any error occurs while api calling.
        dispatch(updateCustomerFailure(error.response.data));
      });
  };
};

//Action Creator
export const updateCustomerRequest = () => {
  return {
    type: UPDATE_CUSTOMER_REQUEST,
  };
};

//Action Creator
export const updateCustomerSuccess = (customer) => {
  return {
    type: UPDATE_CUSTOMER_SUCCESS,
    payload: customer,
  };
};

//Action Creator
export const updateCustomerFailure = (error) => {
  return {
    type: UPDATE_CUSTOMER_FAILURE,
    payload: error,
  };
};
