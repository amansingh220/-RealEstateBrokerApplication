// Importing customer action types.
import {
  DELETE_CUSTOMER_REQUEST,
  DELETE_CUSTOMER_SUCCESS,
  DELETE_CUSTOMER_FAILURE,
} from "../customer_action_types/CustomerActionTypes";

// Setting up the initial state.
const initialState = {
  loading: false,
  customer: [],
  error: "",
};

// Below function is a reducer for delete customer action.
const reducerForDeleteCustomer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_CUSTOMER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_CUSTOMER_SUCCESS:
      return {
        loading: false,
        customer: action.payload,
        error: "",
      };
    case DELETE_CUSTOMER_FAILURE:
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
export default reducerForDeleteCustomer;
