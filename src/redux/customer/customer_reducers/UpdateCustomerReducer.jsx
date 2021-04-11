// Importing customer action types.
import {
  UPDATE_CUSTOMER_REQUEST,
  UPDATE_CUSTOMER_SUCCESS,
  UPDATE_CUSTOMER_FAILURE,
} from "../customer_action_types/CustomerActionTypes";

// Setting up the initial state.
const initialState = {
  loading: false,
  customer: [],
  error: "",
};

// Below function is a reducer for update customer action.
const reducerForUpdateCustomer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CUSTOMER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_CUSTOMER_SUCCESS:
      return {
        loading: false,
        customer: action.payload,
        error: "",
      };
    case UPDATE_CUSTOMER_FAILURE:
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
export default reducerForUpdateCustomer;
