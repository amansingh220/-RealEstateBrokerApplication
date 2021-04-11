// Importing customer action types.
import {
  FETCH_CUSTOMER_REQUEST,
  FETCH_CUSTOMER_SUCCESS,
  FETCH_CUSTOMER_FAILURE,
} from "../customer_action_types/CustomerActionTypes";

// Setting up the initial state.
const initialState = {
  loading: false,
  customer: [],
  error: "",
};

// Below function is a reducer for fetch customer action.
const reducerForFetchCustomer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CUSTOMER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_CUSTOMER_SUCCESS:
      return {
        loading: false,
        customer: action.payload,
        error: "",
      };
    case FETCH_CUSTOMER_FAILURE:
      return {
        loading: false,
        customer: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

// Exporting the reducer function.
export default reducerForFetchCustomer;
