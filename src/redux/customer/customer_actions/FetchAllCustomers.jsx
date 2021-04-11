// Importing customer action types.
import axios from "axios";
import {
  FETCH_CUSTOMERS_REQUEST,
  FETCH_CUSTOMERS_SUCCESS,
  FETCH_CUSTOMERS_FAILURE,
} from "../customer_action_types/CustomerActionTypes";

// Below implemented function dispatches the customer actions.
export const fetchAllCustomers = () => {
  return (dispatch) => {
    dispatch(fetchAllCustomersRequest());
    axios
      .get("http://localhost:9000/rba/listallcustomers")
      .then((response) => {
        // Storing the response returned from api.
        const customers = response.data;
        dispatch(fetchAllCustomersSuccess(customers));
      })
      .catch((error) => {
        // Dispatching deleteCustomerFailure if any error occurs while api calling.
        dispatch(fetchAllCustomersFailure(error.response.data));
      });
  };
};

//Action Creator
export const fetchAllCustomersRequest = () => {
  return {
    type: FETCH_CUSTOMERS_REQUEST,
  };
};

//Action Creator
export const fetchAllCustomersSuccess = (customers) => {
  return {
    type: FETCH_CUSTOMERS_SUCCESS,
    payload: customers,
  };
};

//Action Creator
export const fetchAllCustomersFailure = (error) => {
  return {
    type: FETCH_CUSTOMERS_FAILURE,
    payload: error,
  };
};
