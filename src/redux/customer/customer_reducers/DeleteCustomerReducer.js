import {
    DELETE_CUSTOMER_REQUEST,
    DELETE_CUSTOMER_SUCCESS,
    DELETE_CUSTOMER_FAILURE,
  } from '../customer_action_types/CustomerActionTypes'
  
  const initialState = {
    loading: false,
    customer: [],
    error: ''
  }
  
  const reducerForDeleteCustomer = (state = initialState, action) => {
    switch (action.type) {
      case DELETE_CUSTOMER_REQUEST:
        return {
          ...state,
          loading: true
        }
      case DELETE_CUSTOMER_SUCCESS:
        return {
          loading: false,
          customer: action.payload,
          error: ''
        }
      case DELETE_CUSTOMER_FAILURE:
        return {
          loading: false,
          customer: [],
          error: action.payload
        }
      default: return state
    }
  }
  
export default reducerForDeleteCustomer

  