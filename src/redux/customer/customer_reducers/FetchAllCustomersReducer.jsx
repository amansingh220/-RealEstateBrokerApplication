// Importing customer action types.
import {
  FETCH_CUSTOMERS_REQUEST,
  FETCH_CUSTOMERS_SUCCESS,
  FETCH_CUSTOMERS_FAILURE,
} from "../customer_action_types/CustomerActionTypes";

// Setting up the initial state.
const initialState = {
  loading: false,
  customers: [],
  error: "",
};

// Below function is a reducer for fetch all customer action.
const reducerForFetchAllCustomers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CUSTOMERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_CUSTOMERS_SUCCESS:
      return {
        loading: false,
        customers: action.payload,
        error: "",
      };
    case FETCH_CUSTOMERS_FAILURE:
      return {
        loading: false,
        customers: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

// Exporting the reducer function.
export default reducerForFetchAllCustomers;
